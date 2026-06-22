import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { BaseElement } from './base-element.js';

const OCULUS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="width:100%;height:100%;display:block"><path fill-rule="evenodd" fill="currentColor" d="M0 0H100V100H0Z M50 50 m-34 0 a34 34 0 1 0 68 0 a34 34 0 1 0 -68 0 Z"/></svg>`;

const VISTA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="width:100%;height:100%;display:block"><path fill-rule="evenodd" fill="currentColor" d="M0 0H100V100H0Z M0 0 m-30 0 a30 30 0 1 0 60 0 a30 30 0 1 0 -60 0 ZM100 0 m-30 0 a30 30 0 1 0 60 0 a30 30 0 1 0 -60 0 ZM0 100 m-30 0 a30 30 0 1 0 60 0 a30 30 0 1 0 -60 0 ZM100 100 m-30 0 a30 30 0 1 0 60 0 a30 30 0 1 0 -60 0 ZM50 50 m-18 0 a18 18 0 1 0 36 0 a18 18 0 1 0 -36 0 Z"/></svg>`;

const DIAMOND = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="width:100%;height:100%;display:block"><path fill-rule="evenodd" fill="currentColor" d="M0 0H100V100H0Z M50 14 L86 50 L50 86 L14 50 Z"/></svg>`;

const QUATREFOIL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="width:100%;height:100%;display:block"><path fill-rule="evenodd" fill="currentColor" d="M0 0H100V100H0Z M50 30 m-21 0 a21 21 0 1 0 42 0 a21 21 0 1 0 -42 0 ZM50 70 m-21 0 a21 21 0 1 0 42 0 a21 21 0 1 0 -42 0 ZM30 50 m-21 0 a21 21 0 1 0 42 0 a21 21 0 1 0 -42 0 ZM70 50 m-21 0 a21 21 0 1 0 42 0 a21 21 0 1 0 -42 0 Z"/></svg>`;

const UNITS: Record<string, string> = {
  oculus: OCULUS,
  vista: VISTA,
  diamond: DIAMOND,
  quatrefoil: QUATREFOIL,
};

@customElement('ao-breeze')
export class AoBreeze extends BaseElement {
  @property({ type: String }) unit: 'oculus' | 'quatrefoil' | 'vista' | 'diamond' = 'oculus';

  render() {
    const svg = UNITS[this.unit] ?? OCULUS;
    return html`
      <div class="ao-breeze ao-breeze--${this.unit}">
        ${unsafeHTML(svg)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ao-breeze': AoBreeze;
  }
}
