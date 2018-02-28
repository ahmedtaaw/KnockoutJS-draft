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
function AppViewModel(){
    this.yourName = ko.observable("");
    this.yourHTML = ko.observable("");
}



// Activates knockout.js
ko.applyBindings(new AppViewModel());




