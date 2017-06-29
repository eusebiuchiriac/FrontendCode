hrApp.controller('MathController', ['$scope','MathService', function($scope, MathService){

    $scope.nmba = 0;
    $scope.nmbb = 0;

    $scope.MathService = MathService;

    $scope.calculate = function() {
//        TODO #8 calculate op1, op2, op3, op4
           $scope.op1 = $scope.MathService.add($scope.nmba,$scope.nmbb);
           $scope.op2 = $scope.MathService.substract($scope.nmba,$scope.nmbb);
           $scope.op3 = $scope.MathService.multiply($scope.nmba,$scope.nmbb);
           $scope.op4 = $scope.MathService.divide($scope.nmba,$scope.nmbb);

//        TODO #13 refactor your calculations using MathService
    }

}]);
