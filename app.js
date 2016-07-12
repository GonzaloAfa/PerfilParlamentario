/**
 * Initialize main layouts
 */
angular.module('layouts', [
  'ui.router',
  'oc.lazyLoad', // ocLazyLoad
  'ui.bootstrap', // Ui Bootstrap
]);

/**
 * Initialize components
 */
angular.module('ngEnter', []);

/**
 * Define "app" module and inject all other components and services as dependencies
 */
angular.module('app', [
  'ngEnter',
  'layouts',
  'ngResource',
  'flashMessage',
  'modalView',
  'authService',
  'autoMenu',
  'bootstrap',
  'inspinia',
  'ngToast',
  'ui.select',
  'checklist-model',
  'chart.js',
  'ui.bootstrap.datetimepicker',
  'ui.dateTimeInput',
  'ngSanitize',
  'angularMoment'
])

/**
 * Main controller
 */
.controller("main.controller", function mainController() {

})

; //EOF
