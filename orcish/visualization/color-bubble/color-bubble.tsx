import React from 'react';
import styled from 'styled-components';
import { Label } from '@tiskahar/orcish.typography.label';
import { ThemeProps } from '@tiskahar/orcish.constants';
import { Flex } from '@tiskahar/orcish.containers.flex';

export type ColorBubbleProps = ThemeProps & {
  /**
   * the color to show in the bubble
   */
  color: string;

  /**
   * the label so we know what color this is
   */
  label: string;
};

const Bubble = styled.div({
  width: '30px',
  height: '30px',
  border: 'solid 1px black',
  borderRadius: ({theme}) => theme.borderRadius.circle,
  backgroundColor: (props) => props.color,
})

const Container = styled(Flex)({
  flexDirection: 'row',
  alignItems: 'center',
})

export function ColorBubble({ color, label }: ColorBubbleProps) {
  return (
    <Container>
      <Bubble color={color} />
      <Label mb="4px">
        {label}
      </Label>
    </Container>
  );
}
