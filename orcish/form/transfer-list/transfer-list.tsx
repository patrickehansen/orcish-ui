import React, { useState } from 'react';
import { v4 } from 'uuid';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { Grid } from '@tiskahar/orcish.containers.grid';
import { Flex } from '@tiskahar/orcish.containers.flex';
import { Box } from '@tiskahar/orcish.containers.box';
import { Button } from '@tiskahar/orcish.ui.button';
import { Card } from '@tiskahar/orcish.containers.card';
import { H5 } from '@tiskahar/orcish.typography.heading';
import { faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { Check } from '@tiskahar/orcish.form.check';
import { dictionary } from '@tiskahar/orcish.constants';

export type TransferrableList = {
  title: string;

  entries: Listable[];
}

export type Listable = object & {
  id?: string;
  label: string;
  checked?: boolean;
  value: any;
}

export type TransferListProps = {
  /**
   * a node to be rendered in the special component.
   */
  left: TransferrableList;

  right: TransferrableList;

  onUpdate: (left: any[], right: any[]) => void
};

const ItemBox = styled(Box)({
  padding: '4px',
})

const ItemContainer = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: ({theme}) => theme.sizes.XS,
  minHeight: '15rem',
  minWidth: '10rem',
})

const ButtonBox = styled(Box)({
  margin: '0.25rem 1rem',
  padding: '6px',
})

const H = styled(H5)({
  textAlign: 'center',
  margin: 'auto',
  marginBottom: ({theme}) => theme.sizes.S,
  textTransform: 'uppercase',
})

const GridContainer = styled(Grid)({
  gridTemplateColumns:"min-content 8rem min-content",
  padding:({theme}) => theme.sizes.MM,
})

type Listables = Array<Array<Listable>>;

function List({title, entries, onChecked}) {
  return (
    <ItemBox>
      <H>{title}</H>
      <ItemContainer>
        {
          Object.values(entries).map((v: Listable, i) => (
            <AnimatePresence>
              <Check 
                label={v.label} 
                key={i}
                checked={v.checked}
                onUpdate={() => onChecked(v.id)}
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.25 }}
              />  
            </AnimatePresence>
          ))
        }
      </ItemContainer>
    </ItemBox>
  )
}

export function TransferList({ left, right, onUpdate }: TransferListProps) {
  const [ state, setState ] = useState({
    leftList: left.entries.reduce((a,v) => {
      const idd = {
        ...v,
        id: v.id ?? v4(),
        checked: v.checked ?? false,
      }

      a[idd.id] = idd;
      return a;      
    }, {}),
    rightList: right.entries.reduce((a,v) => {
      const idd = {
        ...v,
        id: v.id ?? v4(),
        checked: v.checked ?? false,
      }

      a[idd.id] = idd;
      return a;      
    }, {}),
  });

  function onChecked(side, id) {
    const newState = {...state};
    newState[side? 'rightList' : 'leftList'][id].checked = !newState[side? 'rightList' : 'leftList'][id].checked;

    setState(newState);
  }

  function moveChecked(direction: string): void {
    if (direction === 'left') { // to left
      const [move, stay]  = Object.values(state.rightList).reduce((a: Listables, v :Listable) => {
        // branchless if checked move, else stay
        a[Number(!v.checked)].push(v);

        return a;
      }, [[], []]) as Listables;

      move.concat(stay).forEach(v => v.checked = false);
      const newLeftList = Object.assign({}, state.leftList, dictionary(move, 'id'));
      const newRightList = dictionary(stay, 'id');

      onUpdate(
        Object.values(newLeftList).map((v: Listable) => v.value),
        Object.values(newRightList).map((v: Listable) => v.value),
      );

      setState({
        leftList: newLeftList,
        rightList: newRightList,
      });
    } else {
      const [move, stay] = Object.values(state.leftList).reduce((a, v :Listable) => {
        // branchless if checked move, else stay
        a[Number(!v.checked)].push(v);

        return a;
      }, [[], []]) as Listables;

      move.concat(stay).forEach(v => v.checked = false);

      const newRightList = Object.assign({}, state.rightList, dictionary(move, 'id'));
      const newLeftList = dictionary(stay, 'id');

      onUpdate(
        Object.values(newLeftList).map((v: Listable) => v.value),
        Object.values(newRightList).map((v: Listable) => v.value),
      );

      setState({
        leftList: newLeftList,
        rightList: newRightList,
      });
    }
  }

  function moveAll(direction: string): void {
    const newState = {...state};

    if (direction === 'left') { // to left
      newState.rightList = {};
      newState.leftList = Object.assign({}, state.leftList, state.rightList);

      Object.values(newState.leftList).forEach((v :Listable) => v.checked = false);
    } else {
      newState.leftList = {};
      newState.rightList = Object.assign({}, state.leftList, state.rightList);

      Object.values(newState.rightList).forEach((v :Listable) => v.checked = false);
    }

    onUpdate(
      Object.values(newState.leftList).map((v: Listable) => v.value),
      Object.values(newState.rightList).map((v: Listable) => v.value),
    );

    setState(newState);
  }

  return (
    <GridContainer> 
      <List 
        key={'left'}
        title={left.title}
        entries={state.leftList}
        onChecked={(id) => onChecked(0, id)}
      />
      
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <ButtonBox>
          <Button icon={faAngleDoubleRight} variant="neutral" onClick={() => moveAll('right')}/>
        </ButtonBox>
        <ButtonBox>
          <Button icon={faAngleRight} variant="neutral" onClick={() => moveChecked('right')}/>
        </ButtonBox>
        
        
        <ButtonBox>
          <Button icon={faAngleLeft} variant="neutral" onClick={() => moveChecked('left')}/>
        </ButtonBox>
        <ButtonBox>
          <Button icon={faAngleDoubleLeft} variant="neutral" onClick={() => moveAll('left')}/>
        </ButtonBox>
      </Flex>

      <List 
        key={'right'}
        title={right.title}
        entries={state.rightList}
        onChecked={(id) => onChecked(1, id)}
      />
    </GridContainer>
  );
}
