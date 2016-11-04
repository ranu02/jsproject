	app.service('Services', function ($http){
		this.getCustomers = function () {
			        

					/*var def = $q.defer();

            $http.get("http://localhost/nav/api/users/view/1")
                .success(function(success) { 
                    def.resolve(success);    
                })
                .error(function(success) {
                    def.reject("Failed to get users");
                });
          
            return def.promise;*/
            
            return $http.get('http://localhost/nav/api/users/view').then(function(data) {
  									return data.data;
						});

			};
});