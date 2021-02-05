import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles((theme) => ({
    footer: {
        width: 400,
        fontSize: 13,
        '& a': {
            
        }
        
    },
    
}));   

function Footer() {
    const classes = useStyles();

    return (
        <Grid container className={classes.footer}>
            <Grid item container justify="center" xs={4}>
            
                <a>Condition of Use</a>
            
            </Grid>
            <Grid item container justify="center" xs={4}> 
                <a>Privacy Notice</a>
            </Grid>
            <Grid item container justify="center" xs={4}>
                <a>Help</a>
            </Grid>
            <Grid item container justify="center" xs={12}>
            © 1996-2020, Amazon.com, Inc. or its affiliates
            </Grid>

        </Grid>

    );

}

export default Footer;