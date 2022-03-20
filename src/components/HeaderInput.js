import { Component } from 'react';
import Header from './Header';

class HeaderInput extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  handleChange = (e) => {
    <Header value={e.target.value} />;
  };

  render() {
    return <input onChange={this.handleChange} type="text" />;
  }
}

export default HeaderInput;
