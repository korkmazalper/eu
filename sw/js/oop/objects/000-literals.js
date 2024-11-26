var myPhone = {
  make: 'Apple',
  model: 'IPhone 10',
  warranty: 12,
  color: 'black',
  ring: function () {
    console.log('ring ring ring')
  },
  getProperties: function () {
    return `${'='.repeat(10)}\nMake: ${this.make}\nModel: ${
      this.model
    }\nColor:${this.color}\nWarranty:${this.warranty}`
  },
  getPropertiesInMultipleLine: function(){
      return `
    .
    .
    
    ${'='.repeat(10)} <--
    Make: ${this.make}<--
        Model: ${this.model}<--
                Color:${this.color}<--
    Warranty:${this.warranty}<--
`
  }
}
myPhone.ring();

console.log(myPhone.model);
console.log(myPhone['color']);

console.log(myPhone.getProperties());
console.log(myPhone.getPropertiesInMultipleLine());
// Unterschied zwichen dem Dot-Operator . und eckigem Klammer-Operator []
var x = "make";
console.log(myPhone.x); //undefined
console.log(myPhone[x]); //Apple