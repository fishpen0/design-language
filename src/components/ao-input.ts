import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from './base-element.js';

let counter = 0;

@customElement('ao-input')
export class AoInput extends BaseElement {
  @property({ type: String }) label = '';
  @property({ type: String }) help = '';
  @property({ type: String }) error = '';
  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) type = 'text';
  @property({ type: String }) inputId: string = `ao-input-${++counter}`;

  private get _helpId(): string {
    return `${this.inputId}-help`;
  }

  private _onInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(new CustomEvent('input', { detail: { value: this.value }, bubbles: true, composed: true }));
  }

  render() {
    const hasHelp = this.error || this.help;
    const inputClass = this.error ? 'ao-input ao-input--err' : 'ao-input';
    const helpClass = this.error ? 'ao-help ao-help--err' : 'ao-help';

    return html`
      <div class="ao-field">
        <label for="${this.inputId}">${this.label}</label>
        <input
          id="${this.inputId}"
          class="${inputClass}"
          type="${this.type}"
          placeholder="${this.placeholder}"
          .value="${this.value}"
          @input="${this._onInput}"
          aria-invalid="${this.error ? 'true' : 'false'}"
          aria-describedby="${hasHelp ? this._helpId : nothing}"
        >
        ${hasHelp
          ? html`<div class="${helpClass}" id="${this._helpId}">${this.error || this.help}</div>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ao-input': AoInput;
  }
}
