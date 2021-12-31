import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ThemeProps, FormProps } from '@tiskahar/orcish.constants';
import { HiddenInput } from '@tiskahar/orcish.form.hidden-input';
import { Label } from '@tiskahar/orcish.typography.label';
import { Flex } from '@tiskahar/orcish.containers.flex';
import { Div } from '@tiskahar/orcish.containers.div';

export type RadioProps = ThemeProps & FormProps & {
 /**
   * text to be rendered as the label
   */
  label: string;
};

const Center = styled(Div)({
  borderRadius: ({theme}) => theme.borderRadius.circle,
  width: '22px',
  height: '22px',
  backgroundColor: ({theme}) => theme.colors.primary[0],
  zIndex: 3,
  position: 'relative',
  top: '4px',
  left: '4px',
  pointerEvents: 'none',
})

const TextLabel = styled(Label)({
  marginLeft: ({theme}) => theme.sizes.S,
})

const CircleBox = styled(Label)({
	cursor: 'pointer',
	width: '30px',
	height: '30px',

	borderRadius: ({theme}) => theme.borderRadius.circle,
	boxShadow: ({theme}) => theme.shadows[3],
  
  //TODO:: theme this out
	background: 'linear-gradient(top, #222 0%, #45484d 100%)',

  //TODO:: theme this out
	filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#222', endColorstr='#45484d',GradientType=0 )`,

  ':hover::after' : {
    filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
    opacity: 0.3,
  }
})

export function Radio({ label, defaultValue, required, ...props }: RadioProps) {
  const [checked, setChecked] = useState(defaultValue);

  return (
    <Flex flexDirect="row" alignItems="center">
      <HiddenInput 
        value={checked}
        id="input"
        {...props}
      />
      <CircleBox 
        htmlFor="input" 
        onClick={() => setChecked(!checked)}
      >
        <Center
          animate={ checked ? {
            opacity: 1,
          } : {
            opacity: 0,
          }}
          transition={{
            duration: 0.25
          }}
        />
      </CircleBox>
      <TextLabel
        as={motion.label}
      >
        {label} {required && '*'}
      </TextLabel>
    </Flex>
  );
}
