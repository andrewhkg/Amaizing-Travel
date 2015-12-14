app.directive('breadcrumb', navbarView);

function navbarView (){
  var directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "templates/partials/breadcrumb.html";
  directive.scope = {
    links: '@'
  };
  return directive;
}

