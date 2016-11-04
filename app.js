var app = angular.module('app', []);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
		templateUrl: 'view/home.html',
		controller: 'home'
	}).
      when('/reg', {
		templateUrl: 'view/registration.html',
		controller: 'regCtrl'
      }).
      when('/login', {
		templateUrl: 'view/login.html',
		controller: 'loginCtrl'
      }).
      otherwise({
		redirectTo: '/home'
      });
}]);

/*
sampleApp.controller('regCtrl', function($scope) {
	
	$scope.message = 'This is Add new order screen';
	
});*/



app.controller('home', [
    '$scope', 'Services',
    function home($scope, userService) {
        //var myData = this;
     
        //myData.getLists = function() {
            userService.getCustomers()
                .then(function(user) {               
                    $scope.data = user;
                },
                function(users) {
                    console.log('users retrieval failed.')
                });
        //};
        
        //myData.getLists();

    }
]);