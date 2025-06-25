import type { Book } from "../models/Book";
import * as repo from  "../repository/BookRepository"

export function getBooksBytitle(title : string): Promise<Book[]>{
    return repo.getBooksBytitle(title)
}

export function getAllBooks(): Promise<Book[]>{
    return repo.getAllBooks()

}

export function getBookById(id : number): Promise<Book | undefined>{
    return repo.getBookById(id)
}

export function addBook(newBook: Book): Promise<Book[]>{
    return repo.addBook(newBook)
}
