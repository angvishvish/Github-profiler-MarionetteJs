GithubApp.RepoItemView = Backbone.Marionette.ItemView.extend({
  tagName: 'li',
  className: 'list-group-item',
  template: _.template( $("#repo-item-template").html(), {} ),
  initilize: function () {
    console.log('I am in item view')
  },
  render: function () {
    var data = {
      data: this.model.toJSON()
    }
    return $(this.el).append(this.template(data));
  }
});