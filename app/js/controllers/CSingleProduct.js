(() => {

	'use strict';

	angular.module('app')
		.controller('CSingleProduct', function(FProducts, $state, $stateParams)
		{

			let vm = this;

			let id = $stateParams.id;

			vm.singleProduct = FProducts.getSingleProduct(id);




		})

})();
