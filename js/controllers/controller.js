GithubApp.Controller = Backbone.Marionette.Controller.extend({
  initilize: function () {

  },
  homeRouter: function () {
    var githubProfileItemView = new GithubApp.HomeItemView({
      model: new GithubApp.ProfileModel
    });
    
    GithubApp.appRegion.show(githubProfileItemView);
  },
  profileRouter: function(name) {
    var githubModel = new GithubApp.ProfileModel({
      name: name
    });

    githubModel.fetch()
    .error(function (error) {
      var profileView = new GithubApp.ProfileItemView({
        model: githubModel
      });
      githubModel.set('error', error)
      GithubApp.appRegion.show(profileView);  
    })
    .done(function (data) {
      var profileView = new GithubApp.ProfileItemView({
        model: githubModel,
      });
      githubModel.set('error', null)
      GithubApp.appRegion.show(profileView);  
    })
  },
  repoRouter: function (name) {
    var repoCollectionView = new GithubApp.RepoCollectionView({
      collection: new GithubApp.RepoCollection({name: name})
    });
    GithubApp.appRegion.show(repoCollectionView);
  }
});


