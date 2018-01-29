var PersonModel = function () {
    this.persons = [];
    this.selectedPerson = [];
    this.addPersonEvent = new Event(this);
    this.deletePersonEvent = new Event(this);
};

PersonModel.prototype = {

    addPerson: function (person) {
        this.persons.push({
            personName: person

        });
        this.saveData();
        this.addPersonEvent.notify();
    },

    getPerson: function () {
        return this.persons;
    },

    saveData: function () {
        localStorage.setItem('persons', JSON.stringify(this.persons));
    },

    setSelectedPerson: function (personIndex) {
        this.selectedPerson.push(personIndex);
    },

    unselectPerson: function (personIndex) {
        this.selectedPerson.splice(personIndex, 1);
    },

    deletePerson: function () {
        var selectedPerson = this.selectedPerson.sort();

        for (var i = selectedPerson.length - 1; i >= 0; i--) {
            this.persons.splice(this.selectedPerson[i], 1);
        }
        this.saveData();

        // clear the selected tasks
        this.selectedPerson = [];


        this.deletePersonEvent.notify();

    },

    loadSavedData: function () {
        var savedPersons = localStorage.getItem('persons');
        if(savedPersons) {
            this.persons = JSON.parse(savedPersons);
        }
    }

};

