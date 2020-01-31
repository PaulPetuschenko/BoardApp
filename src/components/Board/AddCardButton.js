import React, { Children } from 'react'

class AddCardButton extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }

    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    render() {

        var buttonStyle;
        if (this.state.hover) {
            buttonStyle = {backgroundColor: '#172b4d', cursor: 'pointer'}
        } else {
            buttonStyle = {backgroundColor: 'rgb(25, 236, 240)'}
        }

        return (
            <a className="card-add-button" onClick={this.props.onClick}>
                <span className="add-card-icon fas fa-plus"></span>
                <span className="add-card-text">Add new card</span>
            </a>
        )
    }
}

export default AddCardButton
