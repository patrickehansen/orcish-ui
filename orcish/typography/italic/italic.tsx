import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Italic = styled(motion.em)({
  color: ({theme}) => theme.colors.text[0],
})
