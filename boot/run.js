/**
 * First execution, looks for logged user to use in all modules
 */
angular.module('app')
    .run(function ($rootScope, $state, $flash, LoopBackAuth, User) {

        $rootScope.headerUrl = null;
        $rootScope.flash = $flash;
        $rootScope.currentUser = false;


        $rootScope.$on('$stateChangeError', function () {
            $state.transitionTo('error.number', {
                number: 404
            });
        });


        $rootScope.currentToken = null;
        $rootScope.layoutName = null;

        // Global reload header function
        $rootScope.reloadHeader = function () {
            /*
            $rootScope.currentUser = LoopBackAuth.currentUserId;
            $rootScope.currentToken = LoopBackAuth.accessTokenId;
            */
            //sets the user var that displays logged user's name in the menu
            if (User.isAuthenticated()) {
                User.getCurrent(function (res) {
                    $rootScope.currentUserName = res.username;
                });

                User.findById({
                        id: LoopBackAuth.currentUserId
                    },
                    function (user) {
                        localStorage.removeItem('$local$producerID');
                        localStorage.removeItem('$local$importerID');
                        localStorage.removeItem('$local$adminID');

                        if (user.producerId) {
                            $rootScope.layoutName = 'producer';
                            localStorage.setItem('$local$producerID', user.producerId);
                        } else if (user.importerId) {
                            $rootScope.layoutName = 'importer';
                            localStorage.setItem('$local$importerID', user.importerId);

                        } else if (user.adminId) {
                            $rootScope.layoutName = 'admin';
                            localStorage.setItem('$local$adminID', user.adminId);
                        }

                    }
                );

            }
        };

        $rootScope.reloadHeader();


        /**
         * Get current user data
         * @return Object User response from api server
         */
        $rootScope.getCurrentUser = function (callback) {
            if (User.isAuthenticated()) {
                User.getCurrent(function (res) {
                    callback(res);
                });
            } else {
                $rootScope.currentUser = false;
                callback(false);
            }
        };

        $rootScope.getCurrentUser(function (res) {
            $rootScope.currentUser = res;
        });
    });