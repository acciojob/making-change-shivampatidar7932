const makeChange = (c) => {
    // Check if the input amount is valid
    if (c <= 0 || c >= 100) {
        console.error("Invalid input. Please provide a positive integer less than 100 and greater than 0.");
        return;
    }

    // Define the values for each coin multiplied by 100 to avoid floating-point errors
    const quarterValue = 25;
    const dimeValue = 10;
    const nickelValue = 5;
    const pennyValue = 1;

    // Initialize counts for each coin type
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    // Calculate the number of each coin type needed
    while (c > 0) {
        if (c >= quarterValue) {
            quarters++;
            c -= quarterValue;
        } else if (c >= dimeValue) {
            dimes++;
            c -= dimeValue;
        } else if (c >= nickelValue) {
            nickels++;
            c -= nickelValue;
        } else {
            pennies++;
            c -= pennyValue;
        }
    }

    // Create and return the result object
    const result = { q: quarters, d: dimes, n: nickels, p: pennies };
    return result;
};

// Do not change the code below
const userAmount = prompt("Enter c: ");
alert(JSON.stringify(makeChange(userAmount)));
