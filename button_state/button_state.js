ButtonStateIndicator = Marionette.Behavior.extend({
    ui: {
        stateButton: '.js-has-state'
    },

    events: {
        'click @ui.stateButton': 'showLoadingIndicator'
    },

    onRender: function () {
        this.resetButtonState();
    },

    resetButtonState: function () {
        $.each(this.ui.stateButton, function () {
            try {
                $('.is-active', $(this)).hide();
                $('.is-inactive', $(this)).show();
            } catch (e) {

            }
        });
    },

    showLoadingIndicator: function (e) {
        var targetElement = $(e.currentTarget);
        $('.is-active', targetElement).show();
        $('.is-inactive', targetElement).hide();
    },

    onResetButtonState: function () {
        this.resetButtonState();
    }
});