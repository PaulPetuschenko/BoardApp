import React, { Component } from 'react';
import Board from "./components/Board";
import Menu from './components/Menu';


class BoardSpace extends Component {
	render() {
	return (
		<div className="App">
			<main className="flexbox">
				

				{this.props.children}
				
				<div className="add-board rounded-box board">
					<form action="">
						<a className="add-board-link" onClick={this.props.addChild}>
							<span className=" add-board-icon fas fa-plus"></span>
							<span className="add-board-text">Add another board</span>	
						</a>
					</form>
				</div>
			</main>
		</div>
		);
	}
}

const ChildComponent = props => <Board id={"board"+props.number}></Board>;

class App extends Component {
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
            <BoardSpace addChild={this.onAddChild}>{children}</BoardSpace> 
        );
	}
	
    onAddChild = () => {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    };
}

export default App;
