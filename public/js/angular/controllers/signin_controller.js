app.controller('SigninCtrl', ['CurrentUser', '$scope', '$http', '$state',  function (CurrentUser, $scope, $http, $state){
  $scope.submit = function () {
    // your $http
    $http({
      method: "POST",
      url: "http://localhost:3000/signin",
      data: $scope.signinForm
    }).then(function(data){
      console.log(data);
      CurrentUser.user = data.data;
      $state.go('attractions');
    }, function(data){
      console.log(data.data.message);
      event.preventDefault();
    })
  }
}])

 // $scope.$watch(Auth.isLoggedIn, function (value, oldValue) {

 //    if(!value && oldValue) {
 //      console.log("Disconnect");
 //      $location.path('/login');
 //    }

 //    if(value) {
 //      console.log("Connect");
 //      //Do something when the user is connected
 //    }

 //  }, true);

// .controller('loginCtrl', [ '$scope', 'Auth', function ($scope, Auth) {
//   //submit
//   $scope.login = function () {
//     // Ask to the server, do your job and THEN set the user

//     Auth.setUser(user); //Update the state of the user in the app
//   };
// }])
