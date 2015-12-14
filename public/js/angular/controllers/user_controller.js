app.controller('UserCtrl', ['$scope', '$http', function($scope, $http){
  $scope.attractions = [];

  function getAttractions(){
    $http({
      method: "GET",
      url: 'http://localhost:3000/api/users'
    }).then(function(response){
      console.log(response)
      $scope.attractions = response.data.attractions;
    });
  }

  getAttractions();
}])
