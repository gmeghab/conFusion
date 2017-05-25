'use strict';

angular.module('confusionApp')


        .controller('MenuController', ['$scope','menuFactory', function($scope,menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;
        $scope.dishes= menuFactory.getDishes();
			 $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

       .controller('ContactController', ['$scope', function($scope) {

           // $scope.feedback={rating:5, comment:"",author:"",date:"" };
           $scope.feedback = {stars:5, comments:"",Name:"",date:"" };
                        
        }])

        .controller('FeedbackController', ['$scope', function($scope) {
            
            $scope.sendFeedback = function() {
            /*
				console.log($scope.feedback);
                                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {
									 $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {stars:"", Name:"", comments:""};
                    $scope.feedback.mychannel="";

                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
             */
               
            };
        }])

        .controller('DishDetailController', ['$scope', 'menuFactory', function($scope,menuFactory) {
 $scope.dish= menuFactory.getDish(3);
			$scope.dish = dish;
            
        }])

.controller('DishCommentController', ['$scope', function($scope) {
            
            //Step 1: Create a JavaScript object to hold the comment from the form
			$scope.feedback = {stars:5, comments:"",Name:"",date:"" };
           //$scope.feedback={rating:5, comment:"",Name:"",date:""}; 
            $scope.submitComment = function () {
				$scope.feedback.date=new Date().toISOString();
				console.log($scope.feedback);
				$scope.dish.comments.push($scope.feedback);
				$scope.feedbackForm.$setPristine();
				$scope.feedback = {stars:5, comments:"",Name:"",date:"" };
				
			}
			 }])

;