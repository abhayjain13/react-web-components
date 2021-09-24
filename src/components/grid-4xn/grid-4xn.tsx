import { Component, Prop, h, Host } from '@stencil/core';
import '../common/card-title/card-title';

@Component({
  tag: 'grid-4xn',
  styleUrl: 'grid-4xn.scss',
  shadow: true,
})
export class Grid4xN {
  @Prop() pageTitle: string;
  @Prop() data: object[];

  render() {
    console.log(this);
    return (
      <Host>
        <section class="grid4xN">
          {this.pageTitle && <card-title title={this.pageTitle}></card-title>}
          {this.data && this.data.length > 0 && (
            <div class="colorGrid">
              {this.data.map((item: { title?: ''; bgColor?: '' }, index) => {
                const { title = '', bgColor = '' } = item;
                return (
                  <div class="colorCard" key={index} style={{ background: bgColor }}>
                    <span class="cardData">{title}</span>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </Host>
    );
  }
}
