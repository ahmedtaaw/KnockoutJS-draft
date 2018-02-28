//This is called "viewmodel".This javascript section defines the data and
//behavior of UI
/*
function AppViewModel() {
    this.firstString = ko.observable("Enter First String");
    this.secondString = ko.observable("Enter Second String");

    this.thirdString = ko.computed(function () {
        return this.firstString() + " " + this.secondString();
    }, this);
}*/


//Observables
/*function AppViewModel(){
    this.yourName = ko.observable("");
    this.yourHTML = ko.observable("");

    this.availableCountries = ko.observableArray(['France', 'Germany', 'Spain'])
}*/

var Country = function(name, population) {
    this.countryName = name;
    this.countryPopulation = population;
};

var viewModel = {
    availableCountries : ko.observableArray([
        new Country("UK", 65000000),
        new Country("USA", 320000000),
        new Country("Sweden", 29000000)
    ]),
    selectedCountry : ko.observable() // Nothing selected by default
};
ko.applyBindings(viewModel);

// Activates knockout.js
//ko.applyBindings(new AppViewModel());




