import React, { useMemo, useState } from 'react';
import { last } from 'lodash';
import {
  Button,
  TextField,
  Slider,
} from '@material-ui/core';
import {
  InputContainer,
  ActionContainer,
} from './styles';
import { Text } from '../../../Common/styles';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectUserState, buyStock, sellStock } from '../../../../reducers/user';
import type { Company } from '../../../../types/company';
import type { Purchase } from '../../../../types/user';

interface BuyingTabProps {
  company: Company;
  onClose: () => void;
  buyingMode: boolean;
}

const BuyingTab = (props: BuyingTabProps) => {
  const [amount, setAmount] = useState(0);

  const userState = useAppSelector(selectUserState);
  const dispatch = useAppDispatch();

  const maxAmount = useMemo(() => {
    if (props.buyingMode) return (Math.floor(Math.floor(userState.money / (last(props.company.stock_price)!)) / 100) * 100);
    return userState.stocks.find((stock) => stock.ticker === props.company.ticker)?.amount;
  }, [amount]);

  const worth = useMemo(() => {
    return amount * (last(props.company.stock_price)!);
  }, [amount]);

  const handleConfirm = () => {
    const payload: Purchase = {
      worth,
      stock: {
        name: props.company.name,
        ticker: props.company.ticker,
        amount,
      },
    };
    if (props.buyingMode) dispatch(buyStock(payload));
    else dispatch(sellStock(payload));
    props.onClose();
  };

  return (
    <>
      <InputContainer container>
        <TextField
          value={amount}
          style={{ width: 64 }}
          inputProps={{
            step: 100,
            min: 0,
            max: maxAmount,
          }}
          onChange={(e) => setAmount(Number(e.target.value))}
          id="stock-amount"
          label="Amount"
          type="number"
        />

        <Text style={{ alignSelf: 'flex-end', marginBottom: 6 }}>worths ${worth}</Text>
      </InputContainer>

      <Slider
        defaultValue={0}
        value={amount}
        onChange={(_e, value) => setAmount(value as number)}
        marks
        step={100}
        min={0}
        max={maxAmount}
        valueLabelDisplay="auto"
      />

      <ActionContainer container>
        <Button
          onClick={() => handleConfirm()}
          disabled={amount === 0}
          variant="contained"
          color="primary"
        >
          Confirm
        </Button>
        <Button
          onClick={() => {
            props.onClose();
          }}
          variant="contained"
          color="primary"
        >
          Cancel
        </Button>
      </ActionContainer>
    </>
  );
};

export default React.memo(BuyingTab);
