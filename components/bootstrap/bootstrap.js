angular.module('bootstrap', [])

// input
.directive('bootstrapInputText', function bootstrapInputText() {
  return {
    templateUrl: 'components/bootstrap/input-text.html',
    restrict: 'AE',
    scope: {
      value: '=ngModel',
      label: '@label',
      placeholder: '@placeholder',

    }
  };
})

.directive('bootstrapInputEmail', function bootstrapInputEmail() {
  return {
    templateUrl: 'components/bootstrap/input-email.html',
    restrict: 'AE',
    scope: {
      value: '=ngModel',
      label: '@label',
      placeholder: '@placeholder',
    }
  };
})

.directive('bootstrapInputPassword', function bootstrapInputPassword() {
  return {
    templateUrl: 'components/bootstrap/input-password.html',
    restrict: 'AE',
    scope: {
      value: '=ngModel',
      label: '@label',
      placeholder: '@placeholder',

    }
  };
})

.directive('bootstrapInputArea', function bootstrapInputArea() {
  return {
    templateUrl: 'components/bootstrap/input-area.html',
    restrict: 'AE',
    scope: {
      value: '=ngModel',
      label: '@label',
      placeholder: '@placeholder',

    }
  };
})

// Login input
.directive('bootstrapLoginInputText', function bootstrapLoginInputText() {
  return {
    templateUrl: 'components/bootstrap/login-input-text.html',
    restrict: 'AE',
    scope: {
      value: '=ngModel',
      label: '@label',
      placeholder: '@placeholder',
      required: '@required',
      autocomplete: '@autocomplete',
    }
  };
})

.directive('bootstrapLoginInputEmail', function bootstrapLoginInputEmail() {
  return {
    templateUrl: 'components/bootstrap/login-input-email.html',
    restrict: 'AE',
    scope: {
      value: '=ngModel',
      label: '@label',
      placeholder: '@placeholder',
      required: '@required',
      autocomplete: '@autocomplete',
    }
  };
})

.directive('bootstrapLoginInputPassword', function bootstrapLoginInputPassword() {
  return {
    templateUrl: 'components/bootstrap/login-input-password.html',
    restrict: 'AE',
    scope: {
      value: '=ngModel',
      label: '@label',
      placeholder: '@placeholder',
      required: '@required',
    }
  };
})

.directive('bootstrapLoginInputArea', function bootstrapLoginInputArea() {
  return {
    templateUrl: 'components/bootstrap/login-input-area.html',
    restrict: 'AE',
    scope: {
      value: '=ngModel',
      label: '@label',
      placeholder: '@placeholder',

    }
  };
})


.directive('bootstrapInputCheck', function bootstrapInputCheck() {
  return {
    templateUrl: 'components/bootstrap/input-check.html',
    restrict: 'AE',
    scope: {
      label: '@label',
      value: '=ngModel'
    },
  };
})


.directive('bootstrapShowDoc', function bootstrapShowDoc() {
  return {
    templateUrl: 'components/bootstrap/show-doc.html',
    restrict: 'AE',
    scope: {
      label: '@label',
      value: '=ngModel'
    },
  };
})

.directive('bootstrapShowDocs', function bootstrapShowDocs() {
  return {
    templateUrl: 'components/bootstrap/show-docs.html',
    restrict: 'AE',
    scope: {
      label1: '@label1',
      label2: '@label2',
      value: '=ngModel'
    },
  };
})



.directive('bootstrapInputCheckbox', function bootstrapInputCheckbox() {
  return {
    templateUrl: 'components/bootstrap/input-checkbox.html',
    restrict: 'AE',
    scope: {
      items: '=items',
      itemSet: '=itemSet',
      label: '@label',
      value: '=ngModel',
      change: '=change',
    },
  };
})


.directive('bootstrapInputCaliber', function bootstrapInputCaliber() {
  return {
    templateUrl: 'components/bootstrap/input-caliber.html',
    restrict: 'AE',
    scope: {
      value: '=ngModel',
      label: '@label',
      calibers: '=calibers',
      placeholder: '@placeholder',
    },
    link: function(scope) {
      scope.calculatePercentage = function() {
        var sum = 0;

        angular.forEach(scope.calibers, function(item) {
          if (typeof item.percentage !== 'undefined') {
            sum = sum + parseInt(item.percentage);
          }
        });
      };
    }
  };
})

.directive('bootstrapInputDate', function bootstrapInputDate() {
  return {
    templateUrl: 'components/bootstrap/input-date.html',
    restrict: 'AE',
    scope: {
      value: '=ngModel',
      label: '@label'
    },
    link: function() {
      $('.datepicker').datepicker({
        format: 'yyyy/mm/dd',
        language: "es",
        orientation: "bottom auto",
        calendarWeeks: true,
      });
    }
  };
})

.directive('bootstrapInputDatetime', function bootstrapInputDatetime() {
  return {
    templateUrl: 'components/bootstrap/input-datetime.html',
    restrict: 'AE',
    scope: {
      value: '=ngModel',
      label: '@label',
      tag: '@id'
    },
    link: function(scope) {

      $('#' + scope.tag).datetimepicker({
        format: 'mm/dd/yyyy hh:ii',
        autoclose: true,
        pickerPosition: "bottom-left",
        maxView: 3,
        endDate: new Date()
      });
    }

  };
})

.directive('bootstrapWeek', function bootstrapWeek() {
  return {
    templateUrl: 'components/bootstrap/input-week.html',
    restrict: 'AE',
    scope: {
      value: '=ngModel',
      label: '@label',
      placeholder: '@placeholder',
    }
  };
})

.directive('bootstrapInputDaterange', function bootstrapInputDaterange() {
  return {
    templateUrl: 'components/bootstrap/input-daterange.html',
    restrict: 'AE',
    scope: {
      value_start: '=ngModelStart',
      value_finish: '=ngModelFinish',
      label: '@label'
    },
    link: function() {
      $('.input-daterange').datepicker({
        format: 'yyyy/mm/dd',
        language: "es",
        orientation: "bottom auto",
        calendarWeeks: true,
        autoclose: true,
        todayHighlight: true
      });
    }
  };
})

.directive('bootstrapUpload', function() {
  return {
    restrict: 'AE',
    templateUrl: 'components/bootstrap/input-upload.html',
    scope: true,
  };
})


.directive('bootstrapLoginSelect', function() {
  return {
    restrict: 'AE',
    templateUrl: 'components/bootstrap/login-select.html',
    scope: {
      items: "=",
      ngModel: "=",
      ngChange: "&",

      element: '=element',
      list: '=list',
      label: '@label',
      placeholder: '@placeholder'
    },
    link: function(scope) {
      scope.updateModel = function(item) {
        if (typeof item !== 'undefined') {
          scope.ngModel = item.id;
          scope.ngChange({
            newValue: item
          });
        }
      };
    }
  };
})

.directive('bootstrapSelect', function() {
  return {
    restrict: 'AE',
    templateUrl: 'components/bootstrap/select.html',
    scope: {
      items: "=",
      ngModel: "=",
      ngChange: "&",

      element: '=element',
      list: '=list',
      label: '@label',
      placeholder: '@placeholder'
    },
    link: function(scope) {
      scope.updateModel = function(item) {
        if (typeof item !== 'undefined') {
          scope.ngModel = item.id;
          scope.ngChange({
            newValue: item
          });
        }
      };
    }
  };
})

/**
 * The ng-thumb directive
 * @author: nerv
 * @version: 0.1.2, 2014-01-09
 */
.directive('ngThumb', ['$window', function($window) {
  var helper = {
    support: !!($window.FileReader && $window.CanvasRenderingContext2D),
    isFile: function(item) {
      return angular.isObject(item) && item instanceof $window.File;
    },
    isImage: function(file) {
      var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) +
        '|';
      return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
    }
  };

  return {
    restrict: 'A',
    template: '<canvas/>',
    link: function(scope, element, attributes) {
      if (!helper.support) {
        return;
      }

      var params = scope.$eval(attributes.ngThumb);

      if (!helper.isFile(params.file)) {
        return;
      }

      if (!helper.isImage(params.file)) {
        return;
      }

      var canvas = element.find('canvas');
      var reader = new FileReader();

      reader.onload = onLoadFile;
      reader.readAsDataURL(params.file);

      function onLoadFile(event) {
        var img = new Image();
        img.onload = onLoadImage;
        img.src = event.target.result;
      }

      function onLoadImage() {
        var width = params.width || this.width / this.height * params.height;
        var height = params.height || this.height / this.width * params
          .width;
        canvas.attr({
          width: width,
          height: height
        });
        canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
      }
    }
  };
}])

; // EOF
