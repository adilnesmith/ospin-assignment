const processOrder = require('./processOrder');

describe('processOrder', () => {
    let consoleOutput = '';
    const originalWrite = process.stdout.write;

    beforeEach(() => {
        // Mock process.stdout.write to capture console.log output
        process.stdout.write = jest.fn((data) => {
            consoleOutput += data;
            return true;
        });
    });

    afterEach(() => {
        // Restore process.stdout.write
        process.stdout.write = originalWrite;
        consoleOutput = '';
    });

    test('should calculate organ quantities and print them', () => {
        const order = {
            organ: 'heart',
            cash: '500',
            price: '100',
            bonus_ratio: 2,
        };

        processOrder(order);

        expect(consoleOutput).toBe('heart 2, liver 0, lung 0\n');
    });

    test('should calculate organ quantities with bonuses and print them', () => {
        const order = {
            organ: 'lung',
            cash: '1000',
            price: '200',
            bonus_ratio: 3,
        };

        processOrder(order);

        expect(consoleOutput).toBe('heart 1, liver 1, lung 5\n');
    });
    test('should not calculate bonuses if bonus ratio is 0', () => {
        const order = {
            organ: 'heart',
            cash: '500',
            price: '100',
            bonus_ratio: 0,
        };

        processOrder(order);

        expect(consoleOutput).toBe('heart 5, liver 0, lung 0\n');
    });

    test('should not calculate bonuses if organ is not in rebate structure', () => {
        const order = {
            organ: 'kidney',
            cash: '1000',
            price: '200',
            bonus_ratio: 2,
        };

        processOrder(order);

        expect(consoleOutput).toBe('heart 0, liver 0, lung 0\n');
    });

});
