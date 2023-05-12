// The system is adaptable due to the rebate structure. The sales team can then alter the promotions.

const rebateStructure = {
    heart: { required: 3, bonus: { heart: 1 } },
    liver: { required: 2, bonus: { lung: 1 } },
    lung: { required: 4, bonus: { liver: 1, heart: 1 } }
};

module.exports = rebateStructure;