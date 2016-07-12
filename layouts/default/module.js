angular.module('layouts')

.config(['$stateProvider', function ($stateProvider) {

    var urlRoute = '/';
    var layoutName = getLayoutHandler();

    $stateProvider
        .state(layoutName, {
            abstract: true,
            url: urlRoute,
            templateUrl: '/layouts/' + layoutName + '/layout.html',
            controller: 'layout.' + layoutName
        })
        .state(layoutName + '.provider', {
            url: '/{provider}/{methodName}/{opt1}/{opt2}/{opt3}',
            params: {
                layout: {
                    value: layoutName
                },
                provider: {
                    value: 'pages',
                    squash: true
                },
                methodName: {
                    value: 'index',
                    squash: true
                },
                opt1: {
                    value: null,
                    squash: true
                },
                opt2: {
                    value: null,
                    squash: true
                },
                opt3: {
                    value: null,
                    squash: true
                },
            },
            templateUrl: function (stateParams) {
                return 'modules/' + stateParams.provider + '/views/' + stateParams.methodName + '.html';
            },
            controllerProvider: function ($stateParams) {
                var controllerName = $stateParams.provider + "." + $stateParams.methodName;
                return controllerName;
            }
        });

}])

.controller("layout.default", function layoutDefault($scope, $auth) {
    $scope.layoutName = getLayoutHandler();
    $auth.checkLogged();
});

function getLayoutHandler() {

    var layoutName = 'default';
    var hostname = window.location.hostname;

    function checkIsIPV4(entry) {
        var blocks = entry.split(".");
        if (blocks.length === 4) {
            return blocks.every(function (block) {
                if (parseInt(block, 10) >= 0 && parseInt(block, 10) <= 255) {
                    return true;
                } else {
                    return false;
                }
            });
        }
        return false;
    }

    if (hostname !== "localhost" || checkIsIPV4(hostname) === true) {
        layoutName = hostname.replace(/\./g, '-');
    }

    return layoutName;
}