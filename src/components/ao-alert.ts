import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from './base-element.js';

const ICONS: Record<string, string> = {
  success: '✓',
  info: 'i',
  warning: '!',
  danger: '✕',
};

@customElement('ao-alert')
export class AoAlert extends BaseElement {
  @property({ type: String }) tone: 'success' | 'info' | 'warning' | 'danger' = 'info';
  @property({ type: String }) heading = '';

  render() {
    const icon = ICONS[this.tone] ?? 'i';
    return html`
      <div class="ao-alert ao-alert--${this.tone}">
        <span class="ic">${icon}</span>
        <div>
          ${this.heading ? html`<p class="at">${this.heading}</p>` : ''}
          <p class="ab"><slot></slot></p>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ao-alert': AoAlert;
  }
}
