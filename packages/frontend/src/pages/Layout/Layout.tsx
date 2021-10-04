import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Switch, Route, Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useAppSelector } from '../../store/hooks';
import { selectUserState, verifyToken } from '../../reducers/user';
import {
  LOGIN_PATH, MARKET_PATH, PROFILE_PATH, SECTOR_PATH,
  SECTOR_DETAILS_PATH, COMPANY_DETAILS_PATH, COMPANY_PATH,
} from '../../config/paths';
import { ACCESS_TOKEN } from '../../config/localStorage';
import Market from '../Market';
import Profile from '../Profile';
import Sector from '../Sector';
import SectorDetails from '../SectorDetails';
import Company from '../Company';
import CompanyDetails from '../CompanyDetails';
import PrivateRoute from '../../components/PrivateRoute';
import {
  HeaderAccountCircle as AccountCircle,
  Header,
  FlexContainer,
  ContentContainer,
  HeaderProfileContainer,
  HeaderToolbar as Toolbar,
  HeaderIconButton as IconButton,
  HeaderMenu,
  HeaderMenuItem,
  NextButton,
} from './styles';

const Layout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useAppSelector(selectUserState);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const goToProfile = () => {
    history.push(`${PROFILE_PATH}/${user.id}`);
  };

  const logout = () => {
    setAnchorEl(null);
    localStorage.removeItem(ACCESS_TOKEN);
    history.push(LOGIN_PATH);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (!accessToken) {
      history.push(LOGIN_PATH);
    } else {
      dispatch(verifyToken());
    }
  }, []);

  return (
    <>
      <Header>
        <Toolbar>
          <HeaderProfileContainer>
            <IconButton
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
            <HeaderMenu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={isMenuOpen}
              onClose={handleProfileMenuClose}
            >
              <HeaderMenuItem onClick={goToProfile}>My profile</HeaderMenuItem>
              <HeaderMenuItem onClick={logout}>Log out</HeaderMenuItem>
            </HeaderMenu>

          </HeaderProfileContainer>
          <NextButton
            variant="contained"
            color="secondary"
          >
            Next quarter
          </NextButton>
        </Toolbar>
      </Header>

      <FlexContainer>
        <ContentContainer>
          <Switch>
            <PrivateRoute path={`${PROFILE_PATH}/:id`} component={Profile} />
            <PrivateRoute path={`${SECTOR_DETAILS_PATH}`} component={SectorDetails} />
            <PrivateRoute path={`${SECTOR_PATH}`} component={Sector} />
            <PrivateRoute path={`${COMPANY_DETAILS_PATH}`} component={CompanyDetails} />
            <PrivateRoute path={`${COMPANY_PATH}`} component={Company} />
            <PrivateRoute path={`${MARKET_PATH}`} component={Market} />
            <Route path="/*">
              <Redirect to={MARKET_PATH} />
            </Route>
          </Switch>
        </ContentContainer>

      </FlexContainer>
    </>
  );
};

export default React.memo(Layout);
