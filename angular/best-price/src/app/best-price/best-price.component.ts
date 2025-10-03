// best-price.component.ts - VERSÃO CORRIGIDA
import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort'; // ADICIONADO

export interface Product {
  price: number;
  quantity: number;
  annotation?: string; // SUGESTÃO: adicionar anotação como no seu requisito original
}

@Component({
  selector: 'app-best-price',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule, // ADICIONADO
  ],
  templateUrl: './best-price.component.html',
  styleUrl: './best-price.component.scss'
})
export class BestPriceComponent {

  public inputProductName: string = ""; // CORREÇÃO: tipo explícito
  public inputProductPrice: number = 0; // CORREÇÃO: valor inicial
  public inputProductQuantity: number = 0;
  public inputMultiplyQuantity: number = 1000;
  public inputAnnotation: string = ""; // SUGESTÃO: campo para anotação

  // CORREÇÃO: adicionar colunas que faltavam
  displayedColumns: string[] = ['annotation', 'price', 'quantity', 'unitPrice', 'multipliedPrice'];
  public products: Array<Product & { annotation?: string }> = [];

  private isProductNameLocked: boolean = false; // IMPLEMENTAR bloqueio do nome

  public addProduct() {
    // VALIDAÇÃO básica
    if (this.inputProductPrice <= 0 || this.inputProductQuantity <= 0) {
      alert('Preço e quantidade devem ser maiores que zero');
      return;
    }

    // CORREÇÃO: bloquear nome do produto após primeira adição
    if (!this.isProductNameLocked && this.inputProductName.trim()) {
      this.isProductNameLocked = true;
    }

    this.products.push({
      price: this.inputProductPrice,
      quantity: this.inputProductQuantity,
      annotation: this.inputAnnotation // SUGESTÃO
    });

    console.log(this.products);

    // CORREÇÃO: limpar campos após adicionar (exceto nome e multiplicador)
    this.inputProductPrice = 0;
    this.inputProductQuantity = 0;
    this.inputAnnotation = "";
  }

  public getUnitPrice(product: Product): number {
    return product.price / product.quantity;
  }

  // CORREÇÃO: nome da função mais descritivo
  public getMultipliedPrice(product: Product): number {
    return this.getUnitPrice(product) * this.inputMultiplyQuantity;
  }

  // NOVA FUNÇÃO: encontrar melhor preço
  public getBestPrice(): number {
    if (this.products.length === 0) return 0;
    return Math.min(...this.products.map(p => this.getMultipliedPrice(p)));
  }

  // NOVA FUNÇÃO: verificar se é o melhor preço
  public isBestPrice(product: Product): boolean {
    return this.getMultipliedPrice(product) === this.getBestPrice();
  }

  // GETTER: verificar se nome está bloqueado
  public get isNameLocked(): boolean {
    return this.isProductNameLocked;
  }
}
