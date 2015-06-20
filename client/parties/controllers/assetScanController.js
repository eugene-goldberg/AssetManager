angular.module("assetManager").controller("AssetScanCtrl", ['$scope', '$meteor', '$rootScope', '$state',
  function($scope, $meteor, $rootScope, $state){

    $scope.page = 1;
    $scope.perPage = 3;
    $scope.sort = { name: 1 };
    $scope.orderProperty = '1';

    $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
    
    //$scope.assets = $meteor.collection(function() {
    //  return DCAssets.find({}, {
    //    sort : $scope.getReactively('sort')
    //  });
    //});

      $scope.assets = $meteor.collection(DCAssets);

    //$meteor.autorun($scope, function() {
    //  $meteor.subscribe('assets', {
    //    limit: parseInt($scope.getReactively('perPage')),
    //    skip: (parseInt($scope.getReactively('page')) - 1) * parseInt($scope.getReactively('perPage')),
    //    sort: $scope.getReactively('sort')
    //  }, $scope.getReactively('search')).then(function() {
    //    $scope.assetsCount = $meteor.object(Counts ,'numberOfAssets', false);
    //
    //    $scope.assets.forEach( function (asset) {
    //      asset.onClicked = function () {
    //        $state.go('assetDetails', {assetId: asset._id});
    //      };
    //    });
    //  });
    //});

    $scope.remove = function(asset){
      $scope.assets.splice( $scope.assets.indexOf(asset), 1 );
    };

    ///////////////////////////SCAN//////////////////
    console.log('this is scan controller');
    $scope.submit = function(){
      console.log('this is submit');
      $scope.assets.save({
          assetTag: $scope.assetTag,
          dcName: $scope.dcName,
          dcFloor: $scope.dcFloor,
          dcRow: $scope.dcRow,
          dcRack: $scope.dcRack,
          elevation: $scope.elevation
      });
    };
    $scope.placeholderMessage = "Waiting...";
    var pressed = false;
    var chars = [];
    $(window).keypress(function(e) {
      if (e.which >= 48 && e.which <= 57) {
        chars.push(String.fromCharCode(e.which));
      }
      //console.log(e.which + ":" + chars.join("|"));
      if (pressed == false) {
        setTimeout(function(){
          // check we have a long length e.g. it is a barcode
          if (chars.length >= 10) {
            var barcode = chars.join("");
            console.log("Barcode Scanned: " + barcode);
            $("#barcode").val(barcode);
          }
            console.log("Barcode Scanned: " + $scope.assetTag);
          chars = [];
          pressed = false;
        },500);
      }
      pressed = true;
    });
    //////////////////////////////
}]);