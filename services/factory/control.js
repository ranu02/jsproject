'use strict'
app.factory('CntServices',cntServices);

// CntServices.$inject=['$http'];

function cntServices ($http) {
	
	var services = {};

	services.GetAll = GetAll;
	services.GetById = GetById;
	services.Create = Create;
	services.Update = Update;
	services.Delete = Delete;
console.log(services.GetAll);
	return services; 	


	function GetAll(){

       $http({
           method: 'GET',
           url: 'http://localhost/nav/api/users/view/1'           
        }).
        success(function (data, status, headers, config) {
        	console.log(data);
           return data;
        }).
        error(function (data, status) {
           return data;
        });


			
			//return $http.get('http://localhost/nav/api/users/view/1').then(handleSuccess, handleError('Error getting all users'));
			
	}

	function GetById($id){
			 return $http.get('/api/users/view' + $id).then(handleSuccess, handleError('Error getting all users'));
	}

	function Create(){
			 return $http.post('/api/users/add').then(handleSuccess, handleError('Error getting all users'));
	}

	function Update($id){
			 return $http.put('/api/users/add'+ $id).then(handleSuccess, handleError('Error getting all users'));
	}

	function Delete($id){
			 return $http.delete('/api/users/delete').then(handleSuccess, handleError('Error getting all users'));
	}


	function handleSuccess(res) {
			//console.log(res.data);

            return res.data;
        }
 
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
        

}