app.controller('AttractionCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){

  $scope.getAll = function () {
    $http({
      method: "GET",
      url: 'http://localhost:3000/api/attractions'
    }).then(function(response){
      console.log(response.data.attractions)
      $scope.attractions = response.data.attractions;
    });
  }

  $scope.getOne = function () {
    $http({
      method: "GET",
      url: 'http://localhost:3000/api/attractions/' + $stateParams.id
    }).then(function(response){
      console.log(response.data)
      $scope.attraction = response.data;
    });
  }

  $scope.getOne = function () {
    $http({
      method: "POST",
      url: 'http://localhost:3000/api/bookings/' + $stateParams.id
    }).then(function(response){
      console.log(response.data)
      $scope.booking = response.data;
    });
  }

//   // //POST
// router.post('/bookings', function (req, res){
//   Booking.create(req.body.booking, function (err, booking){
//     if (err) {
//       res.json({message: "There was an error with your POST request " + err});
//     } else {
//       res.json({message: "Created!"})
//       // res.json(booking)
//     }
//   });
// })


// angular.module('defaultValueSelect', [])
//  .controller('ExampleController', ['$scope', function($scope) {
//    $scope.data = {
//     availableOptions: [
//       {id: '1', name: 'Option A'},
//       {id: '2', name: 'Option B'},
//       {id: '3', name: 'Option C'}
//     ],
//     selectedOption: {id: '3', name: 'Option C'} //This sets the default value of the select in the ui
//     };
// }]);


  // $http({
  //   method: 'POST',
  //   url: 'http://localhost:3000/api/attractions'
  // }).then(function(response){
  //   console.log(response);
  // }, function(response){
  //   console.log(response);
  // })
}])
