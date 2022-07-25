<reference types="cypress"/>

function booksId() {
    return cy.request({
        method: 'GET',
        url:  `Books/${idBook}`,
        failOnStatusCode: false,

    })
}

export{ booksId };