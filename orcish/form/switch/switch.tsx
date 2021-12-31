import React, { useState } from 'react';
import { LayoutGroup } from 'framer-motion';
import styled from 'styled-components';
import { ThemeProps, FormProps } from '@tiskahar/orcish.constants';
import { Div } from '@tiskahar/orcish.containers.div';

export type SwitchProps = ThemeProps & FormProps & {
  /*
  * onChange handler
  */
  onChange?: (checked: boolean)=> any;
};

const StyledDiv = styled(Div)({
  height: '18px',
  width: '35px',
  cursor: 'pointer',
  padding: '2px',

  borderRadius: ({theme}) => theme.borderRadius.fullRound,
  backgroundColor: ({theme}) => theme.colors.grays[0],
  boxShadow: ({theme}) => theme.shadows[0],
})

const ButtonBox = styled(Div)({
  height: '18px',
  width: '18px',
  pointerEvents: 'none',
  position: 'relative',
  
  borderRadius: ({theme}) => theme.borderRadius.fullStandard,
  backgroundColor: ({theme}) => theme.colors.primary[0],
})

export function Switch({ defaultValue, onChange }: SwitchProps) {
  const [ checked, setChecked ] = useState(defaultValue);
  const toggle = () => setChecked(!checked);

  return (
    <LayoutGroup>
      <StyledDiv
        onClick={() => {
          toggle();
          if (!onChange) return;
          onChange(!checked);
        }}
      >
        <ButtonBox
          animate={{
            left: checked ? "50%" : "3%",
          }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30
          }}
        />
      </StyledDiv>
    </LayoutGroup>
  );
}
