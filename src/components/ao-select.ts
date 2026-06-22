import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from './base-element.js';

let counter = 0;

@customElement('ao-select')
export class AoSelect extends BaseElement {
  @property({ type: String }) label = '';
  @property({ type: String }) help = '';
  @property({ type: String }) error = '';
  @property({ type: String }) value = '';

  private readonly _id: string = `ao-select-${++counter}`;

  private _onChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    this.value = select.value;
    this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value }, bubbles: true, composed: true }));
  }

  render() {
    const hasHelp = this.error || this.help;
    const selectClass = this.error ? 'ao-select ao-select--err' : 'ao-select';
    const helpClass = this.error ? 'ao-help ao-help--err' : 'ao-help';

    return html`
      <div class="ao-field">
        <label for="${this._id}">${this.label}</label>
        <select
          id="${this._id}"
          class="${selectClass}"
          .value="${this.value}"
          @change="${this._onChange}"
        >
          <slot></slot>
        </select>
        ${hasHelp
          ? html`<div class="${helpClass}">${this.error || this.help}</div>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ao-select': AoSelect;
  }
}
