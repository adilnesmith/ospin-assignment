
const rebateStructure = require('../promotion/schemes');

/*
    Process an order by calculating the number of purchased organs and bonuses earned.
    Updates the 'result' object accordingly and outputs the quantities of each organ.
    Input: 'order' object with organ type, cash amount, price per organ, and bonus ratio.
    Output: Updated 'result' object with organ quantities printed through console.log.
*/
function processOrder(order) {
    // Extract the organ, cash, price, and bonus ratio from the order
    const { organ, cash, price, bonus_ratio } = order;

    // Calculate the number of organs purchased and the number of bonuses earned
    const purchased = Math.floor(parseInt(cash) / parseInt(price));

    const bonuses = Math.floor(purchased / bonus_ratio);

    // Initialize the result object with initial values of 0
    const result = { heart: 0, liver: 0, lung: 0 };

    // Assign the number of purchased organs to the corresponding organ property in the result object
    result[organ] = purchased;

    // Check if the bonus ratio is greater than 0 and if the rebate structure contains the organ
    if (bonus_ratio > 0 && rebateStructure.hasOwnProperty(organ)) {
        // Retrieve the bonus organs for the specified organ from the rebate structure
        const bonusOrgans = rebateStructure[organ]?.bonus;

        // Iterate over each bonus organ and calculate the number of bonus organs earned
        for (const bonusOrgan in bonusOrgans) {
            result[bonusOrgan] = bonusOrgans[bonusOrgan] * bonuses;
        }
    }
    // Output the number of each organ purchased
    process.stdout.write(
        `heart ${result.heart}, liver ${result.liver}, lung ${result.lung}\n`
    );
}

module.exports = processOrder;