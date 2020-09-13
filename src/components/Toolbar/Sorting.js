import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faPercentage,
  faWallet,
  faFlask,
  faCalendarDay,
  faCalendarWeek,
} from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  & > h4 {
    margin: 0;
    margin-bottom: 5px;
  }
`;

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 5px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(6, auto);
    grid-gap: 10px;
  }
`;

const FilterButton = styled.button`
  padding: 10px;
  border: 0;
  outline: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ active }) => (active ? '#ff9800' : 'black')};
  &:hover,
  &:focus {
    color: #ff9800;
  }
`;

export const sortingKeys = {
  $: 'value',
  '%': 'ownershipPercentage',
  wallets: 'walletCount',
  aggregate: 'aggregate',
  '24h': 'balanceChange',
  '7d': 'balanceChange',
};

function Sorting() {
  const sorting = useSelector(({ sorting }) => sorting);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <h4>Sorting</h4>
      <ButtonsWrapper>
        <FilterButton
          title="Sort by total $ value"
          active={sorting === '$'}
          onClick={() => dispatch({ type: 'SET_SORTING', payload: '$' })}
        >
          <FontAwesomeIcon icon={faDollarSign} />
        </FilterButton>
        <FilterButton
          title="Sort by market cap % ownership"
          active={sorting === '%'}
          onClick={() => dispatch({ type: 'SET_SORTING', payload: '%' })}
        >
          <FontAwesomeIcon icon={faPercentage} />
        </FilterButton>
        <FilterButton
          title="Sort by wallet count"
          active={sorting === 'wallets'}
          onClick={() => dispatch({ type: 'SET_SORTING', payload: 'wallets' })}
        >
          <FontAwesomeIcon icon={faWallet} />
        </FilterButton>
        <FilterButton
          title="Sort by aggregated value and wallet count"
          active={sorting === 'aggregate'}
          onClick={() =>
            dispatch({ type: 'SET_SORTING', payload: 'aggregate' })
          }
        >
          <FontAwesomeIcon icon={faFlask} />
        </FilterButton>
        <FilterButton
          title="Sort by percentage holdings change 24h"
          active={sorting === '24h'}
          onClick={() => dispatch({ type: 'SET_SORTING', payload: '24h' })}
        >
          <FontAwesomeIcon icon={faCalendarDay} />
        </FilterButton>
        <FilterButton
          title="Sort by percentage holdings change 7d"
          active={sorting === '7d'}
          onClick={() => dispatch({ type: 'SET_SORTING', payload: '7d' })}
        >
          <FontAwesomeIcon icon={faCalendarWeek} />
        </FilterButton>
      </ButtonsWrapper>
    </Wrapper>
  );
}

export default Sorting;