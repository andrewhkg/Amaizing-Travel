app.controller('CheckoutCtrl', ['$scope', '$http', '$stateParams','$state', function($scope, $http, $stateParams, $state){
  $http({
    method: "GET",
    url: 'http://localhost:3000/api/bookings/' + $stateParams.bookingId
  }).then(function(response){
    $scope.booking    = response.data;
    $scope.attraction = response.data.attraction_id;
  });
}]);
