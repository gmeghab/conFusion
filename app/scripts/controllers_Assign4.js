'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;

            
//$scope.dishes= [];
            
			$scope.showMenu = false;
            $scope.message = "Loading ...";
                        $scope.dishes= {};
                        menuFactory.getDishes()
            .then(
                function(response) {
                    $scope.dishes = response.data;
                    $scope.showMenu = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
			
			
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

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                        
        }])

        .controller('FeedbackController', ['$scope', function($scope) {
            
            $scope.sendFeedback = function() {
                
                console.log($scope.feedback);
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])

        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

         
	
            $scope.showDish = false;
            $scope.message="Loading ...";
                        menuFactory.getDish(parseInt($stateParams.id,10))
            .then(
                function(response){
                    $scope.dish = response.data;
                    $scope.showDish=true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
			
        }])

        .controller('DishCommentController', ['$scope', function($scope) {
            
            $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            
            $scope.submitComment = function () {
                
                $scope.mycomment.date = new Date().toISOString();
                console.log($scope.mycomment);
                
                $scope.dish.comments.push($scope.mycomment);
                
                $scope.commentForm.$setPristine();
                
                $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            }
        }])

 // implement the IndexController
         .controller('IndexController', ['$scope', 'menuFactory','corporateFactory', function($scope,  menuFactory,corporateFactory) {
            
			 $scope.dish = {};

                      
                        $scope.showDish = false;
                        $scope.message="Loading ...";

                        menuFactory.getDish(0)
                        .then(
                            function(response){
                                $scope.dish = response.data;
                                $scope.showDish = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
                        );
			 
			 $scope.leader = {};

                      
                        $scope.showLeader = false;
                        $scope.message="Loading ...";

                        menuFactory.getLeader(3)
                        .then(
                            function(response){
                                $scope.leader = response.data;
                                $scope.showDish = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
                        );
			 
			 $scope.promotion = {};

                      
                        $scope.showPromotion = false;
                        $scope.message="Loading ...";

                        menuFactory.getPromotion(0)
                        .then(
                            function(response){
                                $scope.promotion = response.data;
                                $scope.showPromotion = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
                        );
         
            
        }])
 // implement the About Controller here
.controller('AboutController', ['$scope', '$stateParams', 'corporateFactory', function($scope, $stateParams, corporateFactory) {
	
	$scope.dish = {};
		$scope.showLeader = false;
            $scope.message = "Loading ...";
                        $scope.leadership= {};
                        corporateFactory.getLeaders()
            .then(
                function(response) {
                    $scope.leadership = response.data;
                    $scope.showLeader = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );

//console.log($scope.leaders);
            //var leader= corporateFactory.getLeader(parseInt($stateParams.id,10));
            
            $scope.leader = corporateFactory.getLeader(parseInt($stateParams.id,10));
            
        }])


;
