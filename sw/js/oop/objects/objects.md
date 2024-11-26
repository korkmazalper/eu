# Object Literals

```js
var myPhone = {
  make: 'Apple',
  model: 'IPhone 10',
  warranty: 12,
  color: 'black',
  ring: function () {
    console.log('ring ring ring')
  },
  toString: function () {
    return `${'='.repeat(10)}\nMake: ${this.make}\nModel: ${
      this.model
    }\nColor:${this.color}\nWarranty:${this.warranty}`
  },
  toStringMultiple: function () {
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
myPhone.ring()
console.log(myPhone.model)
console.log(myPhone['color'])
console.log(myPhone.toString())
console.log(myPhone.toStringMultiple())
```

## Template Literals und String-Interpolation

- Die Methode toString() gibt ein Template Literal zurück.
- Template Literals werden mit Backticks ` `` `definiert und dienen als Vorlage für Strings.
- Die String-Interpolation wird in dieser Vorlage mit `${}` angegeben.

