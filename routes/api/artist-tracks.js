/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

var ono = require('../../lib/ono');

exports.show = function (req, res) {
  ono.getTrackInfo(
    req.params.artistName,
    req.params.trackName,
    function (err, info) {
      if (err) {
        return res.send(400, { error: err });
      }

      res.send(info);
    });
};
