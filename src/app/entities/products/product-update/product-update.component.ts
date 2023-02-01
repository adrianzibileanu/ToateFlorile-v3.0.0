import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product.model";
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Location} from "@angular/common";
import {FileUploader} from "ng2-file-upload";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {


 // product: Product = new Product();
  selectedFile?: File;
  image?: string;


  options = {
    headers: new HttpHeaders({'Content-type':'multipart/form-data','Authorization':'toateflorileProducts'}),
    responseType: 'blob'
  }

  constructor(private productService: ProductService, private fb: FormBuilder, private location: Location, private http: HttpClient) { }

  ngOnInit() {
  }

  uploadFile(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    console.log(image +"from UploadFile");
    console.log(formData.get('image'));

    return this.http.post('http://localhost:8080/api/uploads', formData, { responseType: 'blob' }).toPromise().then(res => res);
  }


  products: Product[] = [];
  newProduct: any;

  createForm = this.fb.group({
    id: [],
    image: [null, [Validators.required]],
    title: [null, [Validators.required]],
    description: [null, [Validators.required]],
    category: [null, [Validators.required]],
    size: [null, [Validators.required]],
    price: [null, [Validators.required]],
    units: [null, [Validators.required]],
    isInStock: [null, [Validators.required]],
  });



  add(): void{

    const product = this.createFromForm();
    if(this.selectedFile) {
      console.log("File Selected");
        this.subscribeToSaveResponse(this.productService.addProduct(product, this.selectedFile));
      }else{
      console.log("Error");
      console.log(this.selectedFile);
      console.log(this.createFromForm());
    }

  }

  private createFromForm(): Product {
    return {
      ...new Product(),
      id: this.createForm.get(['id'])!.value,
      image: this.createForm.get(['image'])!.value,
      title: this.createForm.get(['title'])!.value,
      description: this.createForm.get(['description'])!.value,
      category: this.createForm.get(['category'])!.value,
      size: this.createForm.get(['size'])!.value,
      price: this.createForm.get(['price'])!.value,
      units: this.createForm.get(['units'])!.value,
      isInStock: this.createForm.get(['isInStock'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<Product>>): void {
    result.subscribe(() => this.location.back());
  }

  onFileSelect(event: any) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.files);
    this.selectedFile = event.target.files[0];
    if(this.selectedFile) {
      this.uploadFile(this.selectedFile);
      console.log("Success!")
      console.log(this.selectedFile);
    }else{
      console.log("No file uploaded");
    }
    return this.selectedFile;
  }



}
