GithubApp.ProfileItemView = Backbone.Marionette.ItemView.extend({
  template: _.template( $("#profile-template").html(), {} ),
  initilize: function () {
    // this.render()
  },
  render: function () {
    return $(this.el).append(this.template(this.model.toJSON()));
  }
});