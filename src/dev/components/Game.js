import React from 'react';
import {Component} from 'react';
import { Layer, Rect, Group, Text, Stage} from 'react-konva';
import CanvasGrid from "./Canvas.Grid";

class Game extends Component{
    render(){
        let grid = {
            layout: Layer
        };
        return(
            <CanvasGrid/>
        );
    }
}

export default Game;