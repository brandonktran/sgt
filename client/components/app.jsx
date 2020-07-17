import React from 'react';
import GradeTable from './table-grades';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      avg: 0
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data }))
      .then(() => this.getAverageGrade());
  }

  getAverageGrade() {
    let average = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      average += this.state.grades[i].grade;
    }
    average = Math.round(average / this.state.grades.length);
    this.setState({ avg: average });
  }

  render() {
    return (
      <>
        <Header avg={this.state.avg} />
        <GradeTable grades={this.state.grades} />
      </>
    );
  }
}

export default App;
