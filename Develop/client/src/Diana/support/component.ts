import "./commands";
import "./customCommands";  
import { mount } from "cypress/react18";
Cypress.Commands.add("mount", mount);
