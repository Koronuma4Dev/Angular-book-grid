import { Injectable } from '@angular/core';
import { Book } from '../component/booklist/book.model';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      name: 'The Great Gatsby',
      price: 650,
      imageUrl: 'https://i.pinimg.com/enabled_lo_mid/736x/9b/7d/ff/9b7dffb5b6539ca32f3c75d60ef7c697.jpg',
    },
    {
      id: 2,
      name: '1984',
      price: 520,
      imageUrl: 'https://i.pinimg.com/736x/47/ec/55/47ec55cb4487080ea75a344228297ad2.jpg',
    },
    {
      id: 3,
      name: 'To Kill a Mockingbird',
      price: 400,
      imageUrl: 'https://i.pinimg.com/enabled_lo_mid/736x/44/11/d7/4411d7d78f84ea7c99ac6d5039ac9fe6.jpg',
    },

    {
      id: 4,
      name: 'To Methamorphosis',
      price: 500,
      imageUrl: 'https://i.pinimg.com/736x/ab/65/42/ab654223ac93b5cf303b1ca62db0543d.jpg',
    },

    {
      id: 5,
      name: 'First lies win',
      price: 600,
      imageUrl: 'https://i.pinimg.com/736x/48/23/73/4823737fb4e52d26b4221bade734d664.jpg',
    },

    {
      id: 6,
      name: 'The storm we made',
      price: 200,
      imageUrl: 'https://i.pinimg.com/736x/6c/9a/53/6c9a536adf8ba77bef4a248ec954c321.jpg',
    },

    {
      id: 7,
      name: 'Mercury',
      price: 200,
      imageUrl: 'https://i.pinimg.com/736x/af/12/26/af1226f815bdc54eee5256959076ff3a.jpg',
    },

    {
      id: 8,
      name: 'Atomic habits',
      price: 200,
      imageUrl: 'https://i.pinimg.com/enabled_lo_mid/736x/20/d1/a6/20d1a65703a999cd0b39f87d7bb41c1d.jpg',
    },

    {
      id: 9,
      name: 'Heartless',
      price: 400,
      imageUrl: 'https://i.pinimg.com/736x/32/7b/3d/327b3d63355c84c2bca5f4a5678e6755.jpg',
    },

    {
      id: 10,
      name:'Baka Sakali',
      price: 400,
      imageUrl: 'https://i.pinimg.com/736x/fe/81/7f/fe817f610816266a73ab355394ae1c5e.jpg',
    },
  ];

  getBooks(): Book[] {
    return this.books;
  }
}
