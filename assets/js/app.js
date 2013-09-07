App = Ember.Application.create({
  rootElement: "#app"
});

App.initializer({
  name: "soundmanager",
  initialize: function() {
    soundManager.setup({
      url: '/static/swf'
    });
  }
});

App.Playlist = Em.Object.extend();

App.Playlist.reopenClass({
  find: function(song_id) {
    if (song_id) {
      return App.Playlist.find().then(function(list) {
      for (var i = 0; i < list.tracks.length; i++) {
        if (list.tracks[i].id == song_id) {
          return list.tracks[i];
        }
      }
    });
    } else {
      return Ember.$.getJSON(setUrl).then(function(list) {
      for (var i = 0; i < list.tracks.length; i++) {
        if (i != (list.tracks.length - 1)) {
          list.tracks[i].next_song = list.tracks[(i + 1)]
        }
        if (i != 0) {
          list.tracks[i].previous_song = list.tracks[(i - 1)]
        }
      }
      return list
      });
    }
  }
});

App.Router.map(function() {
  this.resource('song', { path: '/song/:song_id' });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    soundManager.stopAll();
    return App.Playlist.find();
  }
});

App.SongRoute = Ember.Route.extend({
  model: function(params) {
      return App.Playlist.find(params.song_id);
    }
});


App.SoundPlayerView = Ember.SoundPlayerView.extend({
  templateName: 'soundplayer',

  playPauseLink: function() {
    if (this.get('isPlaying')) {
      return 'glyphicon glyphicon-pause';
    } else {
      return 'glyphicon glyphicon-play';
    }
  }.property('isPlaying'),

});


Ember.Handlebars.helper('soundPlayer', App.SoundPlayerView);
