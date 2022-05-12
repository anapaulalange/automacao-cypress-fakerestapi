// verbo/metodo - funcionalidade do endpoint . motivo (request) . extensao

/// <reference types="cypress"/>

function allBooks() {

    // cy.request - client http

    return cy.request({

        method: 'GET',

        // nessa url é configurado somente o path pq a base Url já foi configurada no package.json

        url:'/Books', 

        failOnStatusCode: false, 

 

    }) 

}

// fazer o export para depois conseguir importar essa função dentro do teste

export { allBooks };