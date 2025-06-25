import express, { Request, Response } from 'express';
import type { Book } from './services/BookService';
import { getBooksBytitle, getAllBooks, getBookById,addBook } from './services/BookService';

const app = express();
app.use(express.json());
const port = 3000;


app.get('/',(req: Request, res: Response) => {
  res.send('Hello World!');
})

app.get('/books',(req, res) => {
   const title = req.query.title as string | undefined;
   let filteredBooks = getBooksBytitle(title);
   res.json(filteredBooks);
})

app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = getBookById(id)
  if(book){
    res.json(book);
  }else {
    res.status(404).json('Book not found' );
  }
})

app.post('/books',(req, res)=>{
  const newBook : Book = req.body;
  addBook(newBook)
  res.json(newBook); 
})

app.listen(port, () =>{
    console.log(`App listening at http://localhost:${port}`);
})


