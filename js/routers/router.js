GithubApp.Router = Backbone.Marionette.AppRouter.extend({
  appRoutes: {
    ''      : 'homeRouter',
    'search/:name'  : 'profileRouter',
    'search/:name/repos'  : 'repoRouter',
    // /users/:username/repos
  }
});