const rebateStructure = require('./schemes');

describe('rebateStructure', () => {
    test('should have the correct structure', () => {
        expect(rebateStructure).toEqual({
            heart: { required: 3, bonus: { heart: 1 } },
            liver: { required: 2, bonus: { lung: 1 } },
            lung: { required: 4, bonus: { liver: 1, heart: 1 } }
        });
    });
});