describe('Smoke Testing', () => {

    before(()=>

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    )
    beforeEach(()=>
        it('Validate login functionality', () => {
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
            cy.get('.oxd-button').click()
        
          })
        
)
it('validate link',() =>{
    cy.get(':nth-child(1) > .oxd-main-menu-item').click();
            
} )

it('validate add button',() =>{
    cy.get('.orangehrm-header-container > .oxd-button').click();
            
} )

afterEach(() =>{

    
})
    
})