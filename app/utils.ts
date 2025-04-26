
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
  return  [
    { id: 1, title: "Casual" },
    { id: 2, title: "Formal" },
    { id: 3, title: "Party" },
    { id: 4, title: "Gym" },
  ];
  // const res = await fetch("/api/products/styles/list");
  // if (!res.ok) {
  //   throw new Error("Failed to fetch products");
  // }
  // return res.json();
}

export async function getStyleImage(id: number) {
  
  return { imageUrl: `/style-image/${id}.png` };
  // const res = await fetch(
  //   `/api/products/styles/${id}/image`
  // );
  // if (!res.ok) throw new Error("Failed to fetch product image");
  // return res.json();
}

export async function fetchFeedbacks() {
  const res = await fetch("/api/feedback");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}
