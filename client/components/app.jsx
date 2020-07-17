import React from 'react';
import GradeTable from './table-grades';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data }));

  }

  render() {
    return (
      <>
        <Header />
        <GradeTable grades={this.state.grades} />
      </>
    );
  }
}

export default App;
