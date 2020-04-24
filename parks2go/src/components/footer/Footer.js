// JavaScript Document
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//images
//import logo2 from '../../images/ptBtn3.png';

//Material UI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Youtube from '@material-ui/icons/YouTube';

//styles
const useStyles = makeStyles(theme => ({
  root:{				
		height:'auto',
		flexGrow: 1,
		overflow:'hidden',
		textAlign:'left',
	},
	h2:{
		fontSize:'1.25em',
		textAlign:'center',
		marginTop:'-0.5%',
		color:'white',
	},
	a:{
		color:'white',
		textDecoration:'none',
	},
	p2g:{
		color:'#ea7a0f',
		textDecoration:'none',
	},
	states:{
	fontSize:'1.25em',
		textAlign:'center',
		marginTop:'-0.5%',
		color:'white',
	marginLeft:'-14%',	
	},
	typography:{
		color:theme.palette.secondary.main,
	}
}));

const Copyright = () => {
  const classes = useStyles();
  return (
    <Typography variant="body2" align="left" className={classes.typography}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Parks2Go
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//exporting a class footer
export default function Footer() {
  const classes = useStyles();
	
  return(
    <div className={classes.root}>
      <Grid container>

	  <Grid item xs={12} md={3} style={styles.about}>
		<h2 className={classes.h2}>About Us</h2>
					<p><a className={classes.p2g} href='http://localhost:3000/About'>Parks2Go</a> ipsum dolor sit amet. The hotel, the casino. The Corleone Family wants to buy you out. I don’t like violence, Tom. I’m a businessman; blood is a big expense.</p>
        </Grid>
	  
	  
        <Grid item xs={12} md={8}>
		<h2 className={classes.states}>Parks2Go</h2>
     
      <Grid container style={styles.container}>
      <Grid item xs={2}>
	  <h5><a className={classes.a} href='https://reactjs.org'>Alabama</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Conneticut</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Illinois</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Maine</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Missouri</a><br />
	  <a className={classes.a} href='https://reactjs.org'>New Mexico</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Oregon</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Texas</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Wisconsin</a></h5>
      </Grid>
	  
	  <Grid item xs={2} style={styles.column2}>
	  <h5><a className={classes.a} href='https://reactjs.org'>Alaska</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Delaware</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Indiana</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Maryland</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Montana</a><br />
	  <a className={classes.a} href='https://reactjs.org'>New York</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Pennsylvania</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Utah</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Wyoming</a></h5>
      </Grid>
	  
	   <Grid item xs={2} style={styles.column3}>
	   <h5><a className={classes.a} href='https://reactjs.org'>Arizona</a><br />
	   <a className={classes.a} href='https://reactjs.org'>District of Columbia</a><br />
	   <a className={classes.a} href='https://reactjs.org'>Florida</a><br />
	   <a className={classes.a} href='https://reactjs.org'>Iowa</a><br />
	   <a className={classes.a} href='https://reactjs.org'>Massachusetts</a><br />
	   <a className={classes.a} href='https://reactjs.org'>Nebraska</a><br />
	   <a className={classes.a} href='https://reactjs.org'>North Carolina</a><br />
	   <a className={classes.a} href='https://reactjs.org'>Rhode Island</a><br />
	   <a className={classes.a} href='https://reactjs.org'>Vermont</a></h5>
       </Grid>
	  
	   <Grid item xs={2} style={styles.column4}>
	  <h5><a className={classes.a} href='https://reactjs.org'>Arkansas</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Georgia</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Kansas</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Michigan</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Nevada</a><br />
	  <a className={classes.a} href='https://reactjs.org'>North Dakota</a><br />
	  <a className={classes.a} href='https://reactjs.org'>South Carolina</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Virginia</a></h5>
      </Grid>
	  
	  <Grid item xs={2} style={styles.column5}>
	  <h5><a className={classes.a} href='https://reactjs.org'>California</a><br /><a className={classes.a} href='https://reactjs.org'>Hawaii</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Kentucky</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Minnesota</a><br />
	  <a className={classes.a} href='https://reactjs.org'>New Hampshire</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Ohio</a><br />
	  <a className={classes.a} href='https://reactjs.org'>South Dakota</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Washington</a></h5>
       </Grid>
	  
	  <Grid item xs={2} style={styles.column6}>
	  <h5><a className={classes.a} href='https://reactjs.org'>Colorado</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Idaho</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Louisiana</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Mississippi</a><br />
	  <a className={classes.a} href='https://reactjs.org'>New Jersey</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Oklahoma</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Tennessee</a><br />
	  <a className={classes.a} href='https://reactjs.org'>West Virginia</a></h5>
       </Grid>
     </Grid>
   </Grid>

      <Grid item xs={12} md={1}>
	  <h2 className={classes.h2}>Connect</h2>
	  <Facebook style={styles.display}/>
	  <Instagram style={styles.display}/>
	  <Twitter style={styles.display}/>
	  <Youtube style={styles.display} />
      </Grid>
	    
		<Grid item xs={12} md={12}><Copyright /></Grid>
      </Grid>
    </div>
  );
}

const styles ={
	container:{
		marginTop:'-2%',
		justifyContent:'center',
	},
	about:{
		paddingRight:'4%',
		color:'white',
	},
	column2:{
		marginLeft:'-5%'
	},
	column3:{
		marginLeft:'-4%'
	},
	column4:{
		marginLeft:'1%'
	},
	column5:{
		marginLeft:'-3%'
	},
	column6:{
		marginLeft:'-2%'
	},
	display:{
		display:'block',
		paddingLeft:'35%',
	color:'white',
	}
}