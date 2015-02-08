var LocalStorageService = function (storage) {
  this.key = "VideoGamesLibrary";
  this.storage = window.localStorage;
};

LocalStorageService.prototype.save = function (data) {
  this.storage.setItem(this.key, data);
};

LocalStorageService.prototype.get = function() {
  this.storage.getItem(this.key);
};