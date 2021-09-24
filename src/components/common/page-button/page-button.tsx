import { Component, Event, h, Host } from '@stencil/core';

@Component({
  tag: 'page-button',
  styleUrl: 'page-button.scss',
  shadow: true,
})
export class PageButton {
  @Event() onClick: any;

  render() {
    return (
      <Host>
        <button onClick={this.onClick}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
