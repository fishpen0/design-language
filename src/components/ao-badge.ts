import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from './base-element.js';

@customElement('ao-badge')
export class AoBadge extends BaseElement {
  @property({ type: String }) tone: 'aqua' | 'pink' | 'lime' | 'amber' | 'ghost' = 'aqua';

  render() {
    return html`<span class="ao-badge ao-badge--${this.tone}"><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ao-badge': AoBadge;
  }
}
