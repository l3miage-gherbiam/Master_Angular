"use strict";
let person = 'steve';
let hieghtInCm = 182.88;
let names = ['awwais Mirza', 'John Doe', 'Jane Doe'];
let numtest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let booltest = [true, false, true, false];
let tuplTest = ['awwais', 1234, true];
var DoorStates;
(function (DoorStates) {
    DoorStates[DoorStates["Open"] = 0] = "Open";
    DoorStates[DoorStates["Closed"] = 1] = "Closed";
    DoorStates[DoorStates["Ajar"] = 2] = "Ajar";
})(DoorStates || (DoorStates = {}));
let openDoor = DoorStates.Open;
let closedDoor = DoorStates.Closed;
let ajarDoor = DoorStates.Ajar;
console.log(openDoor);
function log(val) {
    console.log(val);
}
let tel_jokes = (number) => {
    console.log('why did the phone go to school?');
    console.log('to get a little smarter');
};
console.log(tel_jokes(1234));
