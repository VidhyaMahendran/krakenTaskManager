'use strict';


module.exports = function (server) {

    server.get('/changeLanguage/:lang', function (req, res) {

        res.cookie('language', req.param('lang'));
        res.redirect('/');

    });

};
