/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

var User        = require('./model').User,
    Invitation  = require('./model').Invitation,
    Song        = require('./model').Song,
    userPicture = require('./user-picture');

exports.create = function (user, callback) {
  User.create(user, function (err, newUser) {
    if (err) {
      // TODO: handle error
      console.log(err);
    }
    callback(err, newUser);
  });
};

exports.delete = function (userId, callback) {
  User.remove({
    _id: userId
  }, function (err, numberAffected, raw) {
    if (err) {
      // TODO: handle error
      console.log(err);
      return callback(err);
    }

    Song.remove({
      _creator: userId
    }, function (err, numberAffected, raw) {
      if (err) {
        // TODO: handle error
        console.log(err);
      }
    });

    callback(null);
  });
};

function setUserPicture (user, pictureUrl) {
  var userObject = user.toObject();
  userObject.id = user._id;
  delete userObject._id;
  userObject.picture = pictureUrl;
  return userObject;
}

exports.findById = function (userId, callback) {
  User.findById(userId, function (err, user) {
    if (err) {
      console.log(err);
      return callback(err);
    }

    if (user) {
      userPicture.getURL(user, function (err, url) {
        if (err) {
          console.log(err);
          return callback(err);
        }
  
        callback(null, setUserPicture(user, url));
      });
    } else {
      callback(null, null);
    }
  });
};

exports.findByEmail = function (email, callback) {
  User.findOne({ email: email }, function (err, user) {
    if (err) {
      console.log(err);
      return callback(err);
    }
    
    if (user) {
      userPicture.getURL(user, function (err, url) {
        if (err) {
          console.log(err);
          return callback(err);
        }
    
        callback(null, setUserPicture(user, url));
      });
    } else {
      callback(null, null);
    }
  });
};

exports.findByNickname = function (nickname, callback) {
  User.findOne(
    { name: nickname },
    '-email -invitationCode',
    function (err, user) {
      if (err) {
        console.log(err);
        return callback(err);
      }
      
      if (user) {
        userPicture.getURL(user, function (err, url) {
          if (err) {
            console.log(err);
            return callback(err);
          }
      
          var userObject = setUserPicture(user, url);
          delete userObject.linkedAccounts;
          callback(null, userObject);
        });
      } else {
        callback(null, null);
      }
    });
};

exports.setInvitation = function (userId, code, callback) {
  Invitation.findOne({ code: code }, function (err, invitation) {
    if (err) {
      // TODO: handle error
      console.log(err);
      return callback(err);
    }

    if (!invitation || invitation.used) {
      return callback({ code: 'ERRINVALID' });
    }

    User.update(
      { _id: userId },
      { invitationCode: code },
      function (err, numberAffected, raw) {
        if (err) {
          // TODO: handle error
          console.log(err);
          return callback(err);
        }

        invitation.used = true;
        invitation.save(function (err) {
          // TODO: handle error
          console.log(err);
        });

        callback(null);
      });
  });
};
