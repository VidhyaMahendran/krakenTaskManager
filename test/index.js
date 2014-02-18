/*global describe:false, it:false, before:false, after:false, afterEach:false*/

'use strict';


var app = require('../index'),
    kraken = require('kraken-js'),
    request = require('supertest'),
    assert = require('assert'),
    VALID_RESPONSE = '<!DOCTYPE html><html><head><title>Kraken Task Manager</title><meta http-equiv="content-type" content-type="text/html; charset=utf-8" /><meta name="description" content="Aconex RWD implemented using HTML5, CSS3 and Media Query" /><meta name="keywords" content="Aconex, RWD, Responsive Web Design, HTML5, CSS3, Media Query" /><meta name="viewport" content="initial-scale=1.0, width=device-width"><link rel="stylesheet" media="all" href="css/app.css" /><link type="image/x-icon" rel="icon" href="img/favicon.ico" /><script src="js/app.js"></script></head><body><div class="headerWrapper"><section id="header" class="clearFloat"><header class="logo"><h1><a href="/">Kraken Task Manager</a></h1></header><nav id="navigation"><h3 class="miniLink" id="mobileNavLink">Menu</h3><ul id="topMenu" class="topNavigation"><li class=""><a id="addTaskLink" href="addEditTasks">Add Task</a></li><li class=""><a id="listTaskLink" href="listTasks">List Tasks</a></li></ul></nav></section></div><div class="contentWrapper"><section id="content"><div class="mainWrapper"><div class="lang"><ul class="langNav"><li><strong>Switch language:</strong></li><li><a href="/changeLanguage/en_US">English</a></li><li><a href="/changeLanguage/he_IL">Hebrew</a></li></ul></div><section id="main"><div id="listTaskContent"><header><h2>Welcome to Kraken Task Manager</h2></header><div id="hasLocalStorage" class="message hide"><p>Woo hoo! Your browser supports localStorage.</p></div><div id="hasNoLocalStorage" class="message error hide"><p>Oops! Your browser does not support localStorage.</p></div><p id="noTasks">For adding/listing tasks in this Application, your browser needs LocalStorage support.</p></div></section></div><div class="footerWrapper"><section id="footer"><header><h3>Copyright Information</h3></header><p>Copyright &copy; 2014. All rights reserved.</p></section></div></section></div></body></html>';



describe('index', function () {

    var mock;


    beforeEach(function (done) {
        kraken.create(app).listen(function (err, server) {
            mock = server;
            done(err);
        });
    });


    afterEach(function (done) {
        mock.close(done);
    });


    it('should load "home page content"', function (done) {
        request(mock)
            .get('/')
            .expect(200)
            .expect('Content-Type', /html/)
            .expect(VALID_RESPONSE)
            .end(function(err, res){
                done(err);
            });
    });

});