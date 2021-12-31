import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { ThemeProps } from '@tiskahar/orcish.constants';
import { Flex } from '@tiskahar/orcish.containers.flex';
import { P1 } from '@tiskahar/orcish.typography.paragraph';

export type ButtonProps = ThemeProps & {
  /**
   * a text to be rendered in the button.
   */
  text?: string;

  /**
   * event to fire when button is clicked
   */
  onClick: (event: any) => any;

  /**
   * which type of button to render (optional)
   * primary, invert, red
   */
  variant?: string;

   /**
   * Icon to render in the button
   */
  icon?: IconDefinition;
};

const backgroundColors = {
  '': ({theme}) => theme.colors.primary[1],
  undefined: ({theme}) => theme.colors.primary[1],
  primary: ({theme}) => theme.colors.primary[1],
  invert: ({theme}) => theme.colors.secondary[1],
  red: ({theme}) => theme.colors.red,
  neutral: ({theme}) => theme.colors.primary[2],
}

const textColors = {
  '': ({theme}) => theme.colors.secondary[1],
  undefined: ({theme}) => theme.colors.secondary[1],
  primary: ({theme}) => theme.colors.secondary[1],
  invert: ({theme}) => theme.colors.primary[2],
  red: ({theme}) => theme.colors.secondary[1],
  neutral: ({theme}) => theme.colors.primary[1],
}

const NativeButton = styled(motion.button)({
  padding: '8px 12px',
  border: 'none',
  borderRadius: ({theme}) => theme.borderRadius.fullStandard,
  backgroundColor: (props) => backgroundColors[props.variant](props),
  color: (props) => textColors[props.variant](props),
  fontWeight: 600,
  textTransform: 'uppercase',
  cursor: 'pointer',
  boxShadow: ({theme}) => theme.shadows[0],
  position: 'relative',
  userSelect: 'none',
  transition: `
    box-shadow 400ms,
    text-shadow 200ms
  `,

  '&:hover': {
    boxShadow: ({theme}) => theme.shadows[2],
    textShadow: ({theme}) => theme.shadows[1],
  },
})

const ContentFlex = styled(Flex)({
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: ({theme}) => theme.sizes.M,
})

const P = styled(P1)({
  margin: 0,
})

export function Button({ text, icon, onClick, ...props }: ButtonProps) {
  return (
    <NativeButton 
      onClick={onClick} 
      variant={props.variant}
      whileHover={{scale: 0.98}} 
      whileTap={{scale: 1.02}} 
      {...props}
    >
      <ContentFlex>
        { icon && <FontAwesomeIcon icon={icon} />}
        { text && <P>{text}</P>}
      </ContentFlex>
    </NativeButton>
  );
}
