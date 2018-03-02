/* Module for maps application */
var MapsApplication = function () {
    /* add members here */
    var init = function () {
        
        /* add code to initialize this module */
        ko.applyBindings(MapsApplication);
        
    };
    /* execute the init function when the DOM is ready */
    $(init);

    return {
        /* add members that will be exposed publicly */
    };

    /* model to hold addresses */
    var mapsModel = {
        fromAddress: ko.observable(),
        toAddress: ko.observable()
    };

    /* method to add custom binding handlers to knockout */
    var configureBindingHandlers = function () {
        /* custom binding for address auto complete */
        ko.bindingHandlers.addressAutoComplete = {
            init: function (element, valueAccessor) {
                // create the autocomplete object
                var autocomplete = new google.maps.places.Autocomplete(
                    element, { types: ['geocode'] });
                // when the user selects an address from the dropdown,
                // populate the address in the model.
                var value = valueAccessor();
                google.maps.event.addListener(autocomplete, 'place_changed',
                    function () {
                        var place = autocomplete.getPlace();
                        console.log(place);
                        value(place);
                    });
            }
        };
    };
}();



