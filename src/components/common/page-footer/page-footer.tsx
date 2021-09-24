import { Component, Prop, h, Host } from '@stencil/core';
import '../page-button/page-button';
import config from './config';

@Component({
  tag: 'page-footer',
  styleUrl: 'page-footer.scss',
  shadow: true,
})
export class Footer {
  @Prop() showPublish: boolean;

  render() {
    return (
      <Host>
        <footer>
          {!this.showPublish ? (
            config.map((item: { name?: ''; imgUrl?: ''; onClick: (event: MouseEvent) => void }, index: string | number) => {
              const { name = '', imgUrl = '', onClick } = item;
              return (
                <div key={index} class="main" onClick={onClick}>
                  <img src={imgUrl} alt={name} />
                  <span>{name}</span>
                </div>
              );
            })
          ) : (
            <div class="publish">
              <span>Your Changes Have Been Saved</span>
              <page-button>Publish</page-button>
            </div>
          )}
        </footer>
      </Host>
    );
  }
}
