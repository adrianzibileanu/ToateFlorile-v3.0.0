import {Injectable} from '@angular/core';
import {Product} from "./product.model";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";

type EntityResponseType = HttpResponse<Product>;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/products";
  private options = {
    headers: new HttpHeaders({'Content-type':'application/json','Authorization':'toateflorileProducts'})
  }

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  getProduct(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  getImage(id: string): Observable<Blob> {
    return this.http.get(`api/products/images/${id}`, { responseType: 'blob' });
  }

  addProduct(product: Product, image: File): Observable<EntityResponseType>{
      const formData = new FormData();
      formData.append('product', JSON.stringify(product));
      /*formData.append('image', image);
      console.log(image + "From addProduct");

      return this.http.post<Product>(this.baseUrl, formData, { observe: 'response'});*/

      const reader = new FileReader();

      formData.append('image', new Blob([image], { type: image.type }));
      console.log(image + "From addProduct");
      reader.readAsArrayBuffer(image);
      return this.http.post<Product>(this.baseUrl, formData, { observe: 'response'});

  }

  updateProduct(product: Product): Observable<any>{
    var newUrl = this.baseUrl+"/"+product.id;
    return this.http.put(newUrl, product, this.options);
    //.pipe(tap(_ => this.log(`updated patient id=${patient.id}`)), catchError(this.handleError<any>('updatePatient')));
  }

  deleteProduct(id: string): Observable<Product>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
