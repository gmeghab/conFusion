 'use strict';

angular.module('confusionApp', [])

.controller('DishCommentController', ['$scope', function($scope) {
            
            //Step 1: Create a JavaScript object to hold the comment from the form
    $scope.dishComment = {
                
                rating:'5',
                comment:'',
                author:'',
                date:new Date().toISOString()
            }
	
	
	
	$scope.feedback = {Name:"", stars:"", comments:"" };
                        
                        
            $scope.invalidChannelSelection = false;
            $scope.submitComment = function () {
                
                //Step 2: This is how you record the date
                $scope.parent."The date property of your JavaScript object holding the comment" = new Date().toISOString();
                
                // Step 3: Push your comment into the dish's comment array
                $scope.dish.comments.push("Your JavaScript Object holding the comment");
                
                //Step 4: reset your form to pristine
                
                //Step 5: reset your JavaScript object that holds your comment
            };
        }])
