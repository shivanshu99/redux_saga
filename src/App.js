import React from 'react';
import './App.css'
import {useDispatch,useSelector} from 'react-redux';
import {loadPostStart} from './action';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
	root: {
		maxWidth: 345
	}
});
const App=()=>{
    
const classes = useStyles();
    const dispatch=useDispatch();
    const fetchPost=()=>{
        dispatch(loadPostStart())
    }
    const state = useSelector(state => ([ ...state.app.posts ]));
    console.log(state)
    return (
		<>
			<div className="shiv">
				<h2>Fetch News Data</h2>
				{state.map(list => (
					<Card
						className={classes.root}
						style={{ textAlign: "center" }}
					>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								image={list.urlToImage}
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
								>
									{list.title}
								</Typography>
								<Typography
									variant="body2"
									color="textSecondary"
									component="p"
								>
									{list.content}
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button
								href={list.url}
								size="small"
								color="primary"
							>
								Read More
							</Button>
							<Button size="small" color="primary">
								{list.publishedAt}
							</Button>
						</CardActions>
					</Card>
				))}

				<button
					onClick={fetchPost}
					style={{ backgroundColor: "lightblue" }}
				>
					Fetch Post
				</button>
			</div>
		</>
	);
   
}

export default App;