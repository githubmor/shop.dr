
export const fetcher = async <T>(
  ...args: Parameters<typeof fetch>
): Promise<T> => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};


export async function fetchFeedbacks() {
  const res = await fetch("/api/feedback");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}
