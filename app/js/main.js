(() => {

	'use strict';

	angular
	.module('app', ['ui.router'])
	.config(appConfig);

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function appConfig($stateProvider, $urlRouterProvider)
	{
		$stateProvider
	    .state('home',
		{
			url: 			'/',
			templateUrl: 	'partials/home.html',
			controller: 	'CProducts',
	        controllerAs: 	'products'
	    })
	    .state('categories',
		{
			url: 			'/categories',
			templateUrl: 	'partials/categories.html',
			controller: 	'CProducts',
	        controllerAs: 	'products'
	    })
		.state('products',
		{
			url: 			'/products',
			templateUrl: 	'partials/products.html',
			controller: 	'CProducts',
	        controllerAs: 	'products'
		})
		.state('product',
		{
			url:			'/products/:id',
			templateUrl:	'partials/single-product.html',
		})
	}

})();
