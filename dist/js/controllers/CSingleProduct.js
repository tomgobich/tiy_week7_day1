'use strict';

(function () {

	'use strict';

	angular.module('app').controller('CSingleProduct', function (FProducts, $state, $stateParams) {

		var vm = this;

		var id = $stateParams.id;

		vm.singleProduct = FProducts.getSingleProduct(id);
	});
})();