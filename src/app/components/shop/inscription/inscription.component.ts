import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TokenStorage } from '../../shared/services/token-storage.service';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';
import { CartItem } from 'src/app/modals/cart-item';
import { Product } from 'src/app/modals/product.model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.sass']
})
export class InscriptionComponent implements OnInit {

 test="1";
public banners = [];
public currencies = ['USD', 'EUR'];
public currency:any;
public flags = [
  
  { name:'French', image: 'assets/images/flags/fr.svg' },
  { name:'Arabe', image: 'assets/images/flags/tr.svg' }
]
public flag:any;

products: Product[];

indexProduct: number;
shoppingCartItems: CartItem[] = [];
wishlistItems  :   Product[] = [];


public slides = [
  { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpg' },
  { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner2.jpg' },
  { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.jpg' },
  { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpg' },
  { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.jpg' }
];

constructor(private productService: ProductService, private httpClient: HttpClient, private cartService: CartService) {
  this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);

}

ngOnInit() {
  this.productService.getBanners()
  .subscribe(
    data => this.banners = data
  );



this.productService.getProducts()
.subscribe(
 (product: Product[]) => {
   this.products = product
 }
)
this.currency = this.currencies[0];
this.flag = this.flags[0];


}





public changeCurrency(currency){
this.currency = currency;
}
public changeLang(flag){
this.flag = flag;
}
  onUpload(f: NgForm) {
    const uploadImageData = new FormData();
       console.log(f.value);
          uploadImageData.append('name', f.value['name']);
          uploadImageData.append('prenom', f.value['prenom']);
          uploadImageData.append('ddn', f.value['ddn']);
          uploadImageData.append('email', f.value['email']);
          uploadImageData.append('RS', f.value['RS']);
    
          uploadImageData.append('adresseP', f.value['adresseP']);
          uploadImageData.append('governorat', f.value['governorat']);
          uploadImageData.append('delegation', f.value['delegation']);
          uploadImageData.append('codeP', f.value['codeP']);
          uploadImageData.append('password', f.value['password']);
          uploadImageData.append('numtel', f.value['numtel']);


 
          this.httpClient.post('http://localhost:8080/user/add', uploadImageData)
       
          .subscribe((response) => {
          
          }
     
          );
  }
}
