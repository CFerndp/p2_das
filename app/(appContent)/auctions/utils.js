export const getAuctions = async () => {
  const response = await fetch("https://dummyjson.com/products", {
    method: "GET",
  });

  if (!response.ok) {
    return [];
  }

  const data = await response.json();

  return data.products;
};
