import { Component } from 'react';
import uniqid from 'uniqid';

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      company: '',
      title: '',
      location: '',
      startDate: '',
      finishDate: '',
      description: '',
      experience: [
        {
          company: 'Web Dev Company',
          title: 'Junior front end developer',
          location: 'Rosario, Argentina',
          startDate: 'Dec 2018',
          finishDate: 'July 2022',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quos soluta rerum nihil dignissimos tenetur.',
        },
        {
          company: 'Nicer Web Dev Company',
          title: 'Senior front end developer',
          location: 'Rosario, Argentina',
          startDate: 'July 2022',
          finishDate: 'Current',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quos soluta rerum nihil dignissimos tenetur.',
        },
      ],
      hover: false,
      editing: false,
    };
  }

  showButton = () => {
    if (this.state.hover) {
      this.setState({
        hover: false,
      });
      return;
    } else {
      this.setState({
        hover: true,
      });
    }
  };

  showForm = () => {
    this.setState(({ editing }) => ({
      editing: !editing,
    }));
  };

  addExperience = () => {
    const { company, title, location, startDate, finishDate, description } =
      this.state;
    this.setState({
      experience: this.state.experience.concat({
        company: company,
        title: title,
        location: location,
        startDate: startDate,
        finishDate: finishDate,
        description: description,
      }),
      company: '',
      title: '',
      location: '',
      startDate: '',
      finishDate: '',
      description: '',
    });
  };

  handleChange = (event, statePosition) => {
    const currentState = Object.keys(this.state)[statePosition];
    this.setState({
      [currentState]: event.target.value,
    });
  };

  deleteExp = (e) => {
    const itemIndex = parseInt(e.target.parentElement.dataset.index);
    const expArray = this.state.experience;
    this.setState({
      experience: [
        ...expArray.slice(0, itemIndex),
        ...expArray.slice(itemIndex + 1),
      ],
    });
  };

  render() {
    const { company, title, location, startDate, finishDate, description } =
      this.state;
    const buttonShow = this.state.hover
      ? 'experienceButton show'
      : 'experienceButton';
    const expButtonShow = this.state.hover
      ? 'expItemButton show'
      : 'expItemButton';
    const formShow = this.state.editing
      ? 'experienceForm show'
      : 'experienceForm';
    return (
      <div
        className="experience"
        onMouseEnter={this.showButton}
        onMouseLeave={this.showButton}
      >
        <h2>Experience</h2>
        <ul>
          {this.state.experience.map((item, i) => {
            return (
              <li key={uniqid()} data-index={i}>
                <div className="dates">
                  <div className="startDate">{item.startDate}</div>-
                  <div className="finishDate">{item.finishDate}</div>
                </div>
                <div className="company">{item.company}</div>
                <div className="location">{item.location}</div>
                <div className="title">{item.title}</div>
                <div className="description">{item.description}</div>
                <button className={expButtonShow} onClick={this.deleteExp}>
                  x
                </button>
              </li>
            );
          })}
        </ul>
        <button className={buttonShow} onClick={this.showForm}>
          Edit
        </button>
        <div className={formShow}>
          <input
            type="text"
            value={company}
            onChange={(e) => this.handleChange(e, 0)}
            placeholder="Company"
          />
          <input
            type="text"
            value={title}
            onChange={(e) => this.handleChange(e, 1)}
            placeholder="Job title"
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
          <input
            type="text"
            value={description}
            onChange={(e) => this.handleChange(e, 5)}
            placeholder="Description"
          />
          <button onClick={this.addExperience}>Add</button>
          <button onClick={this.showForm}>Close</button>
        </div>
      </div>
    );
  }
}

export default Experience;
