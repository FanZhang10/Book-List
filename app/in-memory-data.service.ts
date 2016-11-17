import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let books = [
      {id: 1, name: 'Wuthering Heights'},
      {id: 2, name: 'Anna Karenina'},
      {id: 3, name: 'Moby Dick'},
      {id: 4, name: 'Hamlet'},
      {id: 5, name: 'War and Peace'},
      {id: 6, name: 'The Odyssey'},
      {id: 7, name: 'The Great Gatsby'},
      {id: 8, name: 'The Divine Comedy '},
      {id: 9, name: 'Madame Bovary'},
      {id: 10, name: 'The Iliad '}
    ];
    return {books};
  }
}
