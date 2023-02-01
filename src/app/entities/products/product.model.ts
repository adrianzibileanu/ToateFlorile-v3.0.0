export class Product {
  id?: string;
  image?: Blob;
  imagePath?: string;
  title?: string;
  description?: string;
  category?: string; //TODO: Replace with constants
  size?: number;
  price?: number;
  units?: number;
  isInStock?: boolean;

}
