/* Module for Address Book application */
var AddressBook = function () {

    /* add members here */
    var contact = {
        name: ko.observable(),
        phoneNumber: ko.observable()
    };

    /*To make an array of contacts*/
    var contacts = ko.observableArray();

    var addContact = function () {

        console.log("Adding new contact with name: " + contact.name() + "and phone number: " + contact.phoneNumber());

        //add the contact to the contacts array
        contacts.push({
            name: contact.name(), phoneNumber: contact.
                phoneNumber()
        });
        clearContact();

    };

    /*To clear the input fields*/
    var clearContact = function () {
        contact.name(null);
        contact.phoneNumber(null);
       };
    

    /* add members here */
    var init = function () {
        /* add code to initialize this module */
        ko.applyBindings(AddressBook)
    };
    /* execute the init function when the DOM is ready */
    $(init);

    return {
        /* add members that will be exposed publicly */
        contact: contact,
        addContact: addContact,
        contacts:contacts
    };
}();