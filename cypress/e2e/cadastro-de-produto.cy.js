import 'cypress-xpath';

//Especificação de testes
describe('Cadastro de produto', () => {

  //Cenário de teste
  it('Deve cadastrar produto com sucesso', () => {
    
    //ARRANGE -> Etapa de preparação do teste (login do sistema)
    cy.visit('https://cotiaws.github.io/projet-estoque/index.html');
    cy.xpath('//*[@id="usuario"]').type('admin');
    cy.xpath('//*[@id="senha"]').type('123');
    cy.xpath('//*[@id="loginForm"]/button').click();
    
    //ACT -> Etapa de execução da ação do teste (cadastrar o produto)
    cy.xpath('/html/body/nav/div/div/a[2]').click();
    cy.xpath('//*[@id="nome"]').type('Produto Teste');
    cy.xpath('//*[@id="quantidade"]').type('10');
    cy.xpath('//*[@id="produtoForm"]/button').click();

    //ASSERT -> Etapa para verificar os resultados do teste

  })

})