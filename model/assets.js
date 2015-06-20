DCAssets = new Mongo.Collection("assets");

//DCAssets.allow({
//  insert: function (userId, asset) {
//    return userId && asset.owner === userId;
//  },
//  update: function (userId, asset, fields, modifier) {
//    if (userId !== asset.owner)
//      return false;
//
//    return true;
//  },
//  remove: function (userId, asset) {
//    if (userId !== asset.owner)
//      return false;
//
//    return true;
//  }
//});

Meteor.methods({
  //invite: function (assetId, userId) {
  //  check(assetId, String);
  //  check(userId, String);
  //  var asset = DCAssets.findOne(assetId);
  //  if (!asset)
  //    throw new Meteor.Error(404, "No such asset");
  //  if (asset.owner !== this.userId)
  //    throw new Meteor.Error(404, "No such asset");
  //  if (asset.public)
  //    throw new Meteor.Error(400,
  //      "That asset is public. No need to invite people.");
  //
  //  if (userId !== asset.owner && ! _.contains(asset.invited, userId)) {
  //    DCAssets.update(assetId, { $addToSet: { invited: userId } });
  //
  //    var from = contactEmail(Meteor.users.findOne(this.userId));
  //    var to = contactEmail(Meteor.users.findOne(userId));
  //
  //    if (Meteor.isServer && to) {
  //      // This code only runs on the server. If you didn't want clients
  //      // to be able to see it, you could move it to a separate file.
  //      Email.send({
  //        from: "noreply@assetmanager.com",
  //        to: to,
  //        replyTo: from || undefined,
  //        subject: "ASSET: " + asset.title,
  //        text:
  //        "Hey, I just invited you to '" + asset.title + "' on Asset Manager." +
  //        "\n\nCome check it out: " + Meteor.absoluteUrl() + "\n"
  //      });
  //    }
  //  }
  //}
  //,
  //rsvp: function (assetId, rsvp) {
  //  check(assetId, String);
  //  check(rsvp, String);
  //  if (! this.userId)
  //    throw new Meteor.Error(403, "You must be logged in to RSVP");
  //  if (! _.contains(['yes', 'no', 'maybe'], rsvp))
  //    throw new Meteor.Error(400, "Invalid RSVP");
  //  var asset = DCAssets.findOne(assetId);
  //  if (! asset)
  //    throw new Meteor.Error(404, "No such asset");
  //  if (! asset.public && asset.owner !== this.userId &&
  //    !_.contains(asset.invited, this.userId))
  //  // private, but let's not tell this to the user
  //    throw new Meteor.Error(403, "No such asset");
  //
  //  var rsvpIndex = _.indexOf(_.pluck(asset.rsvps, 'user'), this.userId);
  //  if (rsvpIndex !== -1) {
  //    // update existing rsvp entry
  //
  //    if (Meteor.isServer) {
  //      // update the appropriate rsvp entry with $
  //      DCAssets.update(
  //        {_id: assetId, "rsvps.user": this.userId},
  //        {$set: {"rsvps.$.rsvp": rsvp}});
  //    } else {
  //      // minimongo doesn't yet support $ in modifier. as a temporary
  //      // workaround, make a modifier that uses an index. this is
  //      // safe on the client since there's only one thread.
  //      var modifier = {$set: {}};
  //      modifier.$set["rsvps." + rsvpIndex + ".rsvp"] = rsvp;
  //      DCAssets.update(assetId, modifier);
  //    }
  //
  //    // Possible improvement: send email to the other people that are
  //    // coming to the asset.
  //  } else {
  //    // add new rsvp entry
  //    DCAssets.update(assetId,
  //      {$push: {rsvps: {user: this.userId, rsvp: rsvp}}});
  //  }
  //}
});

//var contactEmail = function (user) {
//  if (user.emails && user.emails.length)
//    return user.emails[0].address;
//  if (user.services && user.services.facebook && user.services.facebook.email)
//    return user.services.facebook.email;
//  return null;
//};
