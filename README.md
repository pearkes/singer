# Singer

A Jekyll template to make a custom album website, including a music
player and configurable content, all hosted by GitHub pages and powered
by <a href="https://soundcloud.com">SoundCloud</a>.

It's all free and easy to customize.

## Demo

A live example is located at [aminoctu.com](http://aminoctu.com), and
the source can be found at [github.com/pearkes/aminoctu.com](https://github.com/pearkes/aminoctu.com).

Coincidentally, this demo, and my friend who makes that music, spurred
creation of this project.

## Configuring

To use Singer, you don't really need any technical skills. You just
need these things:

- A free GitHub account. Sign up [here](https://github.com/signup/free).
- A SoundCloud account with a "set" you have created, which you wish
to display on your website.
- A domain name with an A record pointing to the IP address `204.232.175.78`
- Optionally, a Google Analytics account. Sign up [here](http://www.google.com/analytics/)
- An album cover in high resolution, but compressed to be lightweight

Got all that? Good. You may continue.

### Step 1

Make sure you're signed into GitHub. Then go [here](https://github.com/pearkes/singer).

Now you'll want to "Fork" the repository. Click the Fork button up in the
top right hand corner.

![fork me](https://dl.dropboxusercontent.com/s/yry2vutph91x1u2/2013-09-07%20at%202.36%20PM.png)

You should be on your new repository page, called `username/singer`.

Select the `_config.yml` file and then the "Edit" button.

![config select](https://dl.dropboxusercontent.com/s/2plmm7lbmzbcd5i/2013-09-07%20at%202.37%20PM.png)
![edit button](https://dl.dropboxusercontent.com/s/06c24dq4gz94uaj/2013-09-07%20at%202.38%20PM.png)

### Step 2

You should be editing your configuration now.

This is pretty obvious – simply change all of the preconfigured values,
replacing them with your own.

There are three values that are a bit more involved. Here are instructions for each:

- [Retrieving your "soundcloud_set_id"](#retrieving-your-set-id)
- [Retrieving your "soundcloud_key"](#retrieving-your-soundcloud-key)
- [Choosing Custom Fonts](#custom-fonts)
- [Uploading a background image](#background-image)

You should be all done editing your configuration now. Click the commit
changes button:

![commit changes](https://dl.dropboxusercontent.com/s/m0cz8oooe4loy8l/2013-09-07%20at%202.34%20PM%20%281%29.png)

### Step 3

Now you want to set-up a custom domain. Take that domain that you purchased,
and go here:

![cname file](https://dl.dropboxusercontent.com/s/1d4lxg4jy0cabed/2013-09-07%20at%202.35%20PM.png)

Now, select the edit button in the top right corner and change the `example.com`
to whatever the domain you purchased is.

Hit the "Commit Changes" button.

### Step 4

You've now set everything up. It's all a waiting game. If you just bought
your domain, it still may not be pointed over. It can take up to a day
for this to happen.

GitHub also doesn't build the page instantly, so that might not have
happened yet.

Patience! And if things aren't working in a couple of days head over to
the singer repository and [file an issue](https://github.com/pearkes/singer/issues/new).

## Retrieving Your SoundCloud Key

You're going to be a developer!

In order to stream music to your website, you have to register as a developer
with SoundCloud. Luckily they make it pretty easy.

Just log-in to your SoundCloud account and go to [this page](http://soundcloud.com/you/apps).

Then, click the "Register Application" button and enter a name.

On the following screen, your key will be generated. This is your key:

![soundcloud key](https://dl.dropboxusercontent.com/s/4kt49wk88lswtt6/2013-09-07%20at%202.27%20PM.png)

## Retrieving Your Set ID

Open up a new tab in your browser and enter the following:

    http://api.soundcloud.com/resolve?url=YOUR_SET_URL&client_id=YOUR_CLIENT_ID

`YOUR_SET_URL` looks like this: `https://soundcloud.com/ami-noctu/sets/individual-business`

You just retrieved `YOUR_CLIENT_ID` above, we called it a "key".

So, enter those values into the url and hit enter. You should then be
redirected to a new page that looks like this:

![redirect](https://dl.dropboxusercontent.com/s/4n35a4pqeigdf47/2013-09-07%20at%202.30%20PM.png)

The highlighted number is your `set_id`.

## Custom Fonts

So, you don't want the fonts provided by default. No problem!

Just head over to [Google Fonts](http://www.google.com/fonts), and replace
the names of the ones you want to use in the `_config.yml` file.

Here are some examples of the names:

![font names](https://dl.dropboxusercontent.com/s/ec0s9k3pkxmv2zy/2013-09-07%20at%202.40%20PM.png)

## Background Image

Head over to [imgur](http://imgur.com/), upload your album image and
grab the direct link, that is, ending in `.jpg`, `.jpeg` or `.png`.

Then, place that link in your `_config.yml` file.

## Help

Feel free to [file an issue](https://github.com/pearkes/singer/issues/new)
and someone will probably help you!

## Contributing

See the [contributing guide](CONTRIBUTING.md).
