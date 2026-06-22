import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from './base-element.js';

@customElement('ao-toggle')
export class AoToggle extends BaseElement {
  @property({ type: Boolean }) checked = false;
  @property({ type: String }) label = '';

  private _onChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.checked = input.checked;
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <label class="ao-toggle">
        <input
          type="checkbox"
          ?checked="${this.checked}"
          aria-label="${this.label}"
          @change="${this._onChange}"
        >
        <span class="track"><span class="knob"></span></span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ao-toggle': AoToggle;
  }
}
