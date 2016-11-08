(() => {

	'use strict';

	angular.module('app')
		.controller('CProducts', function(FProducts)
		{

			let vm = this;

			vm.categoryList 	= FProducts.getCategoryList();

			vm.productList 		= FProducts.getProductList();

			vm.featuredProduct 	= FProducts.getFeaturedProduct();

		})

})();
