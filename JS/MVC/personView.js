var PersonView = function (model) {
    this.model = model;
    this.addPersonEvent = new Event(this);

    this.init();
};

PersonView.prototype = {

    init: function () {
        this.createChildren()
            .setupHandlers()
            .enable();
    },

    createChildren: function () {
        // cache the document object
        this.$container = $('.js-container');
        this.$addPersonButton = this.$container.find('.js-add-person-button');
        this.$personTextBox = this.$container.find('.js-person-textbox');
        this.$personContainer = this.$container.find('.js-person-container');

        return this;
    },

    setupHandlers: function () {

        this.addPersonButtonHandler = this.addPersonButton.bind(this);
        /**
         Handlers from Event Dispatcher
         */
        this.addPersonHandler = this.addPerson.bind(this);
        this.clearPersonTextBoxHandler = this.clearPersonTextBox.bind(this);

        return this;
    },

    enable: function () {

        this.$addPersonButton.click(this.addPersonButtonHandler);
        /**
         * Event Dispatcher
         */
        this.model.addPersonEvent.attach(this.addPersonHandler);
        this.model.addPersonEvent.attach(this.clearPersonTextBoxHandler);

        return this;
    },

    addPersonButton: function () {
        this.addPersonEvent.notify({
            name: this.$personTextBox.val()
        });
    },

    show: function () {
        this.buildList();
    },

    buildList: function () {
        var person = this.model.getPerson();
        var html = "";
        var $personContainer = this.$personContainer;

        $personContainer.html('');

        var index = 0;
        for (var name in person) {
            //
            // if (person[name].personStatus === "completed") {
            //     html += "<div style='color:green;'>";
            // } else {
            //     html += "<div>";
            // }

            $personContainer.append("<li>" + person[name].personName + "</li>");

            index++;
        }

    },

    clearPersonTextBox: function () {
        this.$personTextBox.val('');
    },

    addPerson: function () {
        this.show();
    }
};