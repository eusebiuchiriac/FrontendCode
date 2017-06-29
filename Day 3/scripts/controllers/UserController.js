hrApp.controller('UserController' , ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location,commonResourcesFactory) {
// TODO #HR2 - inject commonResourcesFactory

        $scope.users = [];
        $scope.user={};
        $scope.userListShow = false;

        $scope.addUser = function() {
            $scope.user = {};
            $scope.user.prenumeangajat = $scope.prenumeangajat;
            $scope.user.numeangajat = $scope.numeangajat;
            $scope.user.telefonangajat = $scope.telefonangajat;
            $scope.user.orasangajat = $scope.orasangajat;
            $scope.user.emailangajat = $scope.emailangajat;
            $scope.user.varstaangajat = $scope.varstaangajat;
            $scope.users.push($scope.user);
            alert("User was added!"+$scope.user.prenumeangajat);
        }
        $scope.resetInputs = function() {
            $scope.prenumeangajat = "";
            $scope.numeangajat = "";
            $scope.telefonangajat = "";
            $scope.orasangajat = "";
            $scope.emailangajat = "";
            $scope.varstaangajat = "";

        }

        $scope.back = function() {
            // TODO back to Employee List page
            $location.url('/')
        }

        $scope.toggleListShow = function() {
            $scope.userListShow = !$scope.userListShow;
        };

    }]);