import { LitElement, html } from 'lit';
import { defineCustomElements } from '@siemens/ix/loader';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import './my-workflow';
import './main.ts';
import { themeSwitcher } from '@siemens/ix';

defineCustomElements();
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.setTheme();
  }

  //to set the selected theme
  async setTheme(): Promise<void> {
    const configuredTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'theme-brand-light';
    if(configuredTheme){
      themeSwitcher.setTheme(configuredTheme);
    }
  }

  render() {
    return html`
      <my-workflow></my-workflow>
    `;
  }
}

window.customElements.define('my-element', MyElement);
