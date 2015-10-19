app.config(function ($stateProvider) {
	$stateProvider.state('newPlaylist', {
		url: '/playlists/new',
		templateUrl: '/templates/playlist-form.html',
		controller: 'NewPlaylistCtrl'
		// resolve: {
		// 	thePlaylist: function (PlaylistFactory) {
		// 		try {
		// 			return PlaylistFactory.create($scope.playlist.name);
		// 		}
		// 		catch(error) {
		// 			console.error(error)
		// 		}
		// 	}
		// }
	});
})
