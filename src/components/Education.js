import { Component } from 'react';
import uniqid from 'uniqid';

class Education extends Component {
  constructor() {
    super();
    this.state = {
      school: '',
      degree: '',
      location: '',
      startDate: '',
      finishDate: '',
      education: [
        {
          school: 'Awesome University',
          degree: 'Computer Science',
          location: 'Rosario,Argentina',
          startDate: 'March 2021',
          finishDate: 'Dec 2023',
        },
      ],
      eduHover: false,
      editing: false,
    };
  }

  showButton = () => {
    if (this.state.eduHover) {
      this.setState({
        eduHover: false,
      });
      return;
    } else {
      this.setState({
        eduHover: true,
      });
    }
  };

  edit = () => {
    this.setState(({ editing }) => ({
      editing: !editing,
    }));
  };

  handleChange = (e, statePosition) => {
    const currentState = Object.keys(this.state)[statePosition];
    this.setState({
      [currentState]: e.target.value,
    });
  };

  addEdu = () => {
    const { school, degree, location, startDate, finishDate } = this.state;
    this.setState({
      education: this.state.education.concat({
        school: school,
        degree: degree,
        location: location,
        startDate: startDate,
        finishDate: finishDate,
      }),
      school: '',
      degree: '',
      location: '',
      startDate: '',
      finishDate: '',
    });
  };

  deleteEdu = (e) => {
    const itemIndex = parseInt(e.target.parentElement.dataset.index);
    const eduArray = this.state.education;
    this.setState({
      education: [
        ...eduArray.slice(0, itemIndex),
        ...eduArray.slice(itemIndex + 1),
      ],
    });
  };

  render() {
    const eduItems = this.state.education;
    const showButton = this.state.eduHover ? 'eduButton show' : 'eduButton';
    const itemButton = this.state.eduHover ? 'itemButton show' : 'itemButton';
    const eduForm = this.state.editing ? 'eduForm show' : 'eduForm';
    const { school, degree, location, startDate, finishDate } = this.state;

    return (
      <div
        className="education"
        onMouseEnter={this.showButton}
        onMouseLeave={this.showButton}
      >
        <h2>Education</h2>
        <div className="educationItems">
          <ul>
            {eduItems.map((item, i) => {
              return (
                <li
                  key={uniqid()}
                  data-index={i}
                  onMouseEnter={this.showItemButton}
                  onMouseLeave={this.showItemButton}
                >
                  <div className="firstHalfInfo">
                    <div className="eduFrom">{item.startDate}</div>-
                    <div className="eduTo">{item.finishDate}</div>
                  </div>
                  <div className="secondHalfInfo">
                    <div className="degree">{item.degree}</div>
                    <div className="school">{item.school}</div>
                    <div className="edulocation">{item.location}</div>
                  </div>
                  <button className={itemButton} onClick={this.deleteEdu}>
                    x
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <button className={showButton} onClick={this.edit}>
          Edit
        </button>
        <div className={eduForm}>
          <input
            type="text"
            value={school}
            onChange={(e) => this.handleChange(e, 0)}
            placeholder="School/Univerity"
          />
          <input
            type="text"
            value={degree}
            onChange={(e) => this.handleChange(e, 1)}
            placeholder="Degree"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => this.handleChange(e, 2)}
            placeholder="City,Country"
          />
          <input
            type="text"
            value={startDate}
            onChange={(e) => this.handleChange(e, 3)}
            placeholder="From"
          />
          <input
            type="text"
            value={finishDate}
            onChange={(e) => this.handleChange(e, 4)}
            placeholder="To"
          />

          <button onClick={this.addEdu}>Add</button>
          <button onClick={this.edit}>Close</button>
        </div>
      </div>
    );
  }
}

export default Education;
