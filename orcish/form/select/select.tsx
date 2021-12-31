import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { withTheme } from 'styled-components';
import { ThemeProps, FormProps } from '@tiskahar/orcish.constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@tiskahar/orcish.containers.box';
import { HiddenInput } from '@tiskahar/orcish.form.hidden-input';
import { H6 } from '@tiskahar/orcish.typography.heading';

export type SelectOption = {
  /*
  * Label to display for the option
  */
  label: string;

  /*
  * Value to pass back to the form
  */
  value: any;
}

export type SelectProps = ThemeProps & FormProps & {
  /**
   * options to choose from.
   */
  options: Array<SelectOption>;
};

const Title = styled(H6)({
  overflowWrap: 'break-word'
})

const TitleContainer = styled(motion.button)({
  width: '100%',
  minWidth: '12rem',

  padding: '0.335rem 0.5rem',
  margin: 0,

  borderRadius: ({theme}) => theme.borderRadius.fullStandard,
  minHeight: ({theme}) => theme.sizes.XML,
  backgroundColor: ({theme}) => theme.colors.background[1],

  border: 'none',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const Icon = styled(Box)({
  alignSelf: 'flex-end',
  right: '20px',
  width: '20px',
  height: '20px'
});

const FlexUL = styled(motion.ul)({
  display: 'flex',
  listStyleType: 'none',
})

const OptionContainer = styled(FlexUL)({
  
  backgroundColor: ({theme}) => theme.colors.white,
  boxShadow: ({theme}) => theme.shadows[0],
  borderRadius: ({theme}) => theme.borderRadius.bottomStandard,
  padding: '0 10px',
  overflow: 'hidden',
  border: 'none',
  appearance: 'none',
  position: 'relative',
  
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 0,
})

const Option = styled(motion.li)({
  height: 'auto',
  width: '100%',

  overflowWrap: 'break-word',
  userSelect: 'none',
  cursor: 'pointer',

  borderBottomStyle: 'solid',

  backgroundColor: ({theme}) => theme.colors.white,
  borderBottomWidth: (props) => (props.noBorder ? "0px" : "1px"),
  borderBottomColor: (props) => (props.noBorder ? "none" : props.theme.colors.grays[0]),
  padding: ({theme}) => theme.sizes.SS,
})

export const Select = withTheme(function LocalSelect({ name, options, defaultValue, ...props }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  return (
    <Box
      padding={props.theme.sizes.M}
    >
      <HiddenInput name={name} value={selected}/>
      <TitleContainer
        type="button"
        onClick={() => setOpen(!open)}
        onBlur={() => {setOpen(false); setFocus(false)}}
        onFocus={() => setFocus(true)}
        animate={{
          boxShadow: focus ? props.theme.shadows[4] : props.theme.shadows[0]
        }}
      >
        <Title>{selected ? selected.value : ''}</Title>
        <Icon
          animate={{
            rotate: open ? -90 : 0,
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Icon>
      </TitleContainer>
      <AnimatePresence>
        {open && (
          <OptionContainer
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 1 }}
          >
            {
            options.map((v, i) => (
              <Option 
                value={v.value} 
                key={i}
                initial={{
                  backgroundColor: "#ffffff"
                }}
                whileTap={{ backgroundColor: props.theme.colors.grays[0] }}
                whileHover={{ backgroundColor: props.theme.colors.grays[0] }}
                onClick={() => {
                  setSelected(v);
                }}
              >
                {v.label}
              </Option>
            ))
          }
          </OptionContainer>
        )}
      </AnimatePresence>
    </Box>
  );
})
