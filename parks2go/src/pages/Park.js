// JavaScript Document
import React from 'react';
import ImgGallery from '../components/imgGallery/imgGallery'

//Material UI
import {withStyles} from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import LinearProgress from '@material-ui/core/LinearProgress';

//Images & Icons
import imgUrl from '../images/parkBackground.png';

const useStyles = {
	imgs:{
		backgroundColor:'rgb(15,15,15,0.7)',
		borderBottomLeftRadius:'30',
		borderBottomRightRadius:'30',
	},
rightCol:{
	color:'white',
	justifyContent: 'space-around',
	padding:'1%',
},
	leftCol:{
	color:'white',
		justifyContent: 'space-around',
		paddingLeft:'3%',
},
	moveUp:{
		marginTop:'-4%',
	},
	activities:{
		columns: '3 auto',
		marginBottom:'10%',
		listStyleType:'none',
	},
	ul:{
		margin:'0',
		padding:'1%',
	},
	topics:{
		columns: '3 auto',
		listStyleType:'none',
		marginBottom:'10%',		
	},
	description:{
		marginBottom:'8%',
		marginTop:'10%',
	},
	details:{
		marginBottom:'6%',
	},
	directions:{
		marginBottom:'6%',
	},
};

//console.log(window.location.pathname);
let pCode = window.location.pathname;
let newPC = pCode.split('/park/');
 newPC.shift();
const parkId = newPC;
const endpoint = `parkCode=${parkId}`;

//Smart Component
class Park extends React.Component {
	//declaring state and new object
	state ={
		parkListing: [],
	}

//calling fetchData function
	componentDidMount(){
	this.fetchData();
}

//fetch Api data and map json results in a list format
fetchData(){
	fetch(`https://developer.nps.gov/api/v1/parks?${endpoint}&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq`)
		.then(results =>{
		return results.json();
	}).then(data =>{
		let mList = data.data.map((use, i)=>{
			const  {classes}  = this.props;
			return(
				<Grid container style={styles.container}>
	 		<Grid item xs={12} md={4}style={styles.rightCol}>
				<Grid container>
					<Grid item xs={12} style={styles.h2}>
						<Grid container>
	  						<Grid item xs={12} style={styles.h2}>
								<h1>{use.name}</h1>
								<h3 style={styles.moveUp}>{use.addresses[0].line1}, {use.addresses[0].stateCode}<br />
								{use.addresses[0].city}, {use.addresses[0].stateCode} {use.addresses[0].postalCode}</h3>
							</Grid> 
	  					</Grid> 
	   			</Grid> 
{/*Park Description*/}
	 			<Grid item xs={12} style={styles.description}>
		  				<h2>Park Description</h2>
	  					<p style={styles.moveUp}>{use.description}</p>
	   			</Grid>
{/*Park Details*/}
				<Grid item xs={12} style={styles.details}>
		  				<h2>Park Details</h2>
					    <p style={styles.moveUp}><b>{use.entranceFees[0].description}</b><br />
					    <b>Cost: </b>{use.entranceFees[0].cost}</p>
	   			</Grid>
{/*Park Directions*/}
	 			<Grid item xs={12} style={styles.directions}>
		  				<h2>Park Directions</h2>
						<p style={styles.moveUp}>{use.directionsInfo}</p>
	   			</Grid>
			</Grid>  
	   	</Grid>
				
				<Grid item xs={12} md={8} style={styles.leftCol}>
{/*Park Images*/}	
	  					<Grid item xs={12} style={styles.imgs}>
							<ImgGallery />
	   					</Grid> 
	 				
{/*Park Activities*/}
					<Grid item xs={12} >
		  				<h2>Park Activities</h2>
	  					<Grid item xs={11} style={styles.activities}>
							<ul style={styles.ul}>
							{use.activities.map(activity =>{
							return(
							<li key={activity.id} style={{backgroundColor: 'rgb(15,15,15,0.5)'}}>{activity.name}</li>	
							)})}
							</ul>
	  					</Grid>
	   				</Grid> 
{/*Park Topics*/}
	 				<Grid item xs={12} >
		  				<h2>Park Topics</h2>
						
	  					<Grid item xs={11} style={styles.topics}>
							<ul style={styles.ul}>
							{use.topics.map(topic =>{
								return(
								<li key={topic.id} style={{backgroundColor: 'rgb(15,15,15,0.5)'}}>{topic.name}</li>	
								)})}
								</ul>
	  					</Grid>
						
					</Grid> 
{/*Weather*/}
					<Grid item xs={11} >
		  				<h2>Weather Information</h2>
	  					<p>{use.weatherInfo}</p>
	   				</Grid> 
	   			</Grid> 
	</Grid>  		
			)
		})

		this.setState({park:mList});
	})
}
	 render(props) { 
		const  {classes}  = this.props;
  return (
	  <div style={styles.container}>
	  {this.state.park}
		</div>			
  	);
  }
}

export default Park
//export default withStyles(useStyles)(Park);

const styles ={
	container:{
		backgroundImage: 'url(' + imgUrl + ')',	
		marginBottom:'-3%',
		paddingBottom:'5%',
		paddingLeft:'2%',
		justifyContent: 'space-around',
	},
	imgs:{
		backgroundColor:'rgb(15,15,15,0.7)',
		borderBottomLeftRadius:'30',
		borderBottomRightRadius:'30',
	},
rightCol:{
	color:'white',
	justifyContent: 'space-around',
	padding:'1%',
},
	leftCol:{
	color:'white',
		justifyContent: 'space-around',
		paddingLeft:'3%',
},
	moveUp:{
		marginTop:'-4%',
	},
	activities:{
		columns: '3 auto',
		marginBottom:'10%',
		listStyleType:'none',
	},
	ul:{
		margin:'0',
		padding:'1%',
	},
	topics:{
		columns: '3 auto',
		listStyleType:'none',
		marginBottom:'10%',		
	},
	description:{
		marginBottom:'8%',
		marginTop:'10%',
	},
	details:{
		marginBottom:'6%',
	},
	directions:{
		marginBottom:'6%',
	},
}