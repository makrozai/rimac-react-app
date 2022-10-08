export const formatCurrency = (amount, decimals = 2) => {
  const currency = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
  })

  return currency.format(amount)
}