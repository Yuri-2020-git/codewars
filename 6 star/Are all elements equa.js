Object.defineProperty( Array.prototype, "eqAll", { value: function eqAll() {
    return [...new Set(this)].length == 1 || [...new Set(this)].length == 0 ? true : false;
  } } );

Object.defineProperty( String.prototype, "eqAll", { value: function eqAll() {
    return [...new Set(this.split(''))].length == 1 || [...new Set(this.split(''))].length == 0 ? true : false;      
} } );

//console.log([1].eqAll());
console.log("12".eqAll());

