/// <reference types="cypress"/>

import { DealsPage } from "./pages/deals_page";

const dealsPage = new DealsPage()

describe('new deal voucher', () => {
    beforeEach(() =>{
        dealsPage.navigate;
    })

    it('get a new voucher deal', () => {

        dealsPage.inputZipCode(94949);
        dealsPage.clickGoButton();
        cy.contains('signed up for Homeaglow Staging in the last 30 days!');
        cy.get('#zipcode_hero_get_clean').contains('Get Clean!');
        dealsPage.getCleanButton;
        cy.title().should('eq', 'Get your home cleaned for $19! | Homeaglow Staging Introductory Deal');
        dealsPage.inputEmail('ert45@me.com');
        cy.get('[name="contact_zipcode"]').clear();
        dealsPage.reenterZipCode(94949);
        dealsPage.clickSubmitButton;
        cy.contains('Voucher and Membership Details')

        
     })
 }) 
