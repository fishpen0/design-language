import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from './base-element.js';

@customElement('ao-tabs')
export class AoTabs extends BaseElement {
  @property({ type: Array }) tabs: string[] = [];
  @property({ type: Number }) active = 0;

  private _select(i: number) {
    this.active = i;
    this.dispatchEvent(new CustomEvent('ao-tab-change', {
      detail: { index: i, label: this.tabs[i] },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <div class="ao-tabs" role="tablist">
        ${this.tabs.map((t, i) => html`
          <button
            class="${i === this.active ? 'on' : ''}"
            @click="${() => this._select(i)}"
          >${t}</button>
        `)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ao-tabs': AoTabs;
  }
}
