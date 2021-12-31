import styled from 'styled-components';
import { motion, MotionProps } from 'framer-motion';
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

export type DivProps = BorderProps & 
ColorProps & 
BoxShadowProps & 
FlexboxProps & 
LayoutProps & 
PositionProps & 
GridProps & 
ZIndexProps & 
MotionProps &
SpaceProps;

export const Div = styled<DivProps>(motion.div)({},
  compose(border, boxShadow, flexbox, layout, position, grid, zIndex, space, color),
)
