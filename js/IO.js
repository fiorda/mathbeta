(function() {

    var IO = {

        userinput: 'hello',
        $workspace: $('#workspace'),

        init: function() {
            this.workspaceInput();
        },

        workspaceInput: function() {
            this.$workspace.on('keyup', function(e) {
                // alert(e.keyCode);
                e = e || window.event;
                if (e.keyCode === 13) {
                    alert(IO.$workspace.serialize());
                }
                return false;
            });
        }

    }; //end IO

    IO.init();

})();