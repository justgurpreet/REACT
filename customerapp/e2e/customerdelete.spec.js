
describe('Delete Customer', () => {
    beforeEach(() => {
         cy.visit('http://localhost:3000')
    })
  
    it('delete customer', () => {
       cy.get('button')
        .first()
        .click()
        .get('.row').then(rows => {
            expect(rows.length).to.eq(5)
        })
       })
  
    });
