// Type definitions for rc-progress 2.2.5
// Project: rc-progress
// Definitions by: TizioFittizio <https://github.com/TizioFittizio>

import * as React from 'react';

export interface LineProps {
  
    /* Customized className */
    className?: string;

    /* The percent of the progress */
    percent?: number;

    /* Prefix className for component */
    prefixCls?: string;

    /* Stroke color */
    strokeColor?: string;

    /* The shape to be used at the end of the progress bar, can be `butt`, `square` or `round`. */
    strokeLinecap?: string;

    /* Width of the stroke. Unit is percentage of SVG canvas size. */
    strokeWidth?: number;

    /* Style object will be added to svg element */
    style?: string;

    /* Color for lighter trail stroke underneath the actual progress path. */
    trailColor?: string;

    /* Width of the trail stroke. Unit is percentage of SVG canvas size. Trail is always centered relative to actual progress path. If trailWidth are not defined, it same as strokeWidth. */
    trailWidth?: number;

}

export declare class Line extends React.Component<LineProps, any> { 

}

