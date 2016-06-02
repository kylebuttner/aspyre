# Aspyre
Aspyre is a simple, beautiful Chrome extension designed to help users keep track of and achieve their long term goals. It was created in 9 days as a final project for [Makers Academy](https://www.makersacademy.com).

There is also a [separate Rails API backend](https://github.com/kylebuttner/aspyre-api).

[Click here](https://www.facebook.com/caspar.fischerzernin/videos/vb.1610940054/10206035280073654/?type=2&theater) for a short video demo!

![screenshot](http://i.imgur.com/9pG4gbJ.jpg)

## Installation
Clone the repo and install dependencies.
```
git clone https://github.com/kylebuttner/aspyre.git
cd aspyre

bower install
npm install
```
To run, use http-sever. (Download globally with `npm install http-server -g`)
```
http-server app
```
Then navigate to http://localhost:8080

## Tests
Aspyre uses Karma for unit testing and Protractor for e2e tests.

To run the Karma tests, use
```
karma start test/karma.conf.js
```

To run the Protractor tests, you will need to start the webdriver and run a server. In one tab, run
```
http-server app
```
from the root directory.

In another tab, run
```
webdriver-manager start
```

Finally, run Protractor with
```
protractor test/protractor.conf.js
```

(At the moment, some of these tests will be failing due to some rushed work as our presentation deadline approached! Will be fixed soon.)
