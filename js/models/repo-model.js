GithubApp.RepoModel = Backbone.Model.extend({
  defaults: {
    
  },
  initialize: function () {
    // console.log(this.attributes)
  },
  url: function () {
    return GithubInfo.BaseUrl + 'users/' + this.attributes.name + '/repos?client_id=' + GithubInfo.ClientId + '&client_secret=' + GithubInfo.SecretKey
  }
});