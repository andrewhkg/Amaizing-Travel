app.controller('AttractionCtrl', ['$scope', '$http', '$stateParams','$state', function($scope, $http, $stateParams, $state){
  if ($state.current.name == "attractions") {
    $http({
      method: "GET",
      url: 'http://localhost:3000/api/attractions'
    }).then(function(response){
      console.log(response.data.attractions)
      $scope.attractions = response.data.attractions;
    });
  } else {
    $http({
      method: "GET",
      url: 'http://localhost:3000/api/attractions/' + $stateParams.id
    }).then(function(response){
      console.log(response.data)
      $scope.attraction = response.data;
    });
  }
}]);
