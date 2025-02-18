export const formatCurrency = (amount: number) => {
  return amount.toLocaleString("en-ES", {
    style: "currency",
    currency: "EUR",
  });
};
