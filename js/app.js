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
  $scope.popular = [];
  $http.get("./data/links.json").success(function (response) {
    $scope.sections = response;
    // Find the popular links
    for (var i = 0; i < $scope.sections.length; i++) {
      var section = $scope.sections[i]; 
      for (var j = 0; j < section.links.length; j++ ) {
        if (section.links[j].hasOwnProperty("popular")) {
          $scope.popular.push(section.links[j]);
        }
      }
    }
  }).error(function (error) {
    console.error("Error getting links.json");
  });
  // Show/hide icons
  $scope.showIcons = true;
}]);