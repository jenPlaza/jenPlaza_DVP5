// JavaScript Document
import React from 'react';
import Modal from '../components/modal/modal';

//Material UI
import {makeStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

//Images & Icons
import imgUrl from '../images/parkAbout.jpg';

const useStyles = makeStyles(theme => ({
 	container:{
		backgroundImage: 'url(' + imgUrl + ')',	
		backgroundColor:'rgba(24, 8, 0, 1)',
		padding:'6%',
	  color:'white',
	},
	about:{
	  padding:'6%',
	  color:'white',
	},
	contact:{
	  padding:'2%',
	  color:'#280004',
		textAlign:'center',
		height:'200px',
	},
	address:{
	  textAlign:'center',
	},
	sendUs:{
		paddingLeft:'3%',
	},

	btnSubmit:{
    background: 'coral',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    outline: 'none',
    padding: '10px',
	backgroundColor: '#1b5e20',
    marginLeft:'5%',
	marginBottom:'1%',
		position:'absolute',
		bottom:'0px',
},
openModalBtn:{
    margin: '15px',
    padding: '10px',
    fontWeight: 'bold',
},
}));

export default function Index() {
 const classes = useStyles();
  return (
		 <div>
		<Grid container>
				<Grid item xs={12} className={classes.container} >
					<section>
	  					<h1>About Us</h1>
	  					<p>
	  					Epic cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either.<br /><br />

	  					They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back.<br /><br />

	  					Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended.
	  					</p>
	  				</section>
				</Grid>
	  
				<Grid item xs={12} className={classes.contact}>
					<section>
	  					<Grid container>
							<Grid item xs={12} md={3}>
	  							<h2>1-512-394-9384</h2>
	  								<p>Monday - Friday<br />
	  								8:00am -5:30pm CT
	  								</p>
	  						</Grid>
	  
	  						<Grid item xs={12} md={7} className={classes.address}>
	   							<h3>Parks2Go, Inc </h3>
	  								<address>
	  								7256 Arugula Parkway, ste 101<br />
	  								The Woodlands, TX 77380<br />
	  								1-512-394-9384
	  								</address>
	  						</Grid>
	  
	  						<Grid item xs={12} md={2} className={classes.sendUs}>
                				

                				<button className={classes.openModalBtn}>SEND US AN EMAIL</button>
	  					    </Grid>
	  
	  						<Grid item xs={12}>
	    						<Modal>
                        			<form method="post">
	  									<Grid container>
											<Grid item xs={12}>
  												<input type="text" id="fname" name="fname" placeholder="Full Name"></input><br /><br />
 											</Grid>
	  										<Grid item xs={12}>
  												<input type="text" id="email" name="email" placeholder="Email"></input><br /><br />
	  										</Grid>
	  										<Grid item xs={12}>
	  											<input type="text" id="message" name="message" placeholder="Message"></input><br /><br />
  											</Grid>
	  										<Grid item xs={12}>
	  											<input type="submit" className={classes.btnSubmit}value="SUBMIT"></input>
	  										</Grid>
	  									</Grid>
	  								</form>
                				</Modal>
	  						</Grid>
	  					</Grid>
	  			   </section>
				</Grid>
			</Grid>
		</div>
	  
    );
}


