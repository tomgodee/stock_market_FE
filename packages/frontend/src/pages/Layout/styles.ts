import styled from 'styled-components';
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { prussianBlue, white } from '../../themes/colors';

// interface LoginItemGridProps {
//   $flex?: boolean;
//   $directionColumn?: boolean;
// }

export const HeaderAccountCircle = styled(AccountCircle)`
`;

export const Header = styled(AppBar)`
  background: ${prussianBlue};
  position: static;
  box-shadow: 0 2px 21px rgb(0 0 0 / 60%);
`;

export const DashboardButton = styled(Button)`
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
`;

export const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 2px solid ${prussianBlue};
  border-top: 0px;
  border-left: 0px;
`;

export const SideNavItem = styled(Button)`
  padding: 12px;
  width: 240px;
`;

export const DashboardDrawer = styled(Drawer)`
  position: relative;
  & > .MuiDrawer-paper {
    top: 65px;
  }
`;

export const HeaderMenu = styled(Menu)`
`;

export const HeaderMenuItem = styled(MenuItem)`
`;

export const HeaderMenuIcon = styled(MenuIcon)`
  color: ${white};
`;

export const HeaderIconButton = styled(IconButton)`
  color: ${white};
`;

export const HeaderToolbar = styled(Toolbar)`
`;

export const HeaderTypography = styled(Typography)`
`;

export const HeaderProfileContainer = styled.div`
  margin-left: auto;
`;
