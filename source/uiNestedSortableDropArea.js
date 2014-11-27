(function () {
	'use strict';

	angular.module('ui.nestedSortable')

	.directive('uiNestedSortableDropArea', [
			function () {
				return {
					require : '^uiNestedSortableItem',
					restrict : 'A',
					link : function (scope, element, attrs) {
						element.attr('sortable-element-type', 'drop-area');
					}
				};
			}
		]);
})();
