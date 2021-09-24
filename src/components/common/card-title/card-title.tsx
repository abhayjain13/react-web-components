import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'card-title',
  styleUrl: 'card-title.scss',
  shadow: true,
})
export class CardTitle {
  @Prop() title: string;

  render() {
    return (
      <Host>
        <div class="pageTitle">
          {this.title && <h2>{this.title}</h2>}
          <slot></slot>
        </div>
      </Host>
    );
  }
}
