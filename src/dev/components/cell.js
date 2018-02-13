import React, {Component} from 'react';
import {Stage, Layer, Rect, Text} from 'react-konva';
import Konva from 'konva';

class Cell extends Component {
    state = {

    };
    handleClick = () => {
        alert("Clicked");
    };

    render() {
        return (
            <Rect
                x = {this.props.x}
                y = {this.props.y}
                width = {this.props.width}
                height= {this.props.height}
                fill = {this.props.color}
                shadowBlur = {5}
                onClick = {this.handleClick}
            />
        );
    }
}

export default Cell;