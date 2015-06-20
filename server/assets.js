//Meteor.publish("assets", function (options, searchString) {
//  if (searchString == null)
//    searchString = '';
//
//  Counts.publish(this, 'numberOfAssets', DCAssets.find({
//    'name' : { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' },
//    $or:[
//      {$and:[
//        {"public": true},
//        {"public": {$exists: true}}
//      ]},
//      {$and:[
//        {owner: this.userId},
//        {owner: {$exists: true}}
//      ]},
//      {$and:[
//        {invited: this.userId},
//        {invited: {$exists: true}}
//      ]}
//    ]}), { noReady: true });
//  return DCAssets.find({
//    'name' : { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' },
//    $or:[
//      {$and:[
//        {"public": true},
//        {"public": {$exists: true}}
//      ]},
//      {$and:[
//        {owner: this.userId},
//        {owner: {$exists: true}}
//      ]},
//      {$and:[
//        {invited: this.userId},
//        {invited: {$exists: true}}
//      ]}
//    ]} ,options);
//});