## Organ Spare Parts Industries - Rebate System

Organ Spare Parts Industries - Rebate System
This application processes customer orders for Organ Spare Parts Industries and calculates the total number of products the customer will receive based on a rebate structure. The rebate structure is defined in the code and can be modified to accommodate different promotion schemes.

## Requirements
```
Node.js
```

## Usage

1- Clone the repository:

```
https://github.com/adilnesmith/ospin-assignment.git
```

2- Install the dependencies:

```
npm install
```

3- Place your order CSV file(s) in the `input` directory. Each line in the CSV represents a single order and should include the following columns: `organ`, `cash`, `price`, `bonus_ratio`.


4- Run the application:

```
node index.js
```

The application will process the orders and output the results to the console.

## Tests

To run the unit test:

```
npm test
```

and to check the coverage of code:

```
jest coverage
```

The test ensures that the processOrders function correctly calculates the number of organs for each order.


## Design Decisions
 The solution is simple, re-useable and maintainable.
- The code separates concerns by having a main file (`index.js`) that processes the orders from a seprate function theat resides in `utils/processOrder` with unit test coverage.
- The rebate structure is defined as an object to provide flexibility in accommodating different promotion schemes.
- ONLY the two libraries has been used `csv-parser`, `jest` as per requirements.

