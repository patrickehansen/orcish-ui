import styled from "styled-components";
import {
  InputProps
} from 'styled-system'

export type HiddenInputProps = InputProps & {
  /**
   * the form name
   */
  name: string;
  /**
   * the controlled value
   */
  value: any;
  /**
   * the element id
   */
  id: any;
};

export const HiddenInput = styled.input<HiddenInputProps>({
  display: 'none',
})
