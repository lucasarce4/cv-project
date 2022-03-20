import { Component } from 'react';
import uniqid from 'uniqid';

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '123456789',
      adress: 'fake st. 123',
      countryAndCity: 'Rosario, Arg',
      email: 'coolemail@nice.com',
      linkedin: 'Username',
      skills: ['HTML', 'CSS', 'Javascript', 'React', 'Test driven development'],
      inputSkill: '',
      editing: false,
      skillsEditing: false,
      asideHover: false,
    };
  }

  edit = () => {
    this.setState(({ editing }) => ({
      editing: !editing,
    }));
  };

  editSkills = () => {
    this.setState(({ skillsEditing }) => ({
      skillsEditing: !skillsEditing,
    }));
  };

  showButton = () => {
    this.setState(({ asideHover }) => ({
      asideHover: !asideHover,
    }));
  };

  handleInputChange = (event, statePosition) => {
    const currentState = Object.keys(this.state)[statePosition];
    this.setState({
      [currentState]: event.target.value,
    });
  };

  addSkill = () => {
    this.setState({
      skills: this.state.skills.concat(this.state.inputSkill),
      inputSkill: '',
    });
  };

  deleteSkills = (e) => {
    const itemIndex = parseInt(e.target.parentElement.dataset.index);
    const skillsArray = this.state.skills;
    this.setState({
      skills: [
        ...skillsArray.slice(0, itemIndex),
        ...skillsArray.slice(itemIndex + 1),
      ],
    });
  };

  render() {
    const { phone, adress, countryAndCity, email, linkedin } = this.state;
    const buttonShow = this.state.asideHover
      ? 'asideButton show'
      : 'asideButton';
    const skillsDeleteButton = this.state.asideHover
      ? 'skillsDeleteButton show'
      : 'skillsDeleteButton';
    const skillsButton = this.state.asideHover
      ? 'skillsButton show'
      : 'skillsButton';
    const editorShow = this.state.editing ? 'asideEditor show' : 'asideEditor';
    const skillsEditor = this.state.skillsEditing
      ? 'skillsEditor show'
      : 'skillsEditor';
    return (
      <aside
        className="personalInfoContainer"
        onMouseEnter={this.showButton}
        onMouseLeave={this.showButton}
      >
        <button className={buttonShow} onClick={this.edit}>
          Edit
        </button>
        <div className="personalInfo">
          <div className="phoneNumber">
            <h3>Phone</h3>
            <p>{phone}</p>
          </div>
          <div className="adress">
            <h3>Address</h3>
            <p>{adress}</p>
            <p>{countryAndCity}</p>
          </div>
          <div className="email">
            <h3>Email</h3>
            <p>{email}</p>
          </div>
          <div className="linkedin">
            <h3>LinkedIn</h3>
            <p>{linkedin}</p>
          </div>

          <div className={editorShow}>
            <input
              type="tel"
              placeholder="Phone"
              onChange={(event) => this.handleInputChange(event, 0)}
            />
            <input
              type="text"
              placeholder="Adress"
              onChange={(event) => this.handleInputChange(event, 1)}
            />
            <input
              type="text"
              placeholder="City,Country"
              onChange={(event) => this.handleInputChange(event, 2)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => this.handleInputChange(event, 3)}
            />
            <input
              type="text"
              placeholder="LinkedIn"
              onChange={(event) => this.handleInputChange(event, 4)}
            />
            <button onClick={this.edit}>Close</button>
          </div>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            {this.state.skills.map((item, i) => {
              return (
                <li key={uniqid()} data-index={i}>
                  <div>{item}</div>
                  <button
                    className={skillsDeleteButton}
                    onClick={this.deleteSkills}
                  >
                    x
                  </button>
                </li>
              );
            })}
          </ul>
          <button className={skillsButton} onClick={this.editSkills}>
            Edit
          </button>
          <div className={skillsEditor}>
            <input
              type="text"
              placeholder="Skill"
              value={this.state.inputSkill}
              onChange={(e) => this.handleInputChange(e, 6)}
            />
            <div className="skillFormButtons">
              <button onClick={this.addSkill}>Add</button>
              <button onClick={this.editSkills}>Close</button>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default Personal;
