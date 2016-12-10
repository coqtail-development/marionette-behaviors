Permalinkeable = Marionette.Behavior.extend({
    ui: {
        permalink: '.is-permalink'
    },

    events: {
        'click @ui.permalink': 'onPermalinkClick'
    },

    onPermalinkClick: function (e) {
        e.preventDefault();
        var permalink = $(e.currentTarget).data('permalink');
        this.view.trigger('permalink:navigate', permalink);
    }
});
