import { Component } from 'react';
import photo from '../assests/photo-placeholder.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Full name',
      title: 'Job title',
      textHover: false,
      inputHover: false,
      editing: false,
      imgSource: photo,
    };
  }

  edit = () => {
    this.setState(({ editing }) => ({
      editing: !editing,
    }));
  };

  showButton = () => {
    this.setState(({ textHover }) => ({
      textHover: !textHover,
    }));
  };

  showInput = () => {
    this.setState(({ inputHover }) => ({
      inputHover: !inputHover,
    }));
  };

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
    if (e.target.value === '') {
      this.setState({
        name: 'Full name',
      });
    }
  };

  changeDescription = (e) => {
    this.setState({
      title: e.target.value,
    });
    if (e.target.value === '') {
      this.setState({
        title: 'Job title',
      });
    }
  };

  fileChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({
          imgSource: reader.result,
        });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const { name, title, imgSource } = this.state;
    const buttonShow = this.state.textHover ? 'button show' : 'button';
    const editorShow = this.state.editing ? 'editor show' : 'editor';
    const inputShow = this.state.inputHover
      ? 'inputFileContainer show'
      : 'inputFileContainer';
    return (
      <header className="header">
        <div
          className="imgContainer"
          onMouseOver={this.showInput}
          onMouseOut={this.showInput}
        >
          <div className={inputShow}>
            <label className="inputFileLabel" htmlFor="inputFile">
              <input
                className="inputFile"
                type="file"
                accept="image/png, image/jpeg"
                onChange={this.fileChange}
              />
              Load photo
            </label>
          </div>
          <img src={imgSource} alt="" />
        </div>
        <div
          className="textContainer"
          onMouseOver={this.showButton}
          onMouseOut={this.showButton}
        >
          <div className="nameContainer">
            <h1>{name}</h1>
          </div>
          <div className="jobTitleContainer">
            <p>{title}</p>
          </div>
          <div className={buttonShow}>
            <button onClick={this.edit}>Edit</button>
          </div>
        </div>

        <div className={editorShow}>
          <input onChange={this.changeName} value={name} type="text" />
          <input onChange={this.changeDescription} value={title} type="text" />
          <button onClick={this.edit}>Close</button>
        </div>
      </header>
    );
  }
}

export default Header;
