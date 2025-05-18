import { ProductType } from "./components/product";

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
}

export async function fetchProductList(type:"list"|"top") {
  const list: ProductType[] = [
    { id: 1, title: "Product 1", price: 19.99, rate: 5 },
    { id: 2, title: "Product 2", price: 25.36, rate: 2.5, tax: 20 },
    { id: 3, title: "Product 3", price: 17.25, rate: 3 },
    { id: 4, title: "Product 4", price: 45.38, rate: 4.5, tax: 10 },
  ];

  const top: ProductType[] = [
    { id: 4, title: "Product 4", price: 45.38, rate: 4.5, tax: 30 },
    { id: 1, title: "Product 1", price: 19.99, rate: 5 },
    { id: 3, title: "Product 3", price: 17.25, rate: 3 },
    { id: 2, title: "Product 2", price: 25.36, rate: 2.5, tax: 20 },
  ];

  return type === "list" ? list : top;
}

export async function getStyleImage(id: number) {
  
  return { imageUrl: `/style-image/${id}.png` };
}

export async function fetchFeedbacks() {
  const res = await fetch("/api/feedback");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}
