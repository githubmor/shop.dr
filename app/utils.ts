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


export async function fetchStyles() {
  const res = await fetch("http://localhost:3000/api/products/styles/list");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}
export async function getProductImage(id: number) {
  const res = await fetch(`http://localhost:3000/api/products/${id}/image`);
  if (!res.ok) throw new Error("Failed to fetch product image");
  return res.json();
}

export async function getStyleImage(id: number) {
  const res = await fetch(
    `http://localhost:3000/api/products/styles/${id}/image`
  );
  if (!res.ok) throw new Error("Failed to fetch product image");
  return res.json();
}

