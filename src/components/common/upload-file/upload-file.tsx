import { Component, Prop, h, Host } from '@stencil/core';
import upload from '../../../images/upload.svg';

@Component({
  tag: 'upload-file',
  styleUrl: 'upload-file.scss',
  shadow: true,
})
export class UploadFile {
  [x: string]: any;
  @Prop() imgFile: string;
  @Prop() userImg: string;
  @Prop() pageTitle: string;
  @Prop() showSearch: boolean;
  @Prop() onClick?: any;
  state: { imgFile: string };

  onChange?: (event: Event) => void;

  constructor() {
    this.state = {
      imgFile: '',
    };
  }

  setImageData = (event: any) => {
    event.target.files[0] && this.setState({ imgFile: URL.createObjectURL(event.target.files[0]) });
  };

  render() {
    const { imgFile } = this.state;
    return (
      <Host>
        <div class="upload">
          <div class="contaniner">
            <img src={upload} alt="upload" />
            <h3>Upload Image</h3>
            <input type="file" onChange={this.setImageData} />
          </div>
          {imgFile && (
            <div class="preview">
              <img src={imgFile} alt="file" />
              Uploaded Successfully
            </div>
          )}
        </div>
      </Host>
    );
  }
}
