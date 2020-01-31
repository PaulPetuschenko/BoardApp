import React, { Component } from 'react'

export default class BoardHeader extends Component {
    render() {
        return (
            <div className="board-header">
                <div className="board-name-wrapper">
                    <textarea className="board-name rounded-box" dir="auto" maxLength="512" defaultValue={"Name"}></textarea>
                </div>
                <span className="rounded-box board-menu fas fa-ellipsis-h"></span>
            </div>
        )
    }
}
