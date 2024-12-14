export async function fetchNewArrivals() {
  const res = await fetch("http://localhost:3000/api/products/new");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export async function fetchTopSelling() {
  const res = await fetch("http://localhost:3000/api/products/top");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}
