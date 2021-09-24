import { Component, Prop, h, Host } from '@stencil/core';
import '../common/page-button/page-button';

@Component({
  tag: 'add-buttons',
  styleUrl: 'add-buttons.scss',
  shadow: true,
})
export class AddButtons {
  @Prop() data: object[];

  render() {
    return (
      <Host>
        <section class="addBtn">
          {this.data &&
            this.data.length > 0 &&
            this.data.map((item: { imgUrl?: ''; name?: '' }, index: number) => {
              const { imgUrl = '', name = '' } = item;
              return (
                <page-button key={index} onClick={() => {}}>
                  {imgUrl && <img src={imgUrl} alt={name} />}
                  {name && <span>{name}</span>}
                </page-button>
              );
            })}
        </section>
      </Host>
    );
  }
}
