let a;
a = 0;
a++;

console.log(a);

/*
Declare variable;
Assign the value 0 to i;
increment i by one each time
*/

for (i = 0; i <= 10; i++) {
  console.log(i)
}

/* 
display the week
    display the day - 7 days

do this for 4 weeks
*/

for (var i = 1; i <= 4; i++) {
  console.log(" ");
  console.log("Week" + i);
  for (var j = 1; j <= 7; j++) {
    if (j == 1) {
      console.log("Monday");
    } else if (j == 2) {
      console.log("Tuesday");
    } else if (j == 3) {
      console.log("Wednesday");
    } else if (j == 4) {
      console.log("Thursday");
    } else if (j == 5) {
      console.log("Friday");
    } else if (j == 6) {
      console.log("Saturday");
    } else if (j == 7) {
      console.log("Sunday");
    }
  }
}

/* 
CREATE THE MULTIPLICATION TABLE FROM 1 TO 19
OUTPUT IN THE BELOW FORMAT

    MULTIPLICATION TABLE FOR 1
    1 X 1 = 1
    1 X 2 = 2 ............
*/

for (var m = 1; m <= 19; m++) {
  console.log(" ")
  var z = "MULTIPLICATION TABLE FOR " + m;
  console.log(z);
  for (var n = 1; n <= 19; n++) {
    var v = m + " x " + n + " = "+ m * n;
    
    console.log(v);

  }
}





function add(a, b) {
  c = a + b;
  console.log(c);
}

add(10, 20);


// While loop
/*
Exercise: Count Down

Create a JavaScript function called countDown that takes a positive
integer as input and uses a while loop to count down from that number to 1. 
The function should log each number to the console as it counts down. Once the
countdown reaches 1, the function should log "Countdown complete!".
*/

function countDown(startingNumber) {
  // Check if the input is a positive integer
  if (typeof startingNumber !== 'number' || startingNumber <= 0) {
    console.log("Please provide a positive integer.");
    return;
  }

  let count = startingNumber;

  while (count > 0) {
    console.log(count);
    count--;
  }

  console.log("Countdown complete!");
}

// Test cases
countDown(5);
// Output:
// 5
// 4
// 3
// 2
// 1
// Countdown complete!

countDown(10);
// Output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// Countdown complete!

countDown(-3);
// Output: Please provide a positive integer.


