const fs = require('fs');
const csv = require('csv-parser');
const processOrder = require('./utils/processOrder');

/*
    Read a CSV file named 'orders_a.csv' using a stream, parse it as CSV data,
    and process each row of data by invoking the 'processOrder' function.
    After processing all rows, output a message indicating that all orders
    have been processed.
*/

fs.createReadStream('input/orders_a.csv').pipe(csv())
    .on('data', processOrder)
    .on('end', () => {
        console.log('All orders processed.');
    });