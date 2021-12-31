import styled from 'styled-components';
import { FormProps } from '@tiskahar/orcish.constants';

export type TextareaProps = FormProps & {

};

export const TextArea = styled.textarea<TextareaProps>({
  border: 'none',
  outline: 'none',
  padding: ({theme}) => theme.sizes.S,
  borderRadius: ({theme}) => theme.borderRadius.fullStandard,
  boxShadow: ({theme}) => theme.shadows[2]
})
