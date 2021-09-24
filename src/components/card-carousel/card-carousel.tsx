import { Component, Prop, h, Host } from '@stencil/core';
import ratingIcon from '../../images/rating.svg';
import '../common/card-title/card-title';

@Component({
  tag: 'card-carousel',
  styleUrl: 'card-carousel.scss',
  shadow: true,
})
export class CardCarousel {
  @Prop() pageTitle: string;
  @Prop() data: object[];

  render() {
    console.log(this);
    return (
      <Host>
        <section class="cardCarousel">
          {this.pageTitle && <card-title title={this.pageTitle} />}
          {this.data && this.data.length > 0 && (
            <div class="cardGrid">
              {this.data.map((item: object[], index: number) => {
                return (
                  <div class="cardData" key={index}>
                    {item.map((subItem: { title?: ''; imgUrl?: ''; bgColor?: ''; rating?: ''; reviews?: ''; amount?: ''; btnText?: ''; currency?: '' }, idx: string | number) => {
                      const { title = '', imgUrl = '', bgColor = '', rating = '', reviews = '', amount = '', btnText = '', currency = '' } = subItem;
                      return (
                        <div class="subCardData" key={idx}>
                          <div class="left">
                            <div class="cardIcon" style={{ background: bgColor }}>
                              <img src={imgUrl} alt="instagram" />
                            </div>
                            <div class="cardInfo">
                              <h4>{title}</h4>
                              <div>
                                <span>
                                  <img src={ratingIcon} alt="rating" />
                                  {rating}
                                </span>
                                <span>({reviews})</span>
                                <span>
                                  <img src={currency} alt="currency" />
                                  {amount}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="right">{btnText}</div>
                        </div>
                      );
                    })}
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
