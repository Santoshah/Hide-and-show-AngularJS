var myApp = angular.module("myModule", []);

myApp.controller('myController', ['$scope', function($scope){
		var employees = [
			{name: 'Bikash', emp_id: 77, salary:33000},
			{name: 'Rahul', emp_id: 63, salary:965855},
			{name: 'Salman', emp_id: 98, salary:9621882},
			{name: 'Binita', emp_id: 396, salary:96482},
			{name: 'Kusum', emp_id: 26, salary:2555245}
		]
		$scope.employees = employees;


}])