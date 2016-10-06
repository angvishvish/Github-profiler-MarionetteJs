var GithubInfo = {
  ClientId   : '19340e62cdaa7bede225',
  SecretKey  : '327dcc4671a753cc635677600fdfd4ef81547a29',
  BaseUrl    : 'https://api.github.com/'
}

var GithubApp = new Backbone.Marionette.Application();

GithubApp.addRegions({  
  appRegion   : '#app-github-list',
});

GithubApp.on("start", function() {
  GithubApp.router = new GithubApp.Router({
    controller: new GithubApp.Controller
  });
  Backbone.history.start();
});