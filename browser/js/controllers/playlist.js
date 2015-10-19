app.controller('PlaylistCtrl', function ($scope, PlaylistFactory, thePlaylist, theSonglist) {
  $scope.currentSong = null;

  $scope.playlist = thePlaylist;
  $scope.songlist = theSonglist;
  $scope.addSong = PlaylistFactory.addSong

});
