app.controller('SidebarCtrl', function($scope, PlaylistFactory) {
    PlaylistFactory.fetchPlaylists().then(function(playlists) {
      $scope.allPlaylists = playlists
    })

})
