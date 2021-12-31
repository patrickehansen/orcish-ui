import styled from 'styled-components';
import { MotionProps } from 'framer-motion';
import {
  BorderProps,
  ColorProps,
  BoxShadowProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  ZIndexProps,
  border,
  boxShadow,
  compose,
  flexbox,
  layout,
  position,
  space,
  color,
  zIndex,
  grid,
} from 'styled-system'
import { Div } from '@tiskahar/orcish.containers.div';

export type BoxProps = BorderProps & 
ColorProps & 
BoxShadowProps & 
FlexboxProps & 
LayoutProps & 
PositionProps & 
GridProps & 
ZIndexProps & 
MotionProps &
SpaceProps;

export const Box = styled<BoxProps>(Div)({
  boxSizing: 'border-box',
  minWidth: 0,
  overflow: 'hidden',
},
  compose(border, boxShadow, flexbox, layout, position, grid, zIndex, space, color),
)
