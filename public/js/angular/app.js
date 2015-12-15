function onGoogleReady() {
  angular.bootstrap(document.getElementById("map"), ['app.ui-map']);
}

var app = angular.module("amazingApp", "app.ui-map", ["ui.router", "ngResource", "720kb.datepicker", "ui.map"]);

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
    .state('book', {
      url: '/attractions/:id/book',
      templateUrl: '/templates/bookings/book.html',
      controller: 'AttractionCtrl'
    })
    .state('cart', {
      url: '/booking_confirmation',
      templateUrl: '/templates/bookings/booking_cart.html',
      controller: 'AttractionCtrl'
    })
    .state('show', {
      url: '/attractions/:id',
      templateUrl: '/templates/attractions/show.html',
      controller: 'AttractionCtrl'
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
