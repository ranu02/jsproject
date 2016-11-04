	'use strict';

		app.controller('regCtrl', registration);

		function registration($scope,$http){
			$scope.register = function(){
				var data = {}
					data.name = $scope.name;
					data.lastname = $scope.lastname;
					data.pwd = $scope.pwd;
					data.email = $scope.email;

					var config = {
				                headers : {
				                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				                }
            		}

            		$http.post('http://localhost/nav/api/users/add', data)
            		.success(function(data, status, headers, config){
            			console.log('success'+data);
            		})
            		.error(function(data, status, headers, config){
            				console.log('error'+data);
            		});
			}
		}



		
