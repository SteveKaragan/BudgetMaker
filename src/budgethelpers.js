export const numFormat = (number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0, 
  minimumFractionDigits: 0, currencySign: 'accounting',}).format(number)
}