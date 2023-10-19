export class DealsPage{
   
   
    ZipCode = '.zipform > input'
    goButton = '.clean13-zip-button'
   
   
    navigate(){
        cy.visit('https://www.homeaglowstaging.com/deal#step1/')

    }
    inputZipCode(zipcode){
        cy.get('.zipform > input').type(zipcode);
        
     }
     clickGoButton(){
        cy.get('.clean13-zip-button').click();

    }
    getCleanButton(){
        cy.get('#zipcode_hero_get_clean').click();
    }
    inputEmail(email){
        cy.get('[name="email"]').type(email);
    }
    reenterZipCode(zip){
        cy.get('[name="contact_zipcode"]').type(zip);
    }
    clickSubmitButton(){
        cy.get('#submit_button').click();
    }

}