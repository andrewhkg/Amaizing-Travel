app.controller('SigninCtrl', ['CurrentUser', '$scope', '$http', '$state',  function (CurrentUser, $scope, $http, $state){
  $scope.submit = function () {
    $http({
      method: "POST",
      url: "http://localhost:3000/signin",
      data: $scope.signinForm
    }).then(function(response){
      console.log(response);
      CurrentUser.user = response.data;
      $state.go('attractions');
    }, function(response){
      console.log(response.data.message);
    })
  };
}]);
