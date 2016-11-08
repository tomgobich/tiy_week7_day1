'use strict';

(function () {

	'use strict';

	angular.module('app').controller('CProducts', function (FProducts) {

		var vm = this;

		vm.categoryList = FProducts.getCategoryList();

		vm.productList = FProducts.getProductList();

		vm.featuredProduct = FProducts.getFeaturedProduct();
	});
})();