import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { withTheme } from 'styled-components';
import { ThemeProps } from '@tiskahar/orcish.constants';
import { Box } from '@tiskahar/orcish.containers.box';

export type ExpandableProps = ThemeProps & {
  /**
   * a node to be rendered in the special component.
   */
  children: ReactNode;

  /**
   * title to display in the top level button
   */
  title: string;
};

const Title = styled.div({
  overflowWrap: 'break-word',
  textAlign: 'center',
  margin: 'auto',
})

const TitleContainer = styled(motion.button)({
  width: '100%',
  
  padding: '0.335rem 0.5rem',
  margin: 0,

  minWidth: '12rem',

  borderRadius: ({theme}) => theme.borderRadius.fullStandard,
  minHeight: ({theme}) => theme.sizes.XML,
  backgroundColor: ({theme}) => theme.colors.grays[0],
  fontSize: ({theme}) => theme.fontSizes.h6,
  border: 'none',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const ChildContainer = styled(motion.div)({
  padding: '0 10px',
  overflow: 'hidden',
  boxSizing: 'border-box',
  border: 'none',
  appearance: 'none',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: ({theme}) => theme.sizes.SS,

})

export const Expandable = withTheme(function Expandable({ children, title, ...props }: ExpandableProps) {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);

  return (
    <Box
      padding={props.theme.sizes.M}
    > 
      <TitleContainer
        type="button"
        onClick={() => setOpen(!open)}
        onBlur={() => {setOpen(false); setFocus(false)}}
        onFocus={() => setFocus(true)}
        animate={{
          boxShadow: focus ? props.theme.shadows[4] : props.theme.shadows[0]
        }}
        whileHover={{scale: 0.98}} 
        whileTap={{scale: 1.02}} 
      >
        <Title>{title}</Title>
      </TitleContainer>
      <AnimatePresence>
        {
          open && (
            <ChildContainer
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 1 }}
            >
              {children}
            </ChildContainer>
          )
        }
      </AnimatePresence>
    </Box>
  );
});

