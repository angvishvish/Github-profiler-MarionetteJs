GithubApp.RepoCollection = Backbone.Collection.extend({
  defaults: {
    
  },
  initialize: function () {
    // console.log(this.attributes)
  },
  url: function () {
    console.log()
    return GithubInfo.BaseUrl + 'users/' + this.models[0].toJSON().name + '/repos?client_id=' + GithubInfo.ClientId + '&client_secret=' + GithubInfo.SecretKey
  }
});