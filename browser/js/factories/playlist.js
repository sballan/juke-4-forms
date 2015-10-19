app.factory('PlaylistFactory', function($http) {

	var cachedPlaylists = [];

	var PlaylistFactory = {
		create: function(data) {
			return $http.post('/api/playlists', data)
			.then(function(response) {
				console.log("create function was called")
				var playlist = response.data
        cachedPlaylists.push(playlist);
				return playlist._id
			})
		},
		fetchPlaylists: function() {
			return $http.get('/api/playlists')
			.then(function (response) {
				console.log('fetch data was called')
				angular.copy(response.data, cachedPlaylists);
				return cachedPlaylists;
			});
		},

		fetchById: function(id) {
			return $http.get('/api/playlists/' + id)
			.then(function(response) {
				console.dir(response.data);
				return response.data
			})
		},

		fetchAllSongs: function() {
			return $http.get('/api/songs')
			.then(function(response) {
				return response.data
			})
		},

		addSong: function(playlistId, song) {
			$http.post('/api/playlists/' + playlistId + '/songs', song)
		}
	}
	console.log("Playlist factory was called")
	return PlaylistFactory;
})
