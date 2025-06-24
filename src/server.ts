import express, { Request, Response } from 'express';
const app = express();
const port = 3000;

app.get('/',(req: Request, res: Response) => {
  res.send('Hello World!');
})

app.get('/books',(req, res) => {
    res.json(books)
})

app.listen(port, () =>{
    console.log(`App listening at http://localhost:${port}`);
})

interface Book {
  id: number;                 
  title: string;              
  author_name: string;        
  description: string;        
  groups: string;             
  published_year: number;     
  isbn: string;               
  isAvailable: boolean;       
  location: string;           
}

const books: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author_name: 'F. Scott Fitzgerald',
    description: 'A novel set in the Jazz Age that critiques the American Dream.',
    groups: 'Fiction, Classic',
    published_year: 1925,
    isbn: '9780743273565',
    isAvailable: true,
    location: 'Shelf A1'
  },
    {
    id: 2,
    title: 'To Kill a Mockingbird',
    author_name: 'Harper Lee',
    description: 'A story of racial injustice and childhood innocence in the Deep South.',
    groups: 'Fiction, Classic',
    published_year: 1960,
    isbn: '9780061120084',
    isAvailable: true,
    location: 'Shelf A2'
  },
  {
    id: 3,
    title: '1984',
    author_name: 'George Orwell',
    description: 'A dystopian novel about totalitarianism and surveillance.',
    groups: 'Fiction, Dystopian',
    published_year: 1949,
    isbn: '9780451524935',
    isAvailable: false,
    location: 'Shelf B1'
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author_name: 'Jane Austen',
    description: 'A romantic novel that critiques the British landed gentry.',
    groups: 'Fiction, Romance',
    published_year: 1813,
    isbn: '9780141439518',
    isAvailable: true,
    location: 'Shelf B2'
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    author_name: 'J.D. Salinger',
    description: 'A story about teenage alienation and angst.',
    groups: 'Fiction, Classic',
    published_year: 1951,
    isbn: '9780316769488',
    isAvailable: false,
    location: 'Shelf C1'
  },
  {
    id: 6,
    title: 'Moby-Dick',
    author_name: 'Herman Melville',
    description: 'A whaling voyage that explores obsession and revenge.',
    groups: 'Fiction, Adventure',
    published_year: 1851,
    isbn: '9780142437247',
    isAvailable: true,
    location: 'Shelf C2'
  },
  {
    id: 7,
    title: 'War and Peace',
    author_name: 'Leo Tolstoy',
    description: 'A historical novel set during the Napoleonic Wars.',
    groups: 'Fiction, Historical',
    published_year: 1869,
    isbn: '9780199232765',
    isAvailable: true,
    location: 'Shelf D1'
  },
  {
    id: 8,
    title: 'The Hobbit',
    author_name: 'J.R.R. Tolkien',
    description: 'A fantasy adventure preceding The Lord of the Rings.',
    groups: 'Fiction, Fantasy',
    published_year: 1937,
    isbn: '9780547928227',
    isAvailable: false,
    location: 'Shelf D2'
  },
  {
    id: 9,
    title: 'Brave New World',
    author_name: 'Aldous Huxley',
    description: 'A dystopian vision of a technologically advanced future.',
    groups: 'Fiction, Dystopian',
    published_year: 1932,
    isbn: '9780060850524',
    isAvailable: true,
    location: 'Shelf E1'
  },
  {
    id: 10,
    title: 'The Odyssey',
    author_name: 'Homer',
    description: 'An epic poem about Odysseus’s journey home.',
    groups: 'Fiction, Epic',
    published_year: -800,
    isbn: '9780140268867',
    isAvailable: true,
    location: 'Shelf E2'
  },
  {
    id: 11,
    title: 'Crime and Punishment',
    author_name: 'Fyodor Dostoevsky',
    description: 'A psychological novel about guilt and redemption.',
    groups: 'Fiction, Classic',
    published_year: 1866,
    isbn: '9780140449136',
    isAvailable: false,
    location: 'Shelf F1'
  },
  {
    id: 12,
    title: 'The Lord of the Rings',
    author_name: 'J.R.R. Tolkien',
    description: 'An epic fantasy trilogy.',
    groups: 'Fiction, Fantasy',
    published_year: 1954,
    isbn: '9780618640157',
    isAvailable: true,
    location: 'Shelf F2'
  },
  {
    id: 13,
    title: 'Jane Eyre',
    author_name: 'Charlotte Brontë',
    description: 'A coming-of-age story of an orphaned girl.',
    groups: 'Fiction, Romance',
    published_year: 1847,
    isbn: '9780142437209',
    isAvailable: true,
    location: 'Shelf G1'
  },
  {
    id: 14,
    title: 'The Brothers Karamazov',
    author_name: 'Fyodor Dostoevsky',
    description: 'A philosophical novel about faith, doubt, and reason.',
    groups: 'Fiction, Classic',
    published_year: 1880,
    isbn: '9780374528379',
    isAvailable: false,
    location: 'Shelf G2'
  },
  {
    id: 15,
    title: 'Wuthering Heights',
    author_name: 'Emily Brontë',
    description: 'A tale of passion and revenge on the Yorkshire moors.',
    groups: 'Fiction, Romance',
    published_year: 1847,
    isbn: '9780141439556',
    isAvailable: true,
    location: 'Shelf H1'
  },
  {
    id: 16,
    title: 'Animal Farm',
    author_name: 'George Orwell',
    description: 'A satirical allegory of Soviet totalitarianism.',
    groups: 'Fiction, Satire',
    published_year: 1945,
    isbn: '9780451526342',
    isAvailable: true,
    location: 'Shelf H2'
  },
  {
    id: 17,
    title: 'The Divine Comedy',
    author_name: 'Dante Alighieri',
    description: 'An epic poem describing the journey through Hell, Purgatory, and Paradise.',
    groups: 'Fiction, Epic',
    published_year: 1320,
    isbn: '9780142437223',
    isAvailable: false,
    location: 'Shelf I1'
  },
  {
    id: 18,
    title: 'Don Quixote',
    author_name: 'Miguel de Cervantes',
    description: 'A comedic tale of chivalry and adventure.',
    groups: 'Fiction, Classic',
    published_year: 1605,
    isbn: '9780060934347',
    isAvailable: true,
    location: 'Shelf I2'
  },
  {
    id: 19,
    title: 'The Grapes of Wrath',
    author_name: 'John Steinbeck',
    description: 'A story of a family’s struggle during the Great Depression.',
    groups: 'Fiction, Historical',
    published_year: 1939,
    isbn: '9780143039433',
    isAvailable: true,
    location: 'Shelf J1'
  },
  {
    id: 20,
    title: 'Frankenstein',
    author_name: 'Mary Shelley',
    description: 'A gothic novel about the dangers of playing God.',
    groups: 'Fiction, Gothic',
    published_year: 1818,
    isbn: '9780141439471',
    isAvailable: false,
    location: 'Shelf J2'
  }
];