import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  isFlower: boolean = false;
  isTree: boolean = false;
  isShrub: boolean = false;
  constructor() { }

  toggleAll(){
  
    this.isFlower =!this.isFlower;
    this.isTree =!this.isTree;
    this.isShrub =!this.isShrub;
  }
  
  toggleFlower(){
    this.isFlower =!this.isFlower;
  }
  toggleTree(){
    this.isTree =!this.isTree;
  }
  toggleShrub(){
    this.isShrub =!this.isShrub;
  }


  ngOnInit() {
  }

}
