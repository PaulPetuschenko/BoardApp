import React from 'react'
import AddCardButton from './Board/AddCardButton'
import BoardHeader from "./Board/BoardHeader";
import Card from './Card/Card'

class Board extends React.Component {
    state = {
        numChildren: 0
    };

    render() {
        const children = [];

        for (var i = 0; i < this.state.numChildren; i+=1) {
            children.push(<ChildComponent key={i} number={i} />);
        }
        
        var par = document.getElementsByClassName("board")

        return (
            <BoardConstractor addChild={this.onAddChild}>{children}</BoardConstractor> 
        );
    }
    onAddChild = () => {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    };

    drop = (target, event) => {
        
    }
}

const ChildComponent = props => <Card className="card" id={"card"+props.number}></Card>;

class BoardConstractor extends React.Component {

    render() {

    return (
        <div 
            id={this.props.id}
        >
            
            <div className="rounded-box board">
                <BoardHeader/>
                <div className="card-board">
                    
                    {this.props.children}
                </div>
                <div className="board-footer">
                    <AddCardButton onClick={this.props.addChild}/>
                </div>
            </div>
        </div>
    )
    }
}

export default Board

