import { LitElement, html } from 'lit';


export class MyWorkflow extends LitElement {



    

  render() {
    return html`

    <ix-workflow-steps>
  <ix-workflow-step status="done">Step 1</ix-workflow-step>
  <ix-workflow-step status="success">Step 2</ix-workflow-step>
  <ix-workflow-step status="open">Step 3</ix-workflow-step>
  <ix-workflow-step status="warning">Step 4</ix-workflow-step>
  <ix-workflow-step status="error">Step 5</ix-workflow-step>
  <ix-workflow-step disabled>Step 6</ix-workflow-step>
</ix-workflow-steps>

<br/>


//buton create in lit

    <ix-select value="1">
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>
       
    `;
  }



  static styles = [];
}

window.customElements.define('my-workflow', MyWorkflow);
