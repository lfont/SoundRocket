/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

var ono = require('../../lib/ono');

exports.show = function (req, res) {
  ono.album.getInfo(
    req.params.artist,
    req.params.album,
    function (err, info) {
      if (err) {
        return res.send(400, { error: err });
      }

      res.send(info);
    });
};
