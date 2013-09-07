Ember.SoundPlayerView = Ember.View.extend({
  init: function() {
    this.set('percentWidth', 'width: ' + 0 + '%;');
    var self = this;
    soundManager.onready(function() {
      self.loadSound();
    });
    this._super();
  },

  didChange: function() {
    this.loadSound();
  }.observes('url'),

  soundLoaded: function() {
    this.set('isLoaded', true);
  },

  loadSound: function() {
    var self = this;

    function destroySound(callback) {
      if (self.get('sound')) {
        soundManager.stopAll();
        self.get('sound').destruct();
        self.set('sound', undefined);
        self.set('percentWidth', 'width: ' + 0 + '%; opacity: 0;');
        self.set('isLoaded', false)
        self.set('isPlaying', false)
      }
      callback();
    }

    destroySound(function() {
      var songUrl = self.get('url') + "?consumer_key=" + scKey;
      var soundObject = soundManager.createSound({
        url: songUrl,
        stream: true,
        multiShot: false,
        autoPlay: true,
        onplay: function() { self.set('isPlaying', true)},
        onload: function() { self.set('isLoaded', true) },
        whileplaying: function() { self.tick(); },
        onfinish: function() { self.finish(); },
      });
      self.set('sound', soundObject);
    });

  },

  play: function() {
    this.get('sound').resume();
    this.set('isPlaying', true)
  },

  pause: function() {
    this.get('sound').pause();
    this.set('isPlaying', false)
  },

  toggle: function() {
    if (this.get('isPlaying')) {
      this.pause();
    } else {
      this.play();
    }
  },

  finish: function() {
    var next_song = this.get('controller').get('model').next_song
    if (next_song) {
      this.get('controller').get('target').transitionTo('song', next_song);
    } else {
      this.get('controller').get('target').transitionTo('index');
    }
  },

  tick: function() {
    this.set('position', this.get('sound').position);
    var percent = (this.get('sound').position / this.get('sound').duration * 100);
    this.set('percentWidth', 'width: ' + percent + '%');
  }
});
