import * as DELETEBooks from '../requests/DELETEBooks.request';

import * as GETBooks from '../requests/GETBooks.request';

import * as POSTBooks from '../requests/POSTBooks.request';

 

describe('DELETE Books', () => {

    // primeiro teste

    it('Deletar um livro', () => {

        // consultar primeiro o que tem para depois excluir

        GETBooks.allBooks().then((resAllBooks) => {

            console.log(resAllBooks)

            DELETEBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBook) => {

                expect(resDeleteBook.status).to.eq(200);

            })    

        })    

    });

    // segundo teste

    it('Criar e excluir um livro', () => {

        POSTBooks.addBook().then((resAddBook) => {

            DELETEBooks.deleteBook(resAddBook.body.id).should((resDeleteBook) => {

                expect(resDeleteBook.status).to.eq(200);

            })

        })        

    });

});