export default interface ProductDetailsType {
  id: number;
  name: string;
  thumbnail: string;
  nutrition: {
    protein: number;
    carbs: number;
    fat: number;
  };
  description: string;
  final_price: number;
  original_price: number;
}
