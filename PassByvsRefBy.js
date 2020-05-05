/*PASS BY VALUE
    In Pass By Value, value of the variables are passed as function arguments.
    Any changes done in the arguments do not affect the value of the variables passed from outside.*/


function callByValue(name) {
    name = 'GopiSrinivasan';
    console.log(name);
}

const name = 'JsNuggets';
console.log(name); // JsNuggets
callByValue(name); // Ideas2It
console.log(name); // JsNuggets

/*Result:
    The value of the variable name is not changed, because it is passed as value.
_____________________________________________________________________________________________________________

PASS BY REFERENCE
    In Pass By Reference, reference/address of the variables are passed as function arguments.
    Changes done in the arguments affects the actual value of the variables passed from outside.*/


function callByReference(object) {
    object.name = 'Gopi Srinivasan';
    console.log(object);
}

const object = {name: 'JsNuggets'};
console.log(object); // { name : 'JsNuggets'}
callByReference(object); // { name : 'Gopi'}
console.log(object); // { name : 'Srinivasan'}


/*
Result:
    Since objects are passed as reference, value of the property name is updated.*/
