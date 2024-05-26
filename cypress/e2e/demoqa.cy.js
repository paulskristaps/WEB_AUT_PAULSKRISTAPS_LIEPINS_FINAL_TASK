
describe('Fill out automation practice form', () => {
    it('should fill out the form with information', () => {
        cy.visit('https://demoqa.com/automation-practice-form');


        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Doe');
        cy.get('#userEmail').type('john.doe@example.com');
        cy.contains('label[for="gender-radio-1"]', 'Male').click();
        cy.get('#userNumber').type('1234567890');


        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select(2);
        cy.get('.react-datepicker__year-select').select('1930');
        cy.contains('.react-datepicker__day', '28').click();


        cy.get('#subjectsContainer').type('Economics');
        cy.get('.subjects-auto-complete__menu-list').contains('Economics').click();
        cy.get('body').type('{enter}', { force: true });


        cy.contains('[class="custom-control-label"]', 'Music').click({force: true});



        cy.get('[class="form-control-file"]').click().selectFile("cypress/files/ViA.jpeg", {
            mimeType: "image/jpeg"
        });


        cy.get('#react-select-3-input').type('NCR{enter}', {force: true});

        cy.get('#react-select-4-input').type('Delhi{enter}', {force: true});


        cy.get('#submit').click({ force: true });
        cy.wait(2000);


        cy.get('.table-responsive').contains('John Doe');
        cy.get('.table-responsive').contains('john.doe@example.com');
        cy.get('.table-responsive').contains('Male');
        cy.get('.table-responsive').contains('1234567890');
        cy.get('.table-responsive').contains('28 February,1930');
        cy.get('.table-responsive').contains('Music');
        cy.get('.table-responsive').contains('ViA.jpeg')
        cy.get('.table-responsive').contains('NCR Delhi');
    });
});
