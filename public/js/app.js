var app=angular.module('iihanatsu', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: '/home.html',
		controller: 'mainCtrl'
	})
	.state('posts', {
		url: '/posts/{id}',
		templateUrl: '/posts.html',
		controller: 'postsCtrl'
	});

	$urlRouterProvider.otherwise('home');
}]);

app.controller('mainCtrl', ['$scope', 'posts', function ($scope, posts) {
	$scope.heading="今日は、これわ言い放つです！";
	
	$scope.posts=posts.posts;
	
	$scope.addPost=function(){
		if (!$scope.ptitle || $scope.ptitle==='') return;
		$scope.posts.push({
			title: $scope.ptitle, 
			link:$scope.plink, 
			upvotes: 0,
			comments: [
				{author: 'Joe', body: 'Cool post!', upvotes: 0},
				{author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
			]
		}); 
		$scope.ptitle=''; $scope.plink='';
	}
	
	$scope.incrementalUpvote=function(post) {
		post.upvotes++;
	}
}]);

app.controller('postsCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts) {
	$scope.post=posts.posts[$stateParams.id];

	$scope.addComment=function() {
		if (!$scope.cbody || $scope.cbody==='') return;
		$scope.post.comments.push({
			author: 'user',
			body: $scope.cbody,
			upvotes: 0
		});
		$scope.cbody='';
	}
}]);

app.factory('posts', function() {
	var o={
		posts:[]
	};
	return o;
});