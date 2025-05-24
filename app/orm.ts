import { categories, products, styles } from './db';

export async function fetchStyles() {
  return styles;
}

export async function fetchProductList(type: 'list' | 'top') {
  return type === 'list' ? products.slice(0, 4) : products.filter((p) => p.rate > 4).slice(0, 4);
}

export async function getStyleImage(id: number) {
  return `/style-image/${id}.png`;
}

export async function fetchProduct(id: string) {
  return products.find((p) => p.id === Number(id));
}

export async function getCategoryName(category: string) {
  return category + ' label';
}

export async function getStyle(id: number) {
  return styles.find((p) => p.id === id);
}

export async function getCategory(id: number) {
  return categories.find((p) => p.id === id);
}

export async function getCategories() {
  return categories;
}

export async function getStyles() {
  return styles;
}