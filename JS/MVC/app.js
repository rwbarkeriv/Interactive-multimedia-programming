$(function () {
    var model = new PersonModel(),
        view = new PersonView(model),
        controller = new PersonController(model, view);
});
