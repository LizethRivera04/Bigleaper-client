import React, { Fragment } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import ViewTitle from '../components/ViewTitle/ViewTitle';
import EFIdManageActorsEdit from '../components/EFIdManageActorsEdit/EFIdManageActorsEdit'
import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;
const useStyles = makeStyles({
  container: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    display: 'flex',
    flexWrap: 'wrap',
  },
});
const ExportFolioCreat = () => {
    const classes = useStyles();
    return ( 
      <Fragment>
        <Menu />
        <Header />
        <ViewTitle title={'Export Folios'} user={'Folio Creation / Manage Actors'}/>
        <div className={classes.container}>
            <EFIdManageActorsEdit />
        </div>
    </Fragment>
     );
}
 
export default ExportFolioCreat;