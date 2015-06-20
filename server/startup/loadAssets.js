Meteor.startup(function () {
  if (DCAssets.find().count() === 0) {
    var assets = [
      {'assetTag': '12345',
        'dcName': 'CDC',
        dcFloor: "3",
      dcRow: "1",
      dcRack: "1",
      elevation: "21"}
    ];
    for (var i = 0; i < assets.length; i++)
      DCAssets.insert({assetTag: assets[i].assetTag, dcName: assets[i].dcName,
      dcFloor: assets[i].dcFloor, dcRow: assets[i].dcRow, dcRack: assets[i].dcRack,
      elevation: assets[i].elevation});
  }
});