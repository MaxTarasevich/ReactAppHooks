import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: '400px',
    margin:'20px 50px',
  },
  media: {
    height: 300,
    minWidth: 400,
    backgroundPosition:'left bottom',
    backgroundSize:'cover'
  },
});

function MyCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.urlToImage == null ? './image-not-found.jpg' : props.urlToImage }
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
       {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Button href={props.url} size="small" color="primary">
      Learn more
        </Button>
      </CardActions>
    </Card>
  );

}


MyCard.propTypes = {
  urlToImage: PropTypes.string,
  url:PropTypes.string,
  author:PropTypes.string,
  description:PropTypes.string,
}

export default MyCard;