describe('Todo Page', function() {
    
      it('load the todo page', function () {
        // programmatically log us in without needing the UI
        cy.request('POST', 'http://localhost:8000/api/v1/user/login', {
            username : 'admin',
            password: 'admin',
        })
        // now that we're logged in, we can visit
        cy.visit('http://localhost:8000/todos')
    
        // Assert that el add note is visible
        cy.contains('Add Note').should('be.visible')              
    
      })

      it('load 404 page for invalid uri', function () {
        // programmatically log us in without needing the UI
        cy.request('POST', 'http://localhost:8000/api/v1/user/login', {
            username : 'admin',
            password: 'admin',
        })
        // now that we're logged in, we can visit
        cy.visit('http://localhost:8000/error-path')
    
        // Assert that el add note is visible
        cy.contains('404').should('be.visible')              
    
      })
  })