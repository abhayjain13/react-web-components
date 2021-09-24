import { Component, Prop, h, Host } from '@stencil/core';
import navIcon from '../../../images/navIcon.svg';
import editIcon from '../../../images/editIcon.svg';
import shareIcon from '../../../images/shareIcon.svg';
import greenTick from '../../../images/greenTick.svg';
import backIcon from '../../../images/backIcon.svg';
import searchIcon from '../../../images/searchIcon.svg';

@Component({
  tag: 'page-header',
  styleUrl: 'page-header.scss',
  shadow: true,
})
export class Header {
  @Prop() username: string;
  @Prop() userImg: string;
  @Prop() pageTitle: string;
  @Prop() showSearch: boolean;
  @Prop() onClick?: any;

  render() {
    return (
      <Host>
        <header class="headWrapper">
          {this.username ? (
            <div class="hamburger">
              <img src={navIcon} alt="hamburger" />
              <div class="user">
                <img src={this.userImg} alt="user" />
                <div class="userInfo">
                  mysuper.link/<span>{this.username}</span>
                  <img src={shareIcon} alt="share" />
                </div>
                <div class="verified">
                  Want to get verified?
                  <img src={greenTick} alt="tick" />
                </div>
              </div>
              <img src={editIcon} alt="add profile" />
            </div>
          ) : (
            <div class="titleBar">
              <div class="left">
                <img src={backIcon} alt="back" onClick={this.onClick} />
                <h2>{this.pageTitle}</h2>
              </div>
              {this.showSearch && (
                <div class="right">
                  <img src={searchIcon} alt="search" />
                </div>
              )}
            </div>
          )}
        </header>
      </Host>
    );
  }
}
