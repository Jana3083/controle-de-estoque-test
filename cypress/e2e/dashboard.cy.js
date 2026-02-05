import 'cypress-xpath';

//Especificação de testes
describe('Dashboard principal', () => {

  //Cenário de teste
  it('Deve exibir o dashboard principal do sistema', () => {

    //ARRANGE
    cy.visit('https://cotiaws.github.io/projet-estoque/index.html');
    cy.xpath('//*[@id="usuario"]').type('admin');
    cy.xpath('//*[@id="senha"]').type('123');

    //ACT
    cy.xpath('//*[@id="loginForm"]/button').click();

    //ASSERT
    cy.url().should('contain', 'dashboard.html');
    cy.xpath('/html/body/div/div/div/h4').should('contain.text', 'Dashboard de Estoque');
    cy.xpath('/html/body/div/div/div/p').should('contain.text', 'Bem-vindo ao sistema de controle de estoque.');

    //EVIDÊNCIAS 
    cy.screenshot('Deve exibir o dashboard principal do sistema', { overwrite: true });

  });

})