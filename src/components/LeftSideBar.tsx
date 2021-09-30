import { Container, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Home } from '@mui/icons-material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    color: 'white',
    paddingTop: theme.spacing(10),
    backgroundColor: '#001529' /* theme.palette.primary.main, */,
    position: 'sticky',
    top: 0,
    [theme.breakpoints.up('sm')]: {
      /* backgroundColor: 'white',
        color: '#555', */
      border: '1px solid #ece7e7',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
      cursor: 'pointer',
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const LeftSideBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <LightbulbOutlinedIcon className={classes.icon} />
        <Typography className={classes.text}>News</Typography>
      </div>
    </Container>
  );
};

export default LeftSideBar;
