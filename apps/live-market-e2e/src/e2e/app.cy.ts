describe('live-market-e2e', () => {
  describe('Accepted Orders', () => {
    it('should add the order to accepted orders', () => {
      cy.visit('/');

      cy.findByTestId('accepted-orders').within(() => {
        cy.findAllByTestId('order').should('have.length', 2);
      });

      cy.findByTestId('live-demand').within(() => {
        cy.findAllByTestId('order').first().within(() => {
          cy.contains('Accept').click();
        });
      });

      cy.findByTestId('accepted-orders').within(() => {
        cy.findAllByTestId('order').should('have.length', 3);
      });
    });
  })
});
