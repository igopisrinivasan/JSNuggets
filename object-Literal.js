/*START USING OBJECT-LITERAL
WHY & WHEN TO USE OBJECT-LITERALS INSTEAD OF SWITCH-CASE?
Performance for switch/if statements can be a concern when the number of cases becomes large.
    With a smaller number of cases a switch is the faster option, while when the number of cases grows a single lookup in a object literal becomes the FASTER option.
    Let’s see some examples

    SWITCH-CASE EXAMPLE
        The code written below is error prone when “break” is missed and unreadable with the increase in number of cases*/

let search = "two", nmbr;
switch (search) {
    case "one" :
        nmbr = 1;
        break;
    case "two" :
        nmbr = 2;
        break;
    case "three" :
        nmbr = 3;
        break;
    default:
        console.log('case not found');
        break;
}
;
console.log(nmbr); // returns 2

/* Let’s see how can we use this with Object

OBJECT-LITERAL EXAMPLE
This way, easily readable, with minimized error and optimized ES6 friendly conditional statements can be achieved with Object-literals.*/


const condition = {
    "one": (() => {
        nmbr = 1;
    }),
    "two": (() => {
        nmbr = 2;
    }),
    "three": (() => {
        nmbr = 3;
    })
};
const defaultFn = () => {
    console.log('case not found');
};
condition[search]();
console.log(nmbr); // returns 2

/*

NOTE: unlike switch-case “default” is
    not automatically executed.*/
