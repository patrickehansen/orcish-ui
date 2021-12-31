import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Strong = styled(motion.strong)({
  color: ({theme}) => theme.colors.text[0],
  fontWeight: 700
})
