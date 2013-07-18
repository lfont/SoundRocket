/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

var models = require('../../models');

exports.index = function (req, res) {
  models.songs.queued(req.user.id, function (err, songs) {
    if (err) {
      res.send(400, { error: err });
      return;
    }
    res.send(songs);
  });
};

exports.create = function (req, res) {
  models.songs.queue(req.user.id, req.body, function (err, numberAffected) {
    if (err) {
      res.send(400, { error: err });
      return;
    }
    res.send({ success: true, count: numberAffected });
  });
};

exports.update = function (req, res) {
  models.songs.dequeue(req.user.id, req.body.url, function (err, numberAffected) {
    if (err) {
      res.send(400, { error: err });
      return;
    }
    res.send({ success: true, count: numberAffected });
  });
};
