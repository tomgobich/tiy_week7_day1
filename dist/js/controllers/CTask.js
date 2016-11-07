'use strict';

(function () {

	'use strict';

	angular.module('app').controller('CTask', function (FTask) {

		var vm = this;

		vm.categoryList = ['Fiction', 'Nonfiction', 'Biography'];

		vm.productList = [{
			id: 1,
			name: 'Product 1',
			price: 100,
			image: 'http://placehold.it/300x150',
			category: vm.categoryList[0],
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec eros volutpat, mollis enim eu, congue est. Cras nisl ipsum, bibendum eget neque ut, consectetur vulputate tellus. Morbi a sollicitudin velit. Suspendisse volutpat pharetra purus quis consectetur. Etiam tortor sapien, vulputate vitae orci sit amet, congue imperdiet quam. Donec suscipit ultrices auctor. Vestibulum justo ipsum, pretium sagittis dictum eleifend, consequat sed dolor. Nam et faucibus est. Vestibulum mattis maximus purus, a imperdiet erat maximus non. Duis pellentesque, orci eget volutpat laoreet, diam quam feugiat enim, sed pulvinar dolor justo et leo. Curabitur dictum mi quis nibh hendrerit, a congue arcu tempus. Mauris vitae dignissim sapien, quis lacinia nibh. Aliquam non metus commodo, molestie diam nec, faucibus enim.',
			isFeaturedItem: false
		}, {
			id: 2,
			name: 'Product 2',
			price: 100,
			image: 'http://placehold.it/300x150',
			category: vm.categoryList[1],
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec eros volutpat, mollis enim eu, congue est. Cras nisl ipsum, bibendum eget neque ut, consectetur vulputate tellus. Morbi a sollicitudin velit. Suspendisse volutpat pharetra purus quis consectetur. Etiam tortor sapien, vulputate vitae orci sit amet, congue imperdiet quam. Donec suscipit ultrices auctor. Vestibulum justo ipsum, pretium sagittis dictum eleifend, consequat sed dolor. Nam et faucibus est. Vestibulum mattis maximus purus, a imperdiet erat maximus non. Duis pellentesque, orci eget volutpat laoreet, diam quam feugiat enim, sed pulvinar dolor justo et leo. Curabitur dictum mi quis nibh hendrerit, a congue arcu tempus. Mauris vitae dignissim sapien, quis lacinia nibh. Aliquam non metus commodo, molestie diam nec, faucibus enim.',
			isFeaturedItem: true
		}, {
			id: 3,
			name: 'Product 3',
			price: 100,
			image: 'http://placehold.it/300x150',
			category: vm.categoryList[2],
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec eros volutpat, mollis enim eu, congue est. Cras nisl ipsum, bibendum eget neque ut, consectetur vulputate tellus. Morbi a sollicitudin velit. Suspendisse volutpat pharetra purus quis consectetur. Etiam tortor sapien, vulputate vitae orci sit amet, congue imperdiet quam. Donec suscipit ultrices auctor. Vestibulum justo ipsum, pretium sagittis dictum eleifend, consequat sed dolor. Nam et faucibus est. Vestibulum mattis maximus purus, a imperdiet erat maximus non. Duis pellentesque, orci eget volutpat laoreet, diam quam feugiat enim, sed pulvinar dolor justo et leo. Curabitur dictum mi quis nibh hendrerit, a congue arcu tempus. Mauris vitae dignissim sapien, quis lacinia nibh. Aliquam non metus commodo, molestie diam nec, faucibus enim.',
			isFeaturedItem: false
		}, {
			id: 4,
			name: 'Product 4',
			price: 100,
			image: 'http://placehold.it/300x150',
			category: vm.categoryList[0],
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec eros volutpat, mollis enim eu, congue est. Cras nisl ipsum, bibendum eget neque ut, consectetur vulputate tellus. Morbi a sollicitudin velit. Suspendisse volutpat pharetra purus quis consectetur. Etiam tortor sapien, vulputate vitae orci sit amet, congue imperdiet quam. Donec suscipit ultrices auctor. Vestibulum justo ipsum, pretium sagittis dictum eleifend, consequat sed dolor. Nam et faucibus est. Vestibulum mattis maximus purus, a imperdiet erat maximus non. Duis pellentesque, orci eget volutpat laoreet, diam quam feugiat enim, sed pulvinar dolor justo et leo. Curabitur dictum mi quis nibh hendrerit, a congue arcu tempus. Mauris vitae dignissim sapien, quis lacinia nibh. Aliquam non metus commodo, molestie diam nec, faucibus enim.',
			isFeaturedItem: false
		}];

		// ------------------------------------------------------------
		// Name: changeActiveNavigation
		// Abstract: Change the active navigation element
		// ------------------------------------------------------------
		vm.changeActiveNavigation = function (navItem) {
			// Set navItem as new active
			vm.activeNavigation = navItem;

			// Update content filter
			vm.isCompleteFilter = vm.setTaskView(navItem);

			// Save active navigation item in localStorage
			FTask.setActiveNavigation(vm.activeNavigation);

			// Get new page message
			vm.taskMessage = vm.getTaskMessage();
		};
	});
})();