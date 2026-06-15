import { socialMedia } from '../../src/constants';
import en from '../../src/i18n/en';

describe('Footer section', () => {
  beforeEach(() => {
    cy.waitForApp();
    cy.get('#contactMe', { timeout: 8000 }).scrollIntoView();
  });

  it('displays name from i18n', () => {
    cy.get('#contactMe').contains('h2', en.aboutMe.name).should('be.visible');
  });

  it('displays tagline from i18n', () => {
    cy.get('#contactMe').contains(en.aboutMe.tagLine).should('be.visible');
  });

  it('Callnest logo is visible', () => {
    cy.get('#contactMe').find('img[alt="Callnest"]').should('be.visible');
  });

  it('all social media links are rendered', () => {
    cy.get('#contactMe').find('a[href]').should('have.length.at.least', socialMedia.length);
    socialMedia.forEach((s) => {
      cy.get('#contactMe').find(`a[href="${s.link}"]`).should('exist');
    });
  });

  it('Resume button is present', () => {
    cy.get('#contactMe').contains(en.common.resume).should('be.visible');
  });

  describe('Responsiveness', () => {
    it('desktop: logo and info side by side', () => {
      cy.viewportPreset('desktop');
      cy.get('#contactMe').scrollIntoView();
      cy.get('#contactMe').find('[class*="flex-col-reverse"]').first().invoke('css', 'flex-direction').then((dir) => {
        expect(dir).to.equal('row');
      });
    });

    it('mobile: stacked layout', () => {
      cy.viewport(375, 667);
      cy.get('#contactMe').scrollIntoView();
      cy.get('#contactMe').find('[class*="flex-col-reverse"]').first().invoke('css', 'flex-direction').then((dir) => {
        expect(dir).to.equal('column-reverse');
      });
    });
  });
});
