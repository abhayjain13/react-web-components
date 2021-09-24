import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'page-menu',
  styleUrl: 'page-menu.scss',
  shadow: true,
})
export class PageMenu {
  @Prop() data: string[];

  render() {
    return (
      <Host>
        <section class="menu">
          {this.data &&
            this.data.length > 0 &&
            this.data.map((item: any, index: number) => {
              const { title = 'All' } = item;
              return (
                <div class={title === 'All' ? 'selected' : ''} key={index}>
                  {title}
                </div>
              );
            })}
        </section>
      </Host>
    );
  }
}
