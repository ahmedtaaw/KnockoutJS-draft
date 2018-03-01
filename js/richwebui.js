function OrderLine(){
    this.product = {
        name:'tiger print',
        price: 295.00
    },
    this.quantity = 2;

    ko.defineProperty(this,'subtotal',function(){
        console.log('Evaluating Subtotal');
        return this.product ? this.product.price * this.quantity :0;
    });

    this.taxRate=1.25;

    ko.defineProperty(this, 'subtotalAfterTax', function(){
        console.log('Evaluating subtotal after tax');
        return this.subtotal*this.taxRate;
    })
/*
var line = new OrderLine()
undefined
line.subtotalAfterTax
richwebui.js:16 Evaluating subtotal after tax
richwebui.js:9 Evaluating Subtotal
737.5
line.subtotalAfterTax
737.5
line.subtotalAfterTax
737.5
line.subtotalAfterTax
737.5
line.quantity=5
richwebui.js:9 Evaluating Subtotal
richwebui.js:16 Evaluating subtotal after tax
5
line.taxRate=324.5
richwebui.js:16 Evaluating subtotal after tax
324.5
*/
    ko.track(this);
}