import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { motion, LayoutGroup, MotionProps } from 'framer-motion';
import { Div } from '@tiskahar/orcish.containers.div';
import { ThemeProps, convertRemToPixels } from '@tiskahar/orcish.constants';
import { HiddenInput } from '@tiskahar/orcish.form.hidden-input';
import { Box } from '@tiskahar/orcish.containers.box';

export type SliderProps = ThemeProps & {
  /**
   * form name for the control
   */
  name: string;

  /**
   * how long do you want the track to be?
   */
  trackLength: number;

  /**
   * the minimum value 
   */
  min: number;

  /**
   * the maximum value 
   */
  max: number;

  /**
   * the initial, default value
   */
  initial?: number;

  /**
   * how many digits to display in the result
   */
  precision?: number;

  /**
   * update handler to receive the value when dragging ends
   */
  onUpdate? : (value: number | string) => void;
};

const Track = styled(Div)({
  height: '6px',
  borderRadius: ({theme}) => theme.borderRadius.fullRound,
  backgroundColor: ({theme}) => theme.colors.grays[0],
  padding: '2px',
  boxShadow: ({theme}) => theme.shadows[0],
  position: 'relative',
  marginTop: ({theme}) => theme.sizes.L,
})

const Display = styled(Box)({
  borderRadius: ({theme}) => theme.borderRadius.fullStandard,
  backgroundColor: ({theme}) => theme.colors.grays[2],
  padding: ({theme}) => `2px ${ theme.sizes.SS}`,
  boxShadow: ({theme}) => theme.shadows[0],
  margin: 'auto',
  width: 'fit-content',
  marginTop: ({theme}) => theme.sizes.L,
  marginBottom: ({theme}) => theme.sizes.S,
})

const Handle = styled(motion.div)({
  width: ({theme}) => theme.sizes.LL,
  height: ({theme}) => theme.sizes.LL,
  borderRadius:({theme}) => theme.borderRadius.circle,
  backgroundColor: ({theme}) => theme.colors.primary[0],
  top: 'calc(-50% - 0.15rem)',
  position: 'absolute',
  boxShadow: ({theme}) => theme.shadows[0],
  cursor: 'pointer',
  zIndex: 2,
})

export const Slider = withTheme(function Slider({ name, max, min, initial, trackLength, precision = 1, ...props }: SliderProps) {
  const [ trackWidth, length, extent] = useMemo(() => {
    const width = trackLength * 16;
    const handleOffset = convertRemToPixels(props.theme.sizes.LL) / 1;
    const length = width - handleOffset;
    const extent = max - min;

    return [
      width,
      length,
      extent,
      handleOffset,
    ]
  }, [max, min, initial, trackLength])
  
  const [ pos, setPos ] = useState(initial !== undefined ? toPixel(initial) : 0)

  function toPixel(value: number): number {
    const calculated = ((value - min) / extent) * length;

    return Math.max(0, Math.min(length, calculated));
  }

  function toValue(pixel: number): string {
    const calculated = min + ((pixel/length) * extent);
    
    return Math.max(min, Math.min(max, calculated)).toFixed(precision);
  }

  useEffect(() => {
    if (!props.onUpdate) return;

    props.onUpdate(toValue(pos))
  })

  return (
    <Box>
      <HiddenInput 
        name={name}
        value={toValue(pos)}
      />
      <Track
        width={`${trackWidth}px`}
      >
        <Handle
          drag="x"
          dragMomentum={false}
          initial={{
            x: pos
          }}
          onDragEnd={(event, info) => {
            const newPos = Math.max(0, Math.min(length, pos + info.offset.x))
            setPos(newPos);
          }}
          dragConstraints={{
            left: 0,
            right: length,
          }}
        />
      </Track>
      <Display >{toValue(pos)}</Display>
    </Box>
  );
})
