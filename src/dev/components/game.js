import React from 'react';
import {Component} from 'react';
import { Stage, Layer} from 'react-konva';
import Cell from "./cell";

class Game extends Component{
    render(){
        return(
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Cell x={20} y={20} width={50} height={50} color={'blue'}/>
                </Layer>
            </Stage>
        );
    }
}

export default Game;