import styled from 'styled-components';
import { motion } from 'framer-motion';

export const P = styled(motion.p)({
  color: ({theme}) => theme.colors.text[0],
})

export const P1 = styled(P)({
  fontSize: ({theme}) => theme.fontSizes.p1,
})

export const P2 = styled(P)({
  fontSize: ({theme}) => theme.fontSizes.p2,
})

export const P3 = styled(P)({
  fontSize: ({theme}) => theme.fontSizes.p3,
})

export const P4 = styled(P)({
  fontSize: ({theme}) => theme.fontSizes.p4,
})

export const P5 = styled(P)({
  fontSize: ({theme}) => theme.fontSizes.p5,
})

export const P6 = styled(P)({
  fontSize: ({theme}) => theme.fontSizes.p6,
})
