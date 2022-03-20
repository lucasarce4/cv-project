import { Component } from 'react';
import Profile from './Profile';
import Education from './Education';
import Experience from './Experience';
class Body extends Component {
  render() {
    return (
      <main className="mainInfo">
        <Profile />
        <Education />
        <Experience />
      </main>
    );
  }
}

export default Body;
