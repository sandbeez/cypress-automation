/// <reference types="cypress"/>

describe('new deal voucher', () => {
    beforeEach(() =>{
        cy.visit('https://try.homeaglowstaging.com/deal?/')
    })
    it('input zip code', () => {
        cy.get('.zipform > input').type(94949);
        cy.get('.clean13-zip-button').click();
        cy.contains('signed up for Homeaglow Staging in the last 30 days!')
        cy.get('#zipcode_hero_get_clean').contains('Get Clean!');
        cy.get('#zipcode_hero_get_clean').click();
        cy.title().should('eq', 'Get your home cleaned for $19! | Homeaglow Staging Introductory Deal')
        cy.get('[name="email"]').type('ert45@me.com');
        cy.get('[name="contact_zipcode"]').clear();
        cy.get('[name="contact_zipcode"]').type(94949);
        cy.get('#submit_button').click();
        cy.contains('Voucher and Membership Details')
        
        
    })
 }) 
