import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Typography, Button, Avatar, Toolbar } from '@material-ui/core';
import useStyles from './styles';
import jam from '../../images/jam.png';

const Navbar = () => {
    const classes = useStyles();

    const user = null;

    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Typography id = "logo" component={Link} to="/" className={classes.heading} variant="h2" align="center" style={{ color: 'red',fontFamily:'Verdana'}}>Jam</Typography>
            <img className={classes.image} src={jam} alt="jam" height="60" />
            <Button component={Link} to = "/top50" size="large" color="primary" onClick={() => {}}>TOP 50</Button>
            <Button component={Link} to = "/allsongs" size="large" color="primary" onClick={() => {}}>ALL SONGS</Button>
            <Button component={Link} to = "/allartists" size="large" color="primary" onClick={() => {}}>ALL ARTISTS</Button>
        </div> 
        <Toolbar className = {classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                </div>
            ) : (
                <Button id = "signInButton" component={Link} to="/loginpage" variant="contained" color="primary">Sign In</Button>
            )}
        </Toolbar>
    </AppBar>
    )
}

export default Navbar