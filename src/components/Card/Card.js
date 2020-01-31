import React from 'react'

class Card extends React.Component {
    

    constructor(props){
        super(props);
        this.state = {
            value: 'Card name'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    dragStart(e) {
        
    
        const target = e.target;
            
        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
        }, 0)
    }

    dragOver (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    dragEnd (e) {
        e.preventDefault();
        const target = e.target;
        target.style.display = "block"
    }

    auto_grow(element) {
        element.target.style.height = "inherit";
        element.target.style.height = `${element.target.scrollHeight + 2}px`;
    }

     render() {
        return (
            <div 
                className="card rounded-box"
                onDragStart={this.dragStart}
                onDragOver={this.dragOver}
                onDragEnd={this.dragEnd}
                className="card"
                draggable="true"
                id={this.props.id}
            >
                <div className="card-body">
                    <div className="card-text">
                    <textarea type="text" className="auto-expand card-name rounded-box" rows="1" onInput={this.auto_grow} maxLength="10000" defaultValue={"Card info"}></textarea>
                    </div>
                    <div className="card-menu">
                    <span className="rounded-box board-menu fas fa-ellipsis-h"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card
