(() => {

	'use strict';

	angular.module('app')
		.factory('FProducts', function(FLocalStorage)
		{
			let categoryList = [
				{
					id: 1,
					name: 'Fiction',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				},
				{
					id: 2,
					name: 'Nonfiction',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				},
				{
					id: 3,
					name: 'Biography',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				},
				{
					id: 4,
					name: 'Educational',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				},
			];

			let productList = [
				{
					id: 1,
					name: 'Product 1',
					price: 100,
					image: 'http://placehold.it/300x150',
					category: categoryList[0].name,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec eros volutpat, mollis enim eu, congue est. Cras nisl ipsum, bibendum eget neque ut, consectetur vulputate tellus. Morbi a sollicitudin velit. Suspendisse volutpat pharetra purus quis consectetur. Etiam tortor sapien, vulputate vitae orci sit amet, congue imperdiet quam. Donec suscipit ultrices auctor. Vestibulum justo ipsum, pretium sagittis dictum eleifend, consequat sed dolor. Nam et faucibus est. Vestibulum mattis maximus purus, a imperdiet erat maximus non. Duis pellentesque, orci eget volutpat laoreet, diam quam feugiat enim, sed pulvinar dolor justo et leo. Curabitur dictum mi quis nibh hendrerit, a congue arcu tempus. Mauris vitae dignissim sapien, quis lacinia nibh. Aliquam non metus commodo, molestie diam nec, faucibus enim.',
					isFeaturedItem: false,
				},
				{
					id: 2,
					name: 'Product 2',
					price: 100,
					image: 'http://placehold.it/300x150',
					category: categoryList[1].name,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec eros volutpat, mollis enim eu, congue est. Cras nisl ipsum, bibendum eget neque ut, consectetur vulputate tellus. Morbi a sollicitudin velit. Suspendisse volutpat pharetra purus quis consectetur. Etiam tortor sapien, vulputate vitae orci sit amet, congue imperdiet quam. Donec suscipit ultrices auctor. Vestibulum justo ipsum, pretium sagittis dictum eleifend, consequat sed dolor. Nam et faucibus est. Vestibulum mattis maximus purus, a imperdiet erat maximus non. Duis pellentesque, orci eget volutpat laoreet, diam quam feugiat enim, sed pulvinar dolor justo et leo. Curabitur dictum mi quis nibh hendrerit, a congue arcu tempus. Mauris vitae dignissim sapien, quis lacinia nibh. Aliquam non metus commodo, molestie diam nec, faucibus enim.',
					isFeaturedItem: true,
				},
				{
					id: 3,
					name: 'Product 3',
					price: 100,
					image: 'http://placehold.it/300x150',
					category: categoryList[2].name,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec eros volutpat, mollis enim eu, congue est. Cras nisl ipsum, bibendum eget neque ut, consectetur vulputate tellus. Morbi a sollicitudin velit. Suspendisse volutpat pharetra purus quis consectetur. Etiam tortor sapien, vulputate vitae orci sit amet, congue imperdiet quam. Donec suscipit ultrices auctor. Vestibulum justo ipsum, pretium sagittis dictum eleifend, consequat sed dolor. Nam et faucibus est. Vestibulum mattis maximus purus, a imperdiet erat maximus non. Duis pellentesque, orci eget volutpat laoreet, diam quam feugiat enim, sed pulvinar dolor justo et leo. Curabitur dictum mi quis nibh hendrerit, a congue arcu tempus. Mauris vitae dignissim sapien, quis lacinia nibh. Aliquam non metus commodo, molestie diam nec, faucibus enim.',
					isFeaturedItem: false,
				},
				{
					id: 4,
					name: 'Product 4',
					price: 100,
					image: 'http://placehold.it/300x150',
					category: categoryList[0].name,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec eros volutpat, mollis enim eu, congue est. Cras nisl ipsum, bibendum eget neque ut, consectetur vulputate tellus. Morbi a sollicitudin velit. Suspendisse volutpat pharetra purus quis consectetur. Etiam tortor sapien, vulputate vitae orci sit amet, congue imperdiet quam. Donec suscipit ultrices auctor. Vestibulum justo ipsum, pretium sagittis dictum eleifend, consequat sed dolor. Nam et faucibus est. Vestibulum mattis maximus purus, a imperdiet erat maximus non. Duis pellentesque, orci eget volutpat laoreet, diam quam feugiat enim, sed pulvinar dolor justo et leo. Curabitur dictum mi quis nibh hendrerit, a congue arcu tempus. Mauris vitae dignissim sapien, quis lacinia nibh. Aliquam non metus commodo, molestie diam nec, faucibus enim.',
					isFeaturedItem: false,
				},
			];

			// ------------------------------------------------------------
			// Name: getCategoryList
			// Abstract: Returns the categoryList
			// ------------------------------------------------------------
			const getCategoryList = function()
			{
				return categoryList;
			}



			// ------------------------------------------------------------
			// Name: getProductList
			// Abstract: Returns the productList
			// ------------------------------------------------------------
			const getProductList = function()
			{
				return productList;
			}



			// ------------------------------------------------------------
			// Name: getFeaturedProduct
			// Abstract: Returns the featured product
			// ------------------------------------------------------------
			const getFeaturedProduct = function()
			{
				let productIndex = 0;

				productList.forEach(function(product, index)
				{
					if(product.isFeaturedItem == true)
					{
						productIndex = index;
					}
				});

				return productList[productIndex];
			}



			// ------------------------------------------------------------
			// Name: getSingleProduct
			// Abstract: Returns a single product
			// ------------------------------------------------------------
			const getSingleProduct = function(id)
			{
				let productIndex = 0;

				productList.forEach(function(product, index)
				{
					if(id == product.id)
					{
						productIndex = index;
					}
				});

				return productList[productIndex];
			}





			return {
				getCategoryList,
				getProductList,
				getFeaturedProduct,
				getSingleProduct,
			}

		})
})();
