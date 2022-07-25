import * as GetBooksId from '../requests/GETBooksId.request'

describe ('Get Books Id', () => {
  it('Listar os livros pelo Id', () => {
      GetBooksId.booksId().should((responseId) => {
          console.log(responseId)
          expect(responseId.status).to.eq(200);
          expect(responseId.body).to.be.not.null;
          expect(responseId.id).to.eq(idBook);
        }) 
    });
});  