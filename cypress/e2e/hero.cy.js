import { aboutMe } from '../../src/constants';

describe('Hero section', () => {
  beforeEach(() => {
    cy.waitForApp();
  });

  it('renders heading "Hi there!" and "I am"', () => {
    cy.get('#home').within(() => {
      cy.contains('Hi there!').should('be.visible');
      cy.contains('I am').should('be.visible');
    });
  });

  it('displays name from constants with text-gradient class', () => {
    cy.get('#home').contains('.text-gradient', aboutMe.name).should('be.visible');
  });

  it('displays intro text from constants', () => {
    cy.get('#home').contains(aboutMe.intro).should('be.visible');
  });

  it('has fantasy hero animation', () => {
    cy.get('#home').find('.fantasy-hero-visual').should('exist');
  });

  describe('Responsiveness', () => {
    it('desktop: text and animation side by side', () => {
      cy.viewportPreset('desktop');
      cy.get('#home').should('be.visible');
      cy.get('#home').invoke('css', 'flex-direction').then((dir) => {
        expect(dir).to.equal('row');
      });
    });

    it('mobile: stacked layout and planet connect button visible', () => {
      cy.viewport(375, 667);
      cy.get('#home').scrollIntoView();
      cy.get('#home').should('be.visible');
      cy.get('#home').invoke('css', 'flex-direction').then((dir) => {
        expect(dir).to.equal('column');
      });
      cy.get('#home').find('.planet-connect').should('be.visible');
      cy.contains("Let's").should('be.visible');
      cy.contains('Connect').should('be.visible');
    });
  });
});
