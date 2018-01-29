var PersonController = function (model, view) {
    this.model = model;
    this.view = view;

    this.init();
};

PersonController.prototype = {

    init: function () {
        this.createChildren()
            .setupHandlers()
            .enable();
    },

    createChildren: function () {
        // no need to create children inside the controller
        // this is a job for the view
        // you could all as well leave this function out
        return this;
    },

    setupHandlers: function () {

        this.addPersonHandler = this.addPerson.bind(this);
        return this;
    },

    enable: function () {

        this.view.addPersonEvent.attach(this.addPersonHandler);
        return this;
    },

    addPerson: function (sender, args) {
        this.model.addPerson(args.name);
    }
};