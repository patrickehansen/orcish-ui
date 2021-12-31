import styled from 'styled-components';
import { P1 } from '@tiskahar/orcish.typography.paragraph';

export const Label = styled(P1)({
  pointerEvents: 'none',
  userSelect: 'none',
  marginLeft: ({theme}) => theme.sizes.S,
  color: ({theme}) => theme.colors.text[0],
})