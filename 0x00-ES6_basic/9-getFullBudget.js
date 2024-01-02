import getBudgetObject from './7-getBudgetObject.js';
// eslint-disable-next-line no-unused-vars
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: (income) => `$${income}`,
    getIncomeInEuros: (income) => `${income} euros`,
  };

  return fullBudget;
}
