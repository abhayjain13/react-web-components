import { Component, h, Host } from '@stencil/core';
import plusIcon from '../../images/plus-circle.svg';

@Component({
  tag: 'add-cust-link',
  styleUrl: 'add-cust-link.scss',
  shadow: true,
})
export class AddCustLink {
  render() {
    return (
      <Host>
        <section class="addCustLink">
          <input placeholder="Paste Custom Link here" />
          <img src={plusIcon} alt="add" />
        </section>
      </Host>
    );
  }
}
