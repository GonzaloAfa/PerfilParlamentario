angular.module("modalView", [])

.directive('modalProduction', function () {
	return {
		templateUrl: 'components/modal/matchProduction.html',
		restrict: 'A',
		scope: true
	};
})

.directive('modalOffer', function () {
	return {
		templateUrl: 'components/modal/decideOffer.html',
		restrict: 'A',
		scope: true
	};
})

;