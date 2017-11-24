var app=angular.module('iihanatsu', []);

app.controller('mainCtrl', ['$scope', 'posts', function ($scope, posts) {
	$scope.heading="今日は、これわ言い放つです！";
	
	$scope.posts=posts.posts;
	
	$scope.addPost=function(){
		if (!$scope.ptitle || $scope.ptitle==='') {return;}
		$scope.posts.push({title: $scope.ptitle, link:$scope.plink, upvotes: 0}); 
		$scope.ptitle=''; $scope.plink='';
	}
	
	$scope.incrementalUpvote=function(post) {
		post.upvotes++;
	}
}]);

app.factory('posts', function() {
	var o={
		posts:[]
	};
	return o;
});