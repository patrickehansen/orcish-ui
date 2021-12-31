import styled from 'styled-components';

export const H1 = styled.h1({
  userSelect: 'none',
  textTransform: 'uppercase',
  color: ({theme}) => theme.colors.text[0],
  fontSize: ({theme}) => theme.fontSizes.h1,
})

export const H2 = styled.h2({
  userSelect: 'none',
  color: ({theme}) => theme.colors.text[0],
  fontSize: ({theme}) => theme.fontSizes.h2,
})

export const H3 = styled.h3({
  userSelect: 'none',
  color: ({theme}) => theme.colors.text[0],
  fontSize: ({theme}) => theme.fontSizes.h3,
})

export const H4 = styled.h4({
  userSelect: 'none',
  color: ({theme}) => theme.colors.text[0],
  fontSize: ({theme}) => theme.fontSizes.h4,
})

export const H5 = styled.h5({
  userSelect: 'none',
  color: ({theme}) => theme.colors.text[0],
  fontSize: ({theme}) => theme.fontSizes.h5,
})

export const H6 = styled.h6({
  userSelect: 'none',
  color: ({theme}) => theme.colors.text[0],
  fontSize: ({theme}) => theme.fontSizes.h6,
})