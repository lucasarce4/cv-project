import { getByTitle } from '@testing-library/react';
import { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Full name',
      title: 'Job title',
    };
  }
  render() {
    const { name, title } = this.state;
    return (
      <header className="header">
        <div className="imgContainer"></div>
        <div className="textContainer">
          <div className="nameContainer">
            <h1>{name}</h1>
          </div>
          <div className="jobTitleContainer">
            <p>{title}</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
