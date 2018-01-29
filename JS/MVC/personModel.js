var PersonModel = function () {
    this.person = [];
    this.addPersonEvent = new Event(this);
};

PersonModel.prototype = {

    addPerson: function (person) {
        this.person.push({
            personName: person,

        });
        this.addPersonEvent.notify();
    },

    getPerson: function () {
        return this.person;
    }
};

