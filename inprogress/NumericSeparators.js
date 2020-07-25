/*
UNDERSCORE
        Underscore can be used in larger numbers as separators to improve readability.

Example1: Usage in integers*/
const num = 123_456;
console.log(num); // 123456

/*Example2: Usage in float*/
const num = 123_456.1234;
console.log(num); // 123456.1234
/* Or could also be used as follows */
const num = 123_456.12_34;
console.log(num); // 123456.1234
/*

/!*DO'S
    1. Use underscores ‘only’ between two digits.*!/
        const num = 1_2;
/!*    2. Use in number with any base.*!/
        const num = 0XAB_CD_EF; // Hexadecimal
        const num = 0B0100_1111_0011_0101; // Binary
        const num = 0O12_34; // Octal

/!*DON'TS
        1. Do not use underscore at the beginning or the ending of a number.*!/
            const num = _123; // Invalid
            const num = 123_.45; // Invalid
            const num = 0O_12_34; //

        /!*2. Do not use underscore in an number with leading zeros.*!/
            const num = 0_1234; // Invalid
            const num = 0B0000_1111_0011_0101; // Invalid

       /!* 3. Do not use more than one underscore in an row.*!/
            const num = 12__345; // Invalid*/
