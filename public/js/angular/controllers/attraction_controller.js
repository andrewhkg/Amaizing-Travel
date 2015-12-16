app.controller('AttractionCtrl', ['CurrentUser', '$scope', '$http', '$stateParams','$state', function(CurrentUser, $scope, $http, $stateParams, $state){
  $scope.total_price = 0;


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
    console.log('called get one with ' + $stateParams.id )
    $http({
      method: "GET",
      url: 'http://localhost:3000/api/attractions/' + $stateParams.id
    }).then(function(response){
      console.log(response.data)
      $scope.attraction = response.data;
    });
  }


  $scope.addBooking = function () {
    console.log('booking started saving');
    $http.post('http://localhost:3000/api/bookings/',
      {booking: $scope.booking})
    .then(function(response){
      console.log(response.data)
      $scope.booking = response.data;
      $state.go('cart', {bookingId: response.data.booking._id} );
    })
    .otherwise({
      redirectTo: '/login'
    });
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
    qnt_child: 0
  };

  $scope.updateTotal = function() {

    $scope.total_price = parseInt($scope.booking.qnt_adult) * parseInt($scope.attraction.price_adult_discount) + parseInt($scope.booking.qnt_child) * parseInt($scope.attraction.price_child_discount)

    // console.log($scope.attraction.price_adult_discount);
    // console.log($scope.attraction.price_child_discount);
    // console.log($scope.total_price);
  };

  $scope.cartBooking = function () {
    console.log('booking_cart');
    console.log($stateParams.bookingId);
    $http({
      method: "GET",
      url: 'http://localhost:3000/api/bookings/' + $stateParams.bookingId
    }).then(function(response){
      console.log('we got a booking from the server');
      console.log(response.data);
      $scope.booking = response.data;
    });
  };



}]);
