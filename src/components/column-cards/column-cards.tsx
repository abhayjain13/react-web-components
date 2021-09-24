import { Component, Prop, h, Host } from '@stencil/core';
import '../common/card-title/card-title';

@Component({
  tag: 'column-cards',
  styleUrl: 'column-cards.scss',
  shadow: true,
})
export class ColumnCards {
  @Prop() pageTitle: string;
  @Prop() data: object[];

  render() {
    console.log(this);
    return (
      <Host>
        <section class="columnCards">
          {this.pageTitle && <card-title title={this.pageTitle}></card-title>}
          {this.data &&
            this.data.length > 0 &&
            this.data.map((item: { imgUrl?: ''; title?: ''; subtitle?: ''; bgColor?: ''; iconUrl?: '' }, index) => {
              const { imgUrl = '', title = '', subtitle = '', bgColor = '', iconUrl = '' } = item;
              return (
                <div class="socialCards" key={index}>
                  <div class="cardData">
                    <div class="cardIcon" style={{ background: bgColor }}>
                      <img src={imgUrl} alt="instagram" />
                    </div>
                    <div class="cardInfo">
                      <div class="title">{title}</div>
                      <div class="subTitle">{subtitle}</div>
                    </div>
                  </div>
                  {iconUrl && <img src={iconUrl} alt="dots" class="more" />}
                </div>
              );
            })}
        </section>{' '}
      </Host>
    );
  }
}
