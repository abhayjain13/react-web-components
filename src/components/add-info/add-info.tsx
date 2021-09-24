import { Component, Prop, h, Host } from '@stencil/core';
import '../common/card-title/card-title';

@Component({
  tag: 'add-info',
  styleUrl: 'add-info.scss',
  shadow: true,
})
export class AddInfo {
  @Prop() pageTitle: string;
  @Prop() data: object[];

  render() {
    return (
      <Host>
        <section class="addInfo">
          {this.pageTitle && <card-title title={this.pageTitle}></card-title>}
          {this.data &&
            this.data.length > 0 &&
            this.data.map((item: { name?: ''; placeholder?: '' }, index: number) => {
              const { name = '', placeholder = '' } = item;
              return (
                <div class="inputBox" key={index}>
                  <span>{name}</span>
                  <input placeholder={placeholder} />
                </div>
              );
            })}
        </section>
      </Host>
    );
  }
}
