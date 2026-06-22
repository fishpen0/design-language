import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from './base-element.js';

@customElement('ao-panel')
export class AoPanel extends BaseElement {
  @property({ type: Boolean }) flat = false;

  render() {
    const cls = this.flat ? 'ao-panel ao-panel--flat' : 'ao-panel';
    return html`<div class="${cls}"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ao-panel': AoPanel;
  }
}
