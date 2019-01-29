import * as React from 'react';
import { MapNode } from './UndergroundLines';
import { Route } from 'react-router';
import { slugify } from '../utils/slugify';

// colors for the metro lines 
// TODO: pick screen safe/optimal colors + optimal ones for color blindness 
export const COLOR_ORANGE = 'rgb(243, 113, 30)';
export const COLOR_BLUE = 'rgb(0, 128, 255)';
export const COLOR_GREEN = 'rgb(102, 204, 0)';

interface Dim {
  r: number;
}

interface RouteCircleProps {
  x: number;
  y: number;
  r: number;
  isActive: boolean;
  node: MapNode;
}

/**
 * A clickable station node
 * @param {RouteCircleProps} props
 * @returns {any}
 * @constructor
 */
const RouteCircle = ( props: RouteCircleProps ) => {

  return (
    <Route
      render={( {history} ) => (
        <circle
          cx={props.x}
          cy={props.y}
          r={props.isActive ? props.r + 2 : props.r}
          fill={COLOR_ORANGE}
          onClick={() => history.push(`/centre/${slugify(props.node.name)}/`)}
        />
      )}
    />
  );
};

const getLineDirection = ( direction: string ) => {
  switch (direction) {
    case 'w':
    case 'e':
      return {rx: 0, ry: -12};

    default:
      return {rx: -12, ry: 0};
  }
};

const StationLine = ( props: any ) => {
  // Should the lines be horizontal or vertical?
  const { rx, ry } = getLineDirection(props.node.direction);
  const coords = {x1: props.node.x - rx, y1: props.node.y - ry, x2: props.node.x + rx, y2: props.node.y + ry};
  return (
    <line {...coords} strokeWidth="10" stroke={COLOR_ORANGE} />
  );
};

export interface StationProps {
  x: number;
  y: number;
  node: MapNode;
}

export interface StationState {
  x: number;
  y: number;
  isActive: boolean;
}

export class Station extends React.Component<StationProps, StationState> {

  constructor( props: StationProps ) {
    super(props);
    this.state = {
      x: props.x,
      y: props.y,
      isActive: false,
    };
  }

  public toggleActive = () => {
    console.log('on mouse enter');
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    const dim: Dim = {
      r: 10
    };

    return (
      this.props.node.filled === -1
        ? <StationLine node={this.props.node}/>
        : (
          <RouteCircle
            x={this.state.x}
            y={this.state.y}
            r={this.state.isActive ? dim.r + 2 : dim.r}
            isActive={this.state.isActive}
            node={this.props.node}
          />
        )
    );
  }
}
