import type ProductDetailsType from './ProductDetailsType';

export default interface CartType extends ProductDetailsType {
  quantity: number;
}
