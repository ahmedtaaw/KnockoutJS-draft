function OrderLine(){
    this.product = {
        name:'tiger print',
        price: 295.00
    },
    this.quantity = 2;

    ko.defineProperty(this,'subtotal',function(){
        return this.product ? this.product.price * this.quantity :0;
    });


    ko.track(this);
}

//modeling a Collection of these order lines

function AppViewModel(){
    //hard coded 2 order lines
    this.lines = [new OrderLine(), new OrderLine(), new OrderLine()],
  
    this.AllProducts = [{
        name:'asd1 print',
        price: 1295.00
    },{
        name:'asd2 print',
        price: 2295.00
    },{
        name:'asd3 print',
        price: 3295.00
    }];


    ko.track(this);
}

$(function(){
    //when the application starts
    //bind an instance of AppViewModel
    MyApp = new AppViewModel();
    ko.applyBindings(MyApp);
});