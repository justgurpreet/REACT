
describe('Filter Customer', () => {
    beforeEach(() => {
         cy.visit('http://localhost:3000')
    })
  
    it('filter customers', () => {
       cy.get('input[placeholder="search by name"]')
        .type("Geller")
        .get('.row').then(rows => {
            expect(rows.length).to.eq(2)
        })
       })
  
    });
