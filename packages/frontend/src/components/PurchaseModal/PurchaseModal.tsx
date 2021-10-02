import React, { useState } from 'react';
import {
  Dialog,
  Paper,
  Tabs,
  Tab,
  Button,
  TextField,
  Slider,
} from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
// import {
// } from './styles';
import { Text } from '../Common/styles';
import BuyingTab from './components/BuyingTab';
import { Company } from '../../types/company';
// import { useAppDispatch, useAppSelector } from '../../store/hooks';

interface PurchaseModalProps {
  open: boolean;
  onClose: () => void;
  company: Company;
}

const PurchaseModal = (props: PurchaseModalProps) => {
  const [selectedTab, setSelectedTab] = useState('0');
  const handleChange = (_event: any, newValue: number) => {
    setSelectedTab(String(newValue));
  };

  const onClose = () => {
    props.onClose();
    setSelectedTab('0');
  };

  return (
    <Dialog
      open={props.open}
    >
      <Paper>
        <TabContext value={selectedTab}>
          <Tabs
            value={Number(selectedTab)}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Buy" />
            <Tab label="Sell" />
          </Tabs>

          <TabPanel value="0">
            <Text style={{ fontSize: 22, marginBottom: 12 }}>Buying {props.company.ticker}</Text>
            <BuyingTab
              company={props.company}
              onClose={onClose}
              buyingMode
            />
          </TabPanel>
          <TabPanel value="1">
            <Text style={{ fontSize: 22, marginBottom: 12 }}>Selling {props.company.ticker}</Text>
            <BuyingTab
              company={props.company}
              onClose={onClose}
              buyingMode={false}
            />
          </TabPanel>
        </TabContext>
      </Paper>
    </Dialog>
  );
};

export default React.memo(PurchaseModal);
