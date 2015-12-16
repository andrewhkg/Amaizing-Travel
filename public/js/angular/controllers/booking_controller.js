app.controller('BookingCtrl', ['$scope', '$http', '$stateParams','$state', function($scope, $http, $stateParams, $state){
  $http({
    method: "GET",
    url: 'http://localhost:3000/api/attractions/' + $stateParams.id
  }).then(function(response){
    console.log(response.data)
    $scope.attraction = response.data;
  });

  $scope.addBooking = function () {
    $http.post('http://localhost:3000/api/bookings/',
      {booking: $scope.booking})
    .then(function(response){
      console.log(response)
      $scope.booking = response.data;
      $state.go('checkout', {bookingId: response.data._id} );
    }, function(response){
      console.log(response);
    })
  }

  $scope.data = {
    availableOptions: [
      {id: '0', name: '0'},
      {id: '1', name: '1'},
      {id: '2', name: '2'},
      {id: '3', name: '3'},
      {id: '4', name: '4'},
      {id: '5', name: '5'},
      {id: '6', name: '6'}
    ],
    selectAdult: 0,
    selectChild: 0
  };

  $scope.booking = {
    qnt_adult: 0,
    qnt_child: 0,
    date: null,
    total_price: 0,
    attraction_id: $stateParams.id
  };

  $scope.updateTotal = function () {
    var adultSubtotal = $scope.booking.qnt_adult ? parseInt($scope.booking.qnt_adult) * parseInt($scope.attraction.price_adult_discount) : 0;
    var childSubtotal = $scope.booking.qnt_child ? parseInt($scope.booking.qnt_child) * parseInt($scope.attraction.price_child_discount) : 0;
    $scope.booking.total_price = adultSubtotal + childSubtotal;
  };

  $scope.checkParams = function () {
    return $scope.total_price <= 0 || $scope.booking.date == null
  }
}]);
