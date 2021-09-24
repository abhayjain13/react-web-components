import { Component, Prop, h, Host } from '@stencil/core';
import '../common/card-title/card-title';

@Component({
  tag: 'grid-carousel',
  styleUrl: 'grid-carousel.scss',
  shadow: true,
})
export class GridCarousel {
  @Prop() pageTitle: string;
  @Prop() data: object[];

  render() {
    console.log(this);
    return (
      <Host>
        <section class="carousel">
          {this.pageTitle && <card-title title={this.pageTitle}></card-title>}
          {this.data && this.data.length > 0 && (
            <div class="cardGrid">
              {this.data.map((item: { title?: ''; imgUrl?: ''; bgColor?: '' }, index) => {
                const { title = '', imgUrl = '', bgColor = '' } = item;
                return (
                  <div class="cardData" key={index}>
                    <div class="cardIcon" style={{ background: bgColor }}>
                      <img src={imgUrl} alt="instagram" />
                    </div>
                    <div class="cardInfo">{title}</div>
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
