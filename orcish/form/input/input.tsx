import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import styled from 'styled-components';
import { ThemeProps, FormProps } from '@tiskahar/orcish.constants';
import { Label } from '@tiskahar/orcish.typography.label';
import { Div } from '@tiskahar/orcish.containers.div';

export type InputProps = ThemeProps & FormProps & {
  /**
   * text to be rendered as the label
   */
  label: string;
  /**
   * input type : string, number, etc
   */
  type?: string;
  /**
   * for numeric inputs, what is the step size?
   */
  step?: number;
};

const StyledInput = styled.input({
  border: 'none',
  '&:focus-visible': {
    outline: 'none'
  },
})

const Container = styled(Div)({
  position: 'relative'
})

const BaseUnderline = styled(Div)({
  width:"100%",
  backgroundColor: ({theme}) => theme.colors.grays[0],
})

const Underlined = styled(Div)({
  height: '2px',
  backgroundColor: ({theme}) => theme.colors.primary[0],
  position: 'absolute',
})

const LocalLabel = styled(Label)({
  cursor: 'text',
  position: 'absolute',
  left: ({theme}) => theme.sizes.S,
  zIndex: 2,
})

export function Input({ label, defaultValue, required, type = "string", ...props }: InputProps) {
  const [ open, setOpen ] = useState(false);
  const [ value, setValue ] = useState(defaultValue)

  return (
    <LayoutGroup>
      <Container 
        onClick={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        <LocalLabel
          animate={open || value ? {
              y: '-15px',
              x: '-10px',
              scale: 0.85,
            } : {
              scale: 1,
              y:'2px',
            }}
          transition={{
            duration: 0.15,
          }}
        >
          {label} {required && '*'}
        </LocalLabel>
        <Container>
          <StyledInput 
            value={value}
            type={type}
            {...props}
            onInput={(e) => setValue(e.target.value)}
          />
        </Container>
        <BaseUnderline />
        <Underlined 
          initial={{
            left: '50%',
            right: '50%',
            width: 0,
          }}
          animate={ open ? {
            left: 0,
            right: 0,
            width: '100%',
          } : {
            left: '50%',
            right: '50%',
            width: 0,
          }}
          transition={{
            duration: 0.25
          }}
        />
      </Container>
    </LayoutGroup>
  );
}
