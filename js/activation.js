(function() {

    var pagecontrol = {

        $workspace: $('.workspace'),

        init: function() {
            this.sizeControl();
            $(window).resize(this.sizeControl);
        },

        sizeControl: function() {
            pagecontrol.$workspace.css('width', $(window).width() - 450);
        }

    };

    pagecontrol.init();

})();