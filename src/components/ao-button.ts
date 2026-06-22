import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from './base-element.js';

@customElement('ao-button')
export class AoButton extends BaseElement {
  @property({ type: String }) variant: 'primary' | 'accent' | 'lime' | 'amber' | 'deep' | 'danger' | 'outline' | 'ghost' = 'primary';
  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) type: 'button' | 'submit' | 'reset' = 'button';

  private get _classes(): string {
    const classes = ['ao-btn'];
    if (this.variant !== 'primary') classes.push(`ao-btn--${this.variant}`);
    if (this.size !== 'md') classes.push(`ao-btn--${this.size}`);
    return classes.join(' ');
  }

  render() {
    return html`
      <button
        class="${this._classes}"
        type="${this.type}"
        ?disabled="${this.disabled}"
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ao-button': AoButton;
  }
}
