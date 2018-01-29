
var PersonController = function (model, view) {
    this.model = model;
    this.view = view;
    this.model.loadSavedData();
    this.view.buildList();


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
        this.selectPersonHandler = this.selectPerson.bind(this);
        this.unselectPersonHandler = this.unselectPerson.bind(this);
        this.deletePersonHandler = this.deletePerson.bind(this);
        return this;
    },

    enable: function () {

        this.view.addPersonEvent.attach(this.addPersonHandler);
        this.view.deletePersonEvent.attach(this.deletePersonHandler);
        this.view.selectPersonEvent.attach(this.selectPersonHandler);
        this.view.unselectPersonEvent.attach(this.unselectPersonHandler);
        return this;
    },

    addPerson: function (sender, args) {
        this.model.addPerson(args.person);
    },

    selectPerson: function (sender, args) {
        this.model.setSelectedPerson(args.personIndex);
    },

    unselectPerson: function (sender, args) {
        this.model.unselectPerson(args.personIndex);
    },

    deletePerson: function () {
        this.model.deletePerson();
    }
};