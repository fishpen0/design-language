import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from './base-element.js';

let counter = 0;

@customElement('ao-textarea')
export class AoTextarea extends BaseElement {
  @property({ type: String }) label = '';
  @property({ type: String }) help = '';
  @property({ type: String }) error = '';
  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = '';
  @property({ type: Number }) rows = 3;

  private readonly _id: string = `ao-textarea-${++counter}`;

  private get _helpId(): string {
    return `${this._id}-help`;
  }

  private _onInput(e: Event) {
    const textarea = e.target as HTMLTextAreaElement;
    this.value = textarea.value;
    this.dispatchEvent(new CustomEvent('input', { detail: { value: this.value }, bubbles: true, composed: true }));
  }

  render() {
    const hasHelp = this.error || this.help;
    const inputClass = this.error ? 'ao-input ao-input--err' : 'ao-input';
    const helpClass = this.error ? 'ao-help ao-help--err' : 'ao-help';

    return html`
      <div class="ao-field">
        <label for="${this._id}">${this.label}</label>
        <textarea
          id="${this._id}"
          class="${inputClass}"
          placeholder="${this.placeholder}"
          rows="${this.rows}"
          aria-invalid="${this.error ? 'true' : 'false'}"
          aria-describedby="${hasHelp ? this._helpId : nothing}"
          @input="${this._onInput}"
        >${this.value}</textarea>
        ${hasHelp
          ? html`<div class="${helpClass}" id="${this._helpId}">${this.error || this.help}</div>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ao-textarea': AoTextarea;
  }
}
