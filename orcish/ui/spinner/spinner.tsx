import React, { useState } from 'react';
import styled, {withTheme} from 'styled-components';
import { motion } from 'framer-motion';
import { Box } from '@tiskahar/orcish.containers.box';
import { random } from '@tiskahar/orcish.constants';

const Svg = styled.svg({
  width:"120px",
  height:"120px"
})

function Die({colors, delay}) {
  const [ color, setColor ] = useState(random(colors))
  setTimeout(() => setColor(random(colors)), delay * 1000);
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="87 87 66 98"
    >
      <path
        fill={color}
        d="M122.6,159.883c-1.431,0.822-3.77,0.822-5.201,0l-27.298-15.701c-1.431-0.822-2.601-2.84-2.601-4.483v-31.397 c0-1.647,1.17-3.662,2.601-4.484l27.298-15.7c1.431-0.823,3.77-0.823,5.201,0l27.301,15.7c1.431,0.822,2.6,2.837,2.6,4.484v31.397 c0,1.644-1.169,3.661-2.6,4.483L122.6,159.883z"
      />
    </Svg>
  )
}

export const Spinner = withTheme(function Spinner({theme}) {
  return (
    <Box
      padding="4rem"
      position="relative"
      width="800px"
      height="400px"
    >
      <Box
        position="absolute"
        animate={{
          rotate: [720, 180, 90, 50, 20],
          scale: [0.3, 1.2, 0.8, 0.7, 0.5, 0.2],
          x: [400, 100, 10, 0, 0],
          y: [-50, 0, 0, 0, 30],
          opacity: [1, 1, 1, 1, 0]
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',

          repeatDelay: 1.5,
          duration: 5,
          times: [0, 0.2, 0.6, 0.9, 1]
        }}
      >
        <Die colors={theme.colors.dice} delay={6.8}/>
      </Box>
      <Box
        position="absolute"
        animate={{
          rotate:  [ -960, -720, -360,  -160,   50,   120,  180],
          scale:   [  0.4,  0.8,    1,   0.9,  0.8,   0.6,  0.3],
          x:       [ -100,    0,   90,   280,  320,   350,  420],
          y:       [ -190,  -60,   40,    30,   25,    30,   35],
          opacity: [    0,    1,    1,     1,    1,     1,    0]
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',

          repeatDelay: 2.5,
          delay: 1,
          duration: 6,
          times: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1]
        }}
      >
        <Die colors={theme.colors.dice} delay={8.5}/>
      </Box>

      <Box
        position="absolute"
        animate={{
          rotate:  [ -960, -720,   -180,      0,   90,   180,  220],
          scale:   [  0.4,  0.8,    0.9,    1.1,    1,   0.8,  0.3],
          x:       [  100,    0,    180,    220,  320,   370,  390],
          y:       [ -190,  -60,     40,     20,    0,    20,   50],
          opacity: [    0,    1,      1,      1,    1,     1,    0]
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',

          repeatDelay: 1,
          delay: 5,
          duration: 4,
          times: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1]
        }}
      >
        <Die colors={theme.colors.dice} delay={8.5}/>
      </Box>

    </Box>
  );
})

