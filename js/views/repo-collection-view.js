GithubApp.RepoCollectionView = Backbone.Marionette.CollectionView.extend({
  tagName: 'ul',
  className: 'list-group col-md-4 col-md-offset-4',
  template: _.template( $("#repo-collection-template").html(), {} ),
  itemView: GithubApp.RepoItemView,
  initilize: function () {
  },
  render: function () {
    var that = this;
    this.collection.fetch()
    .done(function (data) {
      that.showRepos();
    })
    .error(function(error) {
      console.log(error);
    });

    // return $(this.el).append(this.template(this.model.toJSON()));
  },
  showRepos: function () {
    var that = this;
    this.collection.each(function (model) {
      var repoItemView = new GithubApp.RepoItemView({model: model});
      that.$el.append(repoItemView);      
    })
  }
});