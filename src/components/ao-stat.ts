import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from './base-element.js';

@customElement('ao-stat')
export class AoStat extends BaseElement {
  @property({ type: String }) value = '';
  @property({ type: String }) label = '';

  render() {
    return html`
      <div class="ao-stat">
        <div class="n">${this.value}</div>
        <div class="l">${this.label}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ao-stat': AoStat;
  }
}
