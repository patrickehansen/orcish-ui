import styled from 'styled-components';
import { Box } from '@tiskahar/orcish.containers.box';

export const Card = styled(Box)({
  padding: ({theme}) => theme.sizes.MM,
  borderRadius: ({theme}) => theme.borderRadius.fullStandard,
  boxShadow: ({theme}) => theme.shadows[0],
  backgroundColor: ({theme}) => theme.colors.background[0],
})
