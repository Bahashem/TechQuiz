import Quiz from '../../client/src/cypress/components/Quiz'; // Adjust path as needed

describe('Quiz Component Tests', () => {
  beforeEach(() => {
       cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
       cy.mount(<Quiz />);
  });

  it('should display the start button on initial load', () => {
     cy.get('button').contains('Start Quiz').should('be.visible');
  });

  it('should fetch and display the first question when the quiz starts', () => {
    cy.mount(<Quiz />);
 
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.get('h2').should('contain.text', "What's 2 + 2?");
    cy.get('.alert').should('have.length', 3);
  });

  it('should show the final score after quiz completion', () => {
    // Start quiz
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');

    // first question
    cy.get('h2').should('contain.text', "What's 2 + 2?");
    cy.get('button').contains('2').click(); 

    cy.get('h2').should('contain.text', "What's the capital of France?");
    cy.get('button').contains('2').click(); 

    cy.get('h2').should('contain.text', 'Quiz Completed');
    cy.get('.alert').should('contain.text', 'Your score: 2/2');
  });  
});