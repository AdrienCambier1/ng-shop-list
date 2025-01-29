import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private storageCartKey = 'cart';
  private storageFavoritesKey = 'favorites';

  products: Product[] = [
    {
      id: 1,
      title: 'Abbey Road',
      price: 19.99,
      createdDate: new Date('1969-09-26'),
      style: 'Rock',
      quantity: 0,
      author: 'The Beatles',
      isFavorite: false,
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/I/71RqsTiH2EL._AC_UL600_SR600,600_.jpg',
    },
    {
      id: 2,
      title: 'Thriller',
      price: 19.99,
      createdDate: new Date('1982-11-30'),
      style: 'Pop',
      quantity: 0,
      author: 'Michael Jackson',
      isFavorite: false,
      imageUrl:
        'https://mesvinyles.fr/10420-large_default/michael-jackson-thriller-lp-album-re-gat.jpg',
    },
    {
      id: 3,
      title: 'The Dark Side of the Moon',
      price: 27.99,
      createdDate: new Date('1973-03-01'),
      style: 'Progressive Rock',
      quantity: 0,
      author: 'Pink Floyd',
      isFavorite: false,
      imageUrl:
        'https://thesoundofvinyl.us/cdn/shop/products/pink_da09ef7c-b184-4044-b6bb-9d3c83760c65.png?v=1677177887',
    },
    {
      id: 4,
      title: 'Back in Black',
      price: 21.99,
      createdDate: new Date('1980-07-0'),
      style: 'Hard Rock',
      quantity: 0,
      author: 'AC/DC',
      isFavorite: false,
      imageUrl:
        'https://www.emp-online.fr/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw3db8363c/images/5/6/8/9/568904.jpg?sfrm=png',
    },
    {
      id: 5,
      title: 'The Wall',
      price: 29.99,
      createdDate: new Date('1979-11-30'),
      style: 'Rock',
      quantity: 0,
      author: 'Pink Floyd',
      isFavorite: false,
      imageUrl:
        'https://cdn.cultura.com/cdn-cgi/image/width=830/media/pim/TITELIVE/6_5099902988313.jpg',
    },
    {
      id: 6,
      title: 'Rumours',
      price: 23.99,
      createdDate: new Date('1977-02-04'),
      style: 'Rock',
      quantity: 0,
      author: 'Fleetwood Mac',
      isFavorite: false,
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/I/71HWqbh0BLL._AC_UL600_SR600,600_.jpg',
    },
    {
      id: 7,
      title: 'Hotel California',
      price: 22.49,
      createdDate: new Date('1976-12-08'),
      style: 'Rock',
      quantity: 0,
      author: 'Eagles',
      isFavorite: false,
      imageUrl:
        'https://i.discogs.com/vVsUuF6LOlTgKSDV-UsOTi3cWyVjXHYCfhSk6OEezrc/rs:fit/g:sm/q:90/h:600/w:590/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2Mzcy/MDItMTcwNTQ0MjY5/NC01MjA1LmpwZWc.jpeg',
    },
    {
      id: 8,
      title: 'The Velvet Underground & Nico',
      price: 24.99,
      createdDate: new Date('1967-03-12'),
      style: 'Alternative Rock',
      quantity: 0,
      author: 'The Velvet Underground',
      isFavorite: false,
      imageUrl:
        'https://vinylcollector.store/cdn/shop/products/the_velvet_underground_nico_the_velvet_underground_-and-_nico__high_3a36e0e2-6b69-4f96-a333-2de525fd3e7b.jpg?v=1657115311',
    },
    {
      id: 9,
      title: 'Blue',
      price: 19.49,
      createdDate: new Date('1971-06-22'),
      style: 'Jazz',
      quantity: 0,
      author: 'Joni Mitchell',
      isFavorite: false,
      imageUrl:
        'https://store.warnermusic.ca/cdn/shop/files/wmcstore2023_product_template_2f203efc-41e5-4fcd-a323-365b50acfa90.jpg?v=1702991978',
    },
    {
      id: 10,
      title: 'Kind of Blue',
      price: 30.99,
      createdDate: new Date('1959-08-17'),
      style: 'Jazz',
      quantity: 0,
      author: 'Miles Davis',
      isFavorite: false,
      imageUrl:
        'https://target.scene7.com/is/image/Target/GUEST_5efcaa9a-e578-4a64-bfb4-8b6bf6a28683?wid=488&hei=488&fmt=pjpeg',
    },
    {
      id: 11,
      title: 'Shaken By A Low Sound',
      price: 26.99,
      createdDate: new Date('2021-01-01'),
      style: 'Folk Newgrass',
      quantity: 0,
      author: 'Crooked Still',
      isFavorite: false,
      imageUrl:
        'https://www.normanrecords.com/artwork/medium/203/206953-crooked-still-shaken-by-a-low-sound.jpg',
    },
    {
      id: 12,
      title: 'Tocixity',
      price: 18.99,
      createdDate: new Date('2001-01-01'),
      style: 'Nu Metal',
      quantity: 0,
      author: 'System Of A Dawn',
      isFavorite: false,
      imageUrl:
        'https://static.thcdn.com/images/large/original//productimg/1600/1600/12377696-1904729781175291.jpg',
    },
    {
      id: 13,
      title: 'Moodswings In To Order',
      price: 20.99,
      createdDate: new Date('2020-01-01'),
      style: 'Alternative R&B',
      quantity: 0,
      author: 'DPR IAN',
      isFavorite: false,
      imageUrl:
        'https://i.scdn.co/image/ab67616d0000b2738ac536a8b7cdb157509399a7',
    },
  ];

  private cartSubject = new BehaviorSubject<Product[]>(
    this.loadCartFromLocalStorage()
  );
  cart$ = this.cartSubject.asObservable();

  private favoritesSubject = new BehaviorSubject<Product[]>(
    this.loadFavoritesFromLocalStorage()
  );
  favorites$ = this.favoritesSubject.asObservable();

  constructor() {
    this.loadInitialData();
  }

  private loadInitialData(): void {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    }
    this.cartSubject.next(this.loadCartFromLocalStorage());
    this.favoritesSubject.next(this.loadFavoritesFromLocalStorage());
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  addToCart(productId: number, quantity: number = 1): void {
    const product = this.getProduct(productId);
    if (product) {
      product.quantity += quantity;
      this.updateCart();
      this.saveProductsToLocalStorage();
    }
  }

  getCartItemCount(): number {
    const uniqueItems = new Set(this.cartSubject.value.map((item) => item.id));
    return uniqueItems.size;
  }
  removeFromCart(productId: number): void {
    const product = this.getProduct(productId);
    if (product) {
      product.quantity = 0;
      this.updateCart();
      this.saveProductsToLocalStorage();
    }
  }

  getUniqueStyles(): string[] {
    const uniqueStyles = new Set(this.products.map((product) => product.style));
    return Array.from(uniqueStyles);
  }

  clearCart(): void {
    this.products.forEach((product) => (product.quantity = 0));
    this.updateCart();
    this.saveProductsToLocalStorage();
  }

  clearFavorites(): void {
    this.products.forEach((product) => (product.isFavorite = false));
    this.updateFavorites();
    this.saveProductsToLocalStorage();
  }

  private updateCart(): void {
    const cartItems = this.getCart();
    this.cartSubject.next(cartItems);
    this.saveCartToLocalStorage(cartItems);
  }

  private updateFavorites(): void {
    const favoriteItems = this.getFavorites();
    this.favoritesSubject.next(favoriteItems);
    this.saveFavoritesToLocalStorage(favoriteItems);
  }

  incrementQuantity(productId: number): void {
    const product = this.getProduct(productId);
    if (product) {
      product.quantity += 1;
      this.updateCart();
      this.saveProductsToLocalStorage();
    }
  }

  decrementQuantity(productId: number): void {
    const product = this.getProduct(productId);
    if (product && product.quantity > 1) {
      product.quantity -= 1;
      this.updateCart();
      this.saveProductsToLocalStorage();
    }
  }
  calculateTotalPrice(): number {
    return this.getCart().reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  getCart(): Product[] {
    return this.products.filter((product) => product.quantity > 0);
  }

  getFavorites(): Product[] {
    return this.products.filter((product) => product.isFavorite);
  }

  switchFavorite(product: Product): void {
    product.isFavorite = !product.isFavorite;
    this.updateFavorites();
    this.saveProductsToLocalStorage();
  }

  private saveCartToLocalStorage(cartItems: Product[]): void {
    const cartIds = cartItems.map((item) => item.id);
    localStorage.setItem(this.storageCartKey, JSON.stringify(cartIds));
  }

  private saveFavoritesToLocalStorage(favoriteItems: Product[]): void {
    localStorage.setItem(
      this.storageFavoritesKey,
      JSON.stringify(favoriteItems)
    );
  }

  private saveProductsToLocalStorage(): void {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  private loadCartFromLocalStorage(): Product[] {
    const storedCart = localStorage.getItem(this.storageCartKey);
    if (storedCart) {
      const cartIds: number[] = JSON.parse(storedCart);
      return cartIds
        .map((id) => this.products.find((product) => product.id === id))
        .filter(Boolean) as Product[];
    }
    return [];
  }

  private loadFavoritesFromLocalStorage(): Product[] {
    const storedFavorites = localStorage.getItem(this.storageFavoritesKey);
    if (storedFavorites) {
      return JSON.parse(storedFavorites);
    }
    return [];
  }
}
