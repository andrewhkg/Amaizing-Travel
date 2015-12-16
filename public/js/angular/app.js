var app = angular.module("amazingApp", ["ui.router", "ngResource", "720kb.datepicker"]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/templates/static/index.html'
    })
    .state('attractions', {
      url: '/attractions',
      templateUrl: '/templates/attractions/index.html',
      controller: 'AttractionCtrl'
    })
    .state('show', {
      url: '/attractions/:id',
      templateUrl: '/templates/attractions/show.html',
      controller: 'AttractionCtrl'
    })
    .state('book', {
      url: '/attractions/:id/book',
      templateUrl: '/templates/bookings/book.html',
      controller: 'BookingCtrl'
    })
    .state('checkout', {
      url: '/booking_confirmation/:bookingId',
      templateUrl: '/templates/bookings/checkout.html',
      controller: 'CheckoutCtrl'
    })
    .state('signin', {
      url: '/signin',
      templateUrl: '/templates/signin/index.html',
      controller: 'SigninCtrl'
    })
    .state('signup', {
      url: '/signup' ,
      templateUrl: '/templates/signup/index.html',
      controller: 'SignupCtrl'
    })
}])
