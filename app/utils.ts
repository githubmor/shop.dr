export const fetcher = async <T>(
  ...args: Parameters<typeof fetch>
): Promise<T> => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};

export async function fetchStyles() {
  const res = await fetch("http://localhost:3000/api/products/styles/list");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export async function getStyleImage(id: number) {
  const res = await fetch(
    `http://localhost:3000/api/products/styles/${id}/image`
  );
  if (!res.ok) throw new Error("Failed to fetch product image");
  return res.json();
}

export async function fetchFeedbacks() {
  const res = await fetch("http://localhost:3000/api/feedback");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}
