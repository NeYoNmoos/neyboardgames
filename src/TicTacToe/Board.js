import * as React from "react";
import Square from "./Square";
import {
    Grid,
  } from "@mui/material";
import CalculateWinner from "./CaclulateWinner";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();

        if(CalculateWinner(squares) || squares[i]) {
            return; 
        }

        if(this.state.xIsNext){
            squares[i] = "X";
        }
        else{
            squares[i] = "O";
        }
        
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }


    renderSquare(i) {
        return (
        <Square
         value={this.state.squares[i]} 
            onClick={() => this.handleClick(i)}
         />
        );
    }

    render() {
        const winner = CalculateWinner(this.state.squares);
        let status;
        if(winner) {
            status = `Winner: ${winner}`;
        }
        else {
            status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
        }

        return(
            <>
                <div>
                    {status}
                </div>
                <Grid container>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </Grid>
            </>
        ); 

    }
}

export default Board; 
