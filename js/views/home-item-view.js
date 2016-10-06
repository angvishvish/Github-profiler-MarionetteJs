GithubApp.HomeItemView = Backbone.Marionette.ItemView.extend({
  // className: 'col-md-3 col-sm-4 col-xs-6',
  template: _.template( $("#home-template").html(), {} ),
  ui: {
    searchName: '#searchName'
  },
  events: {
    'change #searchName': 'userName',
    'click #search-username': 'searchUser'
  },
  initilize: function () {
    // this.render()\
  },
  render: function () {
    return $(this.el).append(this.template(this.model.toJSON()));
  },
  userName: function () {
    this.model.set({ 'searchName': $(this.ui.searchName).val() });
  },
  searchUser: function () {
    GithubApp.router.navigate('/search/' + this.model.get('searchName'), true);
  }
});