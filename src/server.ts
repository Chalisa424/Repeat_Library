import express, { Request, Response } from 'express';
import type { Book } from './models/Book';
import { getBooksBytitle, getAllBooks, getBookById,addBook } from './repository/BookRepository';

const app = express();
app.use(express.json());
const port = 3000;


app.get('/',(req: Request, res: Response) => {
  res.send('Hello World!');
})

app.get('/books',async (req, res) => {
   const title = req.query.title as string | undefined;
   let filteredBooks = await getBooksBytitle(title);
   res.json(filteredBooks);
})

app.get('/books/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const book = await getBookById(id)
  if(book){
    res.json(book);
  }else {
    res.status(404).json('Book not found' );
  }
})

app.post('/books',async (req, res)=>{
  const newBook : Book = req.body;
  await addBook(newBook)
  res.json(newBook); 
})

app.listen(port, () =>{
    console.log(`App listening at http://localhost:${port}`);
})


