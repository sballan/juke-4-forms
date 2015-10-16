app.factory('PlaylistFactory', function($http) {

	var PlaylistFactory = {
		create: function(data) {
			return $http.post('/api/playlists', data)
			.then(function(playlist) {
				console.log("create functionwas called")
				return playlist;
			})
		}

	}
	console.log("Playlist factory was called")
	return PlaylistFactory;
})