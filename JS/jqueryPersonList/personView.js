var PersonView = function (model) {
    this.model = model;
    this.addPersonEvent = new Event(this);
    this.selectPersonEvent = new Event(this);
    this.unselectPersonEvent = new Event(this);
    this.deletePersonEvent = new Event(this);

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
        this.selectOrUnselectPersonHandler = this.selectOrUnselectPerson.bind(this);
        this.deletePersonButtonHandler = this.deletePersonButton.bind(this);
        /**
         Handlers from Event Dispatcher
         */
        this.addPersonHandler = this.addPerson.bind(this);
        this.clearPersonTextBoxHandler = this.clearPersonTextBox.bind(this);
        this.deletePersonHandler = this.deletePerson.bind(this);

        return this;
    },

    enable: function () {

        this.$addPersonButton.click(this.addPersonButtonHandler);
        this.$container.on('click', '.js-person', this.selectOrUnselectPersonHandler);
        this.$container.on('click', '.js-delete-person-button', this.deletePersonButtonHandler);
        /**
         * Event Dispatcher
         */
        this.model.addPersonEvent.attach(this.addPersonHandler);
        this.model.addPersonEvent.attach(this.clearPersonTextBoxHandler);
        this.model.deletePersonEvent.attach(this.deletePersonHandler);

        return this;
    },

    addPersonButton: function () {
        this.addPersonEvent.notify({
            person: this.$personTextBox.val()
        });
    },

    deletePersonButton: function () {
        this.deletePersonEvent.notify();
    },

    selectOrUnselectPerson: function () {

        var personIndex = $(event.target).attr("data-index");

        if ($(event.target).attr('data-person-selected') === 'false') {
            $(event.target).attr('data-person-selected', true);
            this.selectPersonEvent.notify({
                personIndex: personIndex
            });
        } else {
            $(event.target).attr('data-person-selected', false);
            this.unselectPersonEvent.notify({
                personIndex: personIndex
            });
        }

    },

    show: function () {
        this.buildList();
    },

    buildList: function () {
        var persons = this.model.getPerson();
        var html = "";
        var $personContainer = this.$personContainer;

        $personContainer.html('');

        var index = 0;
        for (var person in persons) {
            //
            // if (person[name].personStatus === "completed") {
            //     html += "<div style='color:green;'>";
            // } else {
            //     html += "<div>";
            // }

            // $personContainer.append("<li>" + person[name].personName + "</li>");
            $personContainer.append(html + "<li><label><input type='checkbox' class='js-person' data-index='" + index + "' data-person-selected='false'>" + persons[person].personName + "</label></li></div>");

            index++;
        }

    },

    clearPersonTextBox: function () {
        this.$personTextBox.val('');
    },

    addPerson: function () {
        this.show();
    },

    deletePerson: function () {
        this.show();

    }

};