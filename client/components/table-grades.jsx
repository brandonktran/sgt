import React from 'react';

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.grade.name,
      course: this.props.grade.course,
      grade: this.props.grade.grade
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name);
    const category = event.target.name;
    this.setState({
      [category]: event.target.value
    });
  }

  handleReset(event) {
    event.preventDefault();
    this.props.editToggle(null);
    this.setState({
      name: this.props.grade.name,
      course: this.props.grade.course,
      grade: this.props.grade.grade
    });
  }

  handleUpdate(id) {
    const newGrade = {
      id: id,
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.editGrade(id, newGrade);
    event.preventDefault();
    this.props.editToggle(null);
    this.setState({
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    });
  }

  render() {
    if (this.props.edit[0] === true && this.props.id === this.props.edit[1]) {
      return (
        <tr>
          <td><input
            name="name"
            autoFocus
            className="inputs"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          /></td>
          <td><input
            name="course"
            autoFocus
            className="inputs"
            type="text"
            value={this.state.course}
            onChange={this.handleChange}
          /></td>
          <td><input
            name="grade"
            autoFocus
            className="inputs"
            type="text"
            value={this.state.grade}
            onChange={this.handleChange}
          /></td>
          <td>
            <button
              onClick={() => { this.handleUpdate(this.props.id); }}
              className="btn btn-outline-success ml-1"><i className="fas fa-check"></i>
            </button>
            <button
              onClick={() => { this.handleReset(event); }}
              className="btn btn-outline-danger ml-1"><i className="fas fa-ban"></i>
            </button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>{this.props.grade.name}</td>
          <td>{this.props.grade.course}</td>
          <td>{this.props.grade.grade}</td>
          <td>
            <button
              onClick={() => { this.props.editToggle(this.props.id); }}
              className="btn btn-outline-info mr-1"><i className="far fa-edit"></i>
            </button>
            <button
              onClick={() => { this.props.removeGrade(this.props.id); }}
              className="btn btn-outline-danger ml-1"><i className="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      );
    }
  }

}

export default class GradeTable extends React.Component {

  render() {
    return (
      <table className='table table-striped m-3 mr-4'>
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.grades.map(todo => {
              return (
                <Grade key={todo.id} id={todo.id} grade={todo} removeGrade={this.props.removeGrade} editGrade={this.props.editGrade} edit={this.props.edit} editToggle={this.props.editToggle} />
              );
            })
          }
        </tbody>

      </table>
    );
  }
}
