import React from 'react';
import { ThemeProvider} from 'styled-components';
import { defaultTheme } from '@tiskahar/orcish.constants';
import { ColorBubble } from '@tiskahar/orcish.visualization.color-bubble';
import { Flex } from '@tiskahar/orcish.containers.flex';
import { Box } from '@tiskahar/orcish.containers.box';
import * as Headings from '@tiskahar/orcish.typography.heading';
import * as Paragraph from '@tiskahar/orcish.typography.paragraph';
import { Label } from '@tiskahar/orcish.typography.label';

export function Colors() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Flex flexDirection="column">
        {
          Object.entries(defaultTheme.colors).reduce((a, [key, value]) => {
            console.log(key, value)
            if (Array.isArray(value)) {
              a.push(...value.map((v,i) => (
                <ColorBubble color={v} label={`${key} ${i+1}`} />
              )))
            } else {
              a.push(<ColorBubble color={value} label={key}/>)
            }

            return a;
          }, [])
        }
      </Flex>
    </ThemeProvider>
  )
}

export function FontSizes() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Flex flexDirection="column">
        <Headings.H1>Heading 1</Headings.H1>
        <Headings.H2>Heading 2</Headings.H2>
        <Headings.H3>Heading 3</Headings.H3>
        <Headings.H4>Heading 4</Headings.H4>
        <Headings.H5>Heading 5</Headings.H5>
        <Headings.H6>Heading 6</Headings.H6>

        <Paragraph.P1>Heading 1</Paragraph.P1>
        <Paragraph.P2>Paragraph 2</Paragraph.P2>
        <Paragraph.P3>Paragraph 3</Paragraph.P3>
        <Paragraph.P4>Paragraph 4</Paragraph.P4>
        <Paragraph.P5>Paragraph 5</Paragraph.P5>
        <Paragraph.P6>Paragraph 6</Paragraph.P6>
      </Flex>
    </ThemeProvider>
  )
}

export function Sizes() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Flex flexDirection="column">
        {
          Object.entries(defaultTheme.sizes).map(([key, value]) => {
            return (
              <Flex flexDirection="row" alignItems="center">
                <Box width={value} height={value} bg="black" />

                <Label>{key}</Label>
              </Flex>
            )
          }, [])
        }
      </Flex>
    </ThemeProvider>
  )
}

export function BoxShadows() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Flex flexDirection="column">
        {
          defaultTheme.shadows.map((value, index) => {
            return (
              <Box 
                width={value} 
                height={value} 
                bg="white" 
                style={{
                  boxShadow: value, 
                  margin: '1rem', 
                  borderRadius: '4px', 
                  padding: '3px 10px',
                }}
              > 
                <Label>{`Box shadow ${index + 1}`}</Label>
              </Box>
            )
          }, [])
        }
      </Flex>
    </ThemeProvider>
  )
}

export function BorderRadius() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Flex flexDirection="column">
        {
          Object.entries(defaultTheme.borderRadius).map(([key, value]) => {
            return (
              <Box 
                bg={defaultTheme.colors.secondary[1]}
                style={{
                  boxShadow: '-1px 0px 13px black', 
                  margin: '1rem', 
                  borderRadius: value, 
                  padding: '3px 10px',
                  textAlign: 'center',
                }}
              > 
                <Label>{`Border Radius ${key}`}</Label>
              </Box>
            )
          })
        }
      </Flex>
    </ThemeProvider>
  )
}