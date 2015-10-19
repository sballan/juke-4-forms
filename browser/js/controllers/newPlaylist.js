app.controller('NewPlaylistCtrl', function($scope, $state, PlaylistFactory) {

	$scope.printInput = function() {
		if($scope.playlistForm.$invalid) {
			console.error("You inputted the wrong thing fool!")
			return false;
		}
		var defaultForm = {playlistInput: ""}

		var newPlaylistId;
		return PlaylistFactory.create($scope.playlist)
		.then(function(playlist) {
			$scope.playlistForm.$setPristine();
			$scope.playlist = angular.copy(defaultForm)
			return playlist
		})
		.then(function(id) {
			console.log("THe id is", id);
			$state.go('playlist', {id: id})
		})
	}
})
