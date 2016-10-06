GithubApp.ProfileModel = Backbone.Model.extend({
  defaults: {
    searchName: ''
  },
  initialize: function () {
    // console.log(this.attributes)
  },
  url: function () {
    return GithubInfo.BaseUrl + 'users/' + this.attributes.name + '?client_id=' + GithubInfo.ClientId + '&client_secret=' + GithubInfo.SecretKey
  }
});