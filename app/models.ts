export type ProductType = {
  id: number;
  title: string;
  rate: number;
  price: number;
  tax?: number;
  type?: StyleType;
  category: CategoryType;
  styles?: TagType[];
};
export type TagType = {
  id: number;
  title: string;
};

export type CategoryType = TagType;
export type StyleType = TagType;
