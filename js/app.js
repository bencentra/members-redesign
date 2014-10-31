var app = angular.module("members", []);

app.directive("navbar", function() {
  return {
    restrict: "E",
    templateUrl: "templates/navbar.html"
  }
});

app.directive("meetings", function() {
  return {
    restrict: "E",
    templateUrl: "templates/meetings.html",
    scope: {
      meetings: "=data"
    }
  };
});

app.controller("MembersController", ['$scope', '$http', function($scope, $http) {
  // Get the meeting times
  $scope.meetings = [];
  $http.get("./data/meetings.json").success(function (response) {
    $scope.meetings = response;
  }).error(function (error) {
    console.error("Error getting meetings.json");
  });
  // Get all the links
  $scope.sections = [];
  $http.get("./data/links.json").success(function (response) {
    $scope.sections = response;
  }).error(function (error) {
    console.error("Error getting links.json");
  });
  // Show icons
  $scope.showIcons = true;
}]);