import React from 'react';
import styled from 'styled-components';
import { Box } from '@tiskahar/orcish.containers.box';
import { Flex } from '@tiskahar/orcish.containers.flex';
import { ThemeProps, constants } from '@tiskahar/orcish.constants';
import { H2 } from '@tiskahar/orcish.typography.heading';

export type AvatarProps = ThemeProps & {
  /**
   * url for the avatar image
   */
  imgUrl?: string;
  /**
   * name to display under the image
   */
  name?: string;
  /**
   * Size to render the avatar
   */
  size?: string;
};

const Heading = styled(H2)({
  textTransform: 'uppercase',
  margin: '0.5rem auto',
  textAlign: 'center',
})

const ImgContainer = styled(Flex)({
  flexShrink: 0,
  alignItems: 'center',
  position: 'relative',
  padding: '5px',
  width: (props) => constants.avatarSizes[props.size],
  height: (props) => constants.avatarSizes[props.size],
})

const Img = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: (props) => props.theme.borderRadius.circle,
  boxShadow: (props) => props.size !== 'XS' ? props.theme.shadows[1] : 'none',
})

export function Avatar({ imgUrl, name, size }: AvatarProps) {
  return (
    <Flex flexDirection="column" alignItems="center">
      <ImgContainer size={size}>
        <Img
          src={imgUrl}
          size={size}
        />
      </ImgContainer>
      {
        size !== 'XS' && 
        <Heading>
          {name}
        </Heading>
      }
    </Flex>
  );
}
