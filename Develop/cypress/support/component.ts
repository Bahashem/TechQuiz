import '../commands';  
import { mount } from "cypress/react18";

// Extend Cypress Chainable interface to include the 'mount' command
declare global {
  namespace Cypress {
	interface Chainable {
	  mount: typeof mount;
	}
  }
}

Cypress.Commands.add("mount", mount);
