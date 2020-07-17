/* eslint-disable indent */
import React from 'react';

export default class GradeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            course: '',
            grade: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(event) {
        const property = event.target.placeholder.toLowerCase();
        this.setState({
            [property]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const newGrade = {
            name: this.state.name,
            course: this.state.course,
            grade: this.state.grade
        };
        this.props.onSubmit(newGrade);
        this.setState({
            name: '',
            course: '',
            grade: ''
        });
    }

    handleReset() {
        this.setState({
            name: '',
            course: '',
            grade: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                <div className="form-group">
                    <span><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg></span>
                    <input required autoFocus type="text" placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <span>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-journal-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1H2a2 2 0 0 1 2-2z" />
                            <path d="M2 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2z" />
                            <path fillRule="evenodd" d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </span>
                    <input required autoFocus type="text" placeholder="Course"
                        value={this.state.course}
                        onChange={this.handleChange} />
                </div>
                <span><i className="fa fa-graduation-cap"></i></span>
                <div className="form-group">
                    <input required autoFocus type="number" placeholder="Grade"
                        value={this.state.grade}
                        onChange={this.handleChange} />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary m-1">Add</button>
                    <button type="reset" className="btn btn-danger m-1">Cancel</button>
                </div>
            </form>
        );
    }
}
