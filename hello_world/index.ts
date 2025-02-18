

let person: string = 'steve';

let hieghtInCm: number = 182.88;

let names: String[] = [ 'awwais Mirza', 'John Doe', 'Jane Doe' ];

let numtest:number[] = [1,2,3,4,5,6,7,8,9,10];

let booltest:boolean[] = [true, false, true, false];

let tuplTest: [string, number,boolean] = ['awwais', 1234, true];

enum DoorStates {
    Open,
    Closed,
    Ajar
}

let openDoor = DoorStates.Open;
let closedDoor = DoorStates.Closed;
let ajarDoor = DoorStates.Ajar;

console.log(openDoor);

function log (val: any ){
    console.log(val);

}

let tel_jokes = (number: number) => {
    console.log('why did the phone go to school?');
    console.log('to get a little smarter');
}

console.log(tel_jokes(1234));