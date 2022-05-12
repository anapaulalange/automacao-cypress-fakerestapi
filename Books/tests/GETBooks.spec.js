import * as GETBooks from '../requests/GETBooks.request';

 

// no describe coloca a descrição da estória a ser testada

describe('GET Books', () => {

    it('Listar todos os livros', () => {

        GETBooks.allBooks().should((response) => {

            // should - força esperar a resposta (resolve a assincronicidade do método)

            // response -> variavel

            // requisicao . funcao

            //expect funciona como JUnit - roda os testes

            expect(response.status).to.eq(200);

            expect(response.body).to.be.not.null

            

            //cy.log(response.status)

            //cy.log(response.text)

            //cy.log(response.body)

        })   

    });

});    