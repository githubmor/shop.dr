import { CategoryType, ProductType, StyleType } from './models';
import { TagType } from './models';

export const styles: TagType[] = [
  { id: 1, title: 'Casual' },
  { id: 2, title: 'Formal' },
  { id: 3, title: 'Party' },
  { id: 4, title: 'Gym' }
];

export const categories: CategoryType[] = [
  { id: 1, title: 'Men' },
  { id: 2, title: 'Women' },
  { id: 3, title: 'Boy' },
  { id: 4, title: 'Girl' }
];

export const types: StyleType[] = [
  { id: 1, title: 'T Shirt' },
  { id: 2, title: 'Hoodie' },
  { id: 3, title: 'Shorts' },
  { id: 4, title: 'Jeans' }
];

export const products: ProductType[] = [
  {
    id: 10,
    title: 'Denim Jeans',
    price: 19.99,
    rate: 5,
    category: categories[0],
    type: types[2],
    styles: styles.slice(1, 2)
  },
  {
    id: 11,
    title: 'Cotton T-Shirt',
    price: 25.36,
    rate: 2.5,
    tax: 20,
    category: categories[2],
    type: types[0],
    styles: styles.slice(2, 3)
  },
  {
    id: 12,
    title: 'Running Sneakers',
    price: 17.25,
    rate: 3,
    category: categories[0],
    type: types[3],
    styles: styles.slice(0, 1)
  },
  {
    id: 13,
    title: 'Leather Jacket',
    price: 45.38,
    rate: 4.5,
    tax: 10,
    category: categories[1],
    type: types[1],
    styles: styles.slice(1, 2)
  },
  {
    id: 14,
    title: 'Summer Dress',
    price: 35.5,
    rate: 4.2,
    tax: 30,
    category: categories[3],
    type: types[0],
    styles: styles.slice(3, 4)
  },
  {
    id: 15,
    title: 'Hoodie',
    price: 29.99,
    rate: 4.8,
    category: categories[0],
    type: types[3],
    styles: styles.slice(0, 1)
  },
  {
    id: 16,
    title: 'Chinos',
    price: 22.75,
    rate: 3.9,
    category: categories[0],
    type: types[2],
    styles: styles.slice(0, 1)
  },
  {
    id: 17,
    title: 'Polo Shirt',
    price: 27.99,
    rate: 4.1,
    tax: 20,
    category: categories[0],
    type: types[1],
    styles: styles.slice(0, 1)
  },
  {
    id: 18,
    title: 'Wool Sweater',
    price: 39.99,
    rate: 4.7,
    tax: 15,
    category: categories[1],
    type: types[0],
    styles: styles.slice(1, 2)
  },
  {
    id: 19,
    title: 'Cargo Shorts',
    price: 18.49,
    rate: 3.2,
    category: categories[0],
    type: types[2],
    styles: styles.slice(0, 1)
  },
  {
    id: 20,
    title: 'Silk Scarf',
    price: 14.99,
    rate: 4.0,
    category: categories[1],
    type: types[1],
    styles: styles.slice(1, 2)
  },
  {
    id: 21,
    title: 'Track Pants',
    price: 21.59,
    rate: 3.5,
    tax: 5,
    category: categories[0],
    type: types[3],
    styles: styles.slice(0, 1)
  },
  {
    id: 22,
    title: 'Blazer',
    price: 55.0,
    rate: 4.9,
    tax: 25,
    category: categories[1],
    type: types[1],
    styles: styles.slice(1, 2)
  },
  {
    id: 23,
    title: 'Graphic Tee',
    price: 16.75,
    rate: 2.8,
    category: categories[0],
    type: types[0],
    styles: styles.slice(0, 1)
  },
  {
    id: 24,
    title: 'Puffer Jacket',
    price: 60.0,
    rate: 4.6,
    tax: 18,
    category: categories[1],
    type: types[1],
    styles: styles.slice(1, 2)
  },
  {
    id: 25,
    title: 'Linen Shirt',
    price: 33.2,
    rate: 3.7,
    category: categories[0],
    type: types[0],
    styles: styles.slice(0, 1)
  },
  {
    id: 26,
    title: 'Yoga Leggings',
    price: 24.99,
    rate: 4.3,
    category: categories[3],
    type: types[0],
    styles: styles.slice(3, 4)
  },
  {
    id: 27,
    title: 'Denim Skirt',
    price: 28.5,
    rate: 3.6,
    tax: 12,
    category: categories[3],
    type: types[0],
    styles: styles.slice(3, 4)
  },
  {
    id: 28,
    title: 'Bomber Jacket',
    price: 48.75,
    rate: 4.4,
    tax: 10,
    category: categories[1],
    type: types[1],
    styles: styles.slice(1, 2)
  },
  {
    id: 29,
    title: 'Plaid Shirt',
    price: 23.99,
    rate: 3.3,
    category: categories[0],
    type: types[0],
    styles: styles.slice(0, 1)
  }
];
