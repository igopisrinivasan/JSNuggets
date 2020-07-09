/*

WHEN NOT TO USE
ARROW
FUNCTIONS 

METHODS IN AN OBJECT

const employee = {
    name: 'Frank Castle',
    salary: 30000,
    tax: 500,
    getMonthSalary: () => {
        console.log('Salary--->', this.salary-
        this.tax);
    }
};

When you invoke the method getMonthlySalary, it will
log NaN as an arrow function does not have access to
this.

USE FUNCTION INSTEAD.!

const employee = {
    name: 'Frank Castle',
    salary: 30000,
    tax: 500,
    getMonthlySalary: function() {
        console.log('salary-->', this.salary - 
        this.tax);
    }
};

// Salary ---> 29500

OBJECT PROTOTYPE 

function employeeDetails(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};
employeeDetails.prototype.get FullName = () => {
    console.log('Full name ---', $(this.firstName}
        $(this.lastName}');
    };

 const employee = new employeeDetails('Frank', 'Castle');
 employee.getFullName();
 
 // Full name ----- undefined undefined

 USE FUNCTION INSTEAD.!
 
 On invoking the function getFullNmae undefined gets 
 logged as this refers to the Window object.

 SOLUTION
 
 Similar to the last case, using the usual function
 would make this as employee

 employeeDetails.prototype.getFullName = function {
     console.log('Full name----', '$(this.firstName}
$(this.lastName}');
};

DYNAMIC CONTENT

const button = document.getElementaryById('submit-button');
button.addEventListener('click', () => {
    this.classList.toggle('submitted');
});

It is similar to the previous examples, can you guess
the issue? Comment Below.s






*/