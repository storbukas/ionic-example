This is an example application using the [Ionic](http://ionicframework.com/docs/) framework.

### With the Ionic CLI:

Install the required software

```bash
$ sudo npm install -g ionic cordova
$ git clone https://github.com/storbukas/repo
```

Then, to run it, cd into `repo` and run:

```bash
$ npm install
$ ionic serve
$ ionic state restore
```

Add the platforms you'd like to develop for:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

```bash
$ ionic cordova platform add android
$ ionic cordova run android
```

Substitute ios for android if not on a Mac.
