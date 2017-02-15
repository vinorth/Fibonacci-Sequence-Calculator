app.controller('FibCtrl', function($scope) {
  
  $scope.indexnum = null;
  
  function fibCalc(index) {
    if (index == 0) {
      return 0;
    } else if (index == 1) {
      return 1;
    } else {
      return fibCalc(index - 1) + fibCalc(index - 2);
    }
  }

  $scope.fillFibArray = function() {

      $scope.fibArray = [];

    for (var i = 0; i < $scope.indexnum; i++) {
      $scope.fibArray[i] = fibCalc(i);
    }
    console.log($scope.fibArray);
  }

});