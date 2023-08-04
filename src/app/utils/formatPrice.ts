
export function formatPrice(price: number) {
  const usDollar = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });
  return usDollar.format(price);
}