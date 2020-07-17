import React from 'react';
import GradeTable from './table-grades';
import GradeForm from './grades-form';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addGrade = this.addGrade.bind(this);
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data }));
  }

  getAverageGrade() {
    let average = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      average += parseFloat(this.state.grades[i].grade);
    }
    average = Math.round(average / this.state.grades.length);
    return average;
  }

  addGrade(newGrade) {
    fetch('api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade) //
    }).then(res => res.json())
      .then(data => this.setState((prevState, props) => {
        const newArray = [...prevState.grades];
        newArray.push(newGrade);
        return (
          {
            grades: newArray
          });
      }));
  }

  render() {
    return (
      <>
        <div className="container">
          <div>
            <Header avg={this.getAverageGrade()} />
          </div>
          <div className="container2">
            <GradeTable grades={this.state.grades} />
            <GradeForm onSubmit={this.addGrade} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
