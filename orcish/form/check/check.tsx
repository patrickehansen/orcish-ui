import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled, { withTheme } from 'styled-components';
import { ThemeProps, FormProps } from '@tiskahar/orcish.constants';
import { HiddenInput } from '@tiskahar/orcish.form.hidden-input';
import { Label } from '@tiskahar/orcish.typography.label';
import { Flex } from '@tiskahar/orcish.containers.flex';

export type CheckProps = ThemeProps & FormProps & {
 /**
   * text to be rendered as the label
   */
  label: string;

  onUpdate?: (checked: boolean)=>any;

  checked?: boolean;
};

const Svg = styled(motion.svg)({
  transform: 'scale(0.7)',
  position: 'relative',
  top: '-6px',
  left: '-10px',
  width: '50px',
  height: '45px',
})

const TextLabel = styled(Label)({
  marginLeft: ({theme}) => theme.sizes.S,
})

const CheckBox = styled(motion.label)({
	cursor: 'pointer',

	width: '30px',
	height: '30px',

	borderRadius: ({theme}) => theme.borderRadius.fullStandard,
	boxShadow: ({theme}) => theme.shadows[3],

  // TODO :: Theme this out
	background: 'linear-gradient(top, #222 0%, #45484d 100%)',
  // TODO :: Theme this out
	filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#222', endColorstr='#45484d',GradientType=0 )`,

  ':hover::after' : {
    filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
    opacity: 0.3,
  }
})

const FlexRow = styled(Flex)({
  flexDirection:"row",
  alignItems:"center",
})

export const Check = withTheme(function Check({ label, defaultValue, required, onUpdate, ...props }: CheckProps) {
  const [checked, setChecked] = useState(defaultValue);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  const useStateChecked = props.checked === undefined;
  if (defaultValue !== undefined && props.checked !== undefined) {
    console.warn('Passing in both defaultValue and checked into the Check component is not supported.')
  }

  const tickVariants = {
    pressed: (isChecked: boolean) => ({ pathLength: isChecked ? 0.85 : 0.2 }),
    checked: { pathLength: 1 },
    unchecked: { pathLength: 0 }
  };

  function onChecked(e) {
    e.preventDefault();

    if (useStateChecked) setChecked(!checked);

    if (!onUpdate) return;
    onUpdate(useStateChecked ? !checked : !props.checked);
  }

  const finalChecked = useStateChecked ? checked : props.checked;

  return (
    <FlexRow >
      <HiddenInput 
        value={finalChecked}
        id="input"
        {...props}
      />
      <CheckBox 
        as={motion.label}
        htmlFor="input" 
        onClick={onChecked}
      >
        <Svg
          initial={finalChecked}
          animate={finalChecked ? "checked" : "unchecked"}
          whileHover="hover"
          whileTap="pressed"
        >
          <motion.path
            d="M 0 10.72 L 10.72 21.4475 L 28.5 0"
            transform="translate(10 10)"
            fill="transparent"
            strokeWidth="8"
            stroke={props.theme.colors.primary[0]}
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={tickVariants}
            style={{ pathLength, opacity, pointerEvents: 'none' }}
            custom={finalChecked}
          />
        </Svg>
      </CheckBox>
      <TextLabel>
        {label} {required && '*'}
      </TextLabel>
    </FlexRow>
  );
});
