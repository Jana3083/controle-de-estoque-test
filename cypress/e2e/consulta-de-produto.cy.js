import 'cypress-xpath';

//Especificação de testes
describe('Consulta de produto', () => {

    //Cenário de teste
    it('Deve consultar produto pelo nome com sucesso', () => {

        //ARRANGE -> Etapa de preparação do teste (login do sistema)
        cy.visit('https://cotiaws.github.io/projet-estoque/index.html');
        cy.xpath('//*[@id="usuario"]').type('admin');
        cy.xpath('//*[@id="senha"]').type('123');
        cy.xpath('//*[@id="loginForm"]/button').click();

        //ACT -> Etapa de execução da ação do teste (consultar o produto)
        cy.xpath('/html/body/nav/div/div/a[3]').click();
        cy.xpath('//*[@id="campoPesquisa"]').type('Notebook');
        cy.xpath('//*[@id="btnPesquisar"]').click();

        //ASSERT -> Etapa para verificar os resultados do teste
        cy.xpath('//*[@id="listaProdutos"]/li[1]/strong').should('contain', 'Notebook Dell Inspiron');
        cy.xpath('//*[@id="listaProdutos"]/li[2]/strong').should('contain', 'Notebook Lenovo ThinkPad');

        //EVIDÊNCIA DO TESTE
        cy.screenshot('Deve consultar produto pelo nome com sucesso', { overwrite : true });


    });

    //Cenário de teste
    it('Deve informar que o produto não foi encontrado', () => {

        //ARRANGE -> Etapa de preparação do teste (login do sistema)
        cy.visit('https://cotiaws.github.io/projet-estoque/index.html');
        cy.xpath('//*[@id="usuario"]').type('admin');
        cy.xpath('//*[@id="senha"]').type('123');
        cy.xpath('//*[@id="loginForm"]/button').click();

        //ACT -> Etapa de execução da ação do teste (consultar o produto)
        cy.xpath('/html/body/nav/div/div/a[3]').click();
        cy.xpath('//*[@id="campoPesquisa"]').type('Teste');
        cy.xpath('//*[@id="btnPesquisar"]').click();

        //ASSERT -> Etapa para verificar os resultados do teste
        cy.xpath('//*[@id="mensagemNenhum"]').should('contain', 'Nenhum produto encontrado.');

        //EVIDÊNCIA DO TESTE
        cy.screenshot('Deve informar que o produto não foi encontrado', { overwrite : true });


    });



});