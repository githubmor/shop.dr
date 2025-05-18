import { styles, products } from "./db";

export async function fetchStyles() {
    return styles;
  }
  
  export async function fetchProductList(type:"list"|"top") {
    return type === "list" ? products.slice(0, 4) : products.filter((p) => p.rate > 4).slice(0, 4);
  }
  
  export async function getStyleImage(id: number) {
    
    return { imageUrl: `/style-image/${id}.png` };
  }
  
  
  export async function fetchProduct(id: string ) {
    return products.find((p) => p.id === Number(id));
  }
  