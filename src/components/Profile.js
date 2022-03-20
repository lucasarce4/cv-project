import { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      hover: false,
      editing: false,
    };
  }

  editButton = () => {
    this.setState(({ hover }) => ({
      hover: !hover,
    }));
  };

  edit = () => {
    this.setState(({ editing }) => ({
      editing: !editing,
    }));
  };

  profileChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  render() {
    const buttonShow = this.state.hover
      ? 'profileButton show'
      : 'profileButton';
    const formShow = this.state.editing ? 'profileForm show' : 'profileForm';
    let profileDescription = this.state.description;
    if (this.state.description === '')
      profileDescription = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iste, delectus exercitationem eveniet fuga officia inventore. Maiores aliquam inventore natus?`;
    return (
      <div
        className="profile"
        onMouseOver={this.editButton}
        onMouseOut={this.editButton}
      >
        <h2 className="profileTitle">Profile</h2>
        <p className="profileText">{profileDescription}</p>
        <button className={buttonShow} onClick={this.edit}>
          Edit
        </button>

        <div className={formShow}>
          <textarea
            placeholder="Add description"
            onChange={this.profileChange}
          ></textarea>
          <button onClick={this.edit}>Close</button>
        </div>
      </div>
    );
  }
}

export default Profile;
