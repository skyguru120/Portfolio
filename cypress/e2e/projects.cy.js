import { projects } from '../../src/constants';

describe('Projects section', () => {
  beforeEach(() => {
    cy.waitForApp();
    cy.get('#projects', { timeout: 8000 }).scrollIntoView();
  });

  it('shows section heading', () => {
    cy.get('#projects').contains('h1', 'Projects').should('be.visible');
  });

  it('first project card shows title, Tech Stack label, and description', () => {
    const first = projects[0];
    cy.get('#projects').contains(first.title).should('be.visible');
    cy.get('#projects').contains('Tech Stack').should('be.visible');
    cy.get('#projects').contains(first.content).should('be.visible');
  });

  it('renders all project cards in the bento grid', () => {
    cy.get('#projects').find('.projects-bento .project-card').should('have.length', projects.length);
  });

  it('project cards link to external sites', () => {
    cy.get('#projects').find('.project-card').first().should('have.attr', 'href').and('include', 'http');
  });

  describe('Responsiveness', () => {
    it('bento grid uses multiple columns on desktop', () => {
      cy.viewportPreset('desktop');
      cy.get('#projects').scrollIntoView();
      cy.get('#projects').find('.projects-bento').invoke('css', 'grid-template-columns').then((cols) => {
        expect(cols).to.match(/repeat\(3/);
      });
    });

    it('bento grid uses single column on mobile', () => {
      cy.viewport(375, 667);
      cy.get('#projects').scrollIntoView();
      cy.get('#projects').find('.projects-bento').invoke('css', 'grid-template-columns').then((cols) => {
        expect(cols).not.to.match(/repeat\(3/);
      });
    });
  });
});
