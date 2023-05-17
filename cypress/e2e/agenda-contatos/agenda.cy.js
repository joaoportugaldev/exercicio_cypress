/// <reference types="cypress" />

describe('Testes para a agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('Deve adicionar um contato', () => {
        cy.get('[type="text"]').type('João Portugal');
        cy.get('[type="email"]').type('joaosportugal@hotmail.com');
        cy.get('[type="tel"]').type('(21)989434454');
        cy.get('.adicionar').click();

        cy.contains('João Portugal');
        cy.contains('joaosportugal@hotmail.com');
        cy.contains('(21)989434454');
    });

    it('Deve editar um contato', () => {
        cy.get('.edit').last().click();
        cy.get('[type="text"]').clear().type('João Portugal Editado');
        cy.get('[type="email"]').clear().type('joaoportugaleditado@hotmail.com');
        cy.get('[type="tel"]').clear().type('(21)123456789');
        cy.get('.alterar').click();

        cy.contains('João Portugal Editado');
        cy.contains('joaoportugaleditado@hotmail.com');
        cy.contains('(21)123456789');
    });

    it('Deve deletar um contato', () => {
        cy.get('.delete').last().click();

        cy.contains('João Portugal Editado').should('not.exist');
        cy.contains('joaoportugaleditado@hotmail.com').should('not.exist');
        cy.contains('(21)123456789').should('not.exist');
    });

});