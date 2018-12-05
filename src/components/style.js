
import React from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';



class Style extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: "top",
      pants: "pants",
      outer: "out",
      shoes: "shoes",
      currentTemp: this.props.currentTemp,
      error: "error"
    };
this.setStyle = this.setStyle.bind(this);

};



componentDidUpdate(prevProps, prevState) {
  if (this.props.currentTemp !== prevProps.currentTemp) {
  this.setStyle();
  }
  console.log("style updated");
  console.log(this.props.currentTemp);
  console.log(this.state.top);
}


  setStyle(){
  let currentTemp = this.props.currentTemp;
  if ({currentTemp} >= 75) {
    this.setState({
      outer: "None",
      top: "T-shirt",
      pants: "Shorts",
      shoes: "Sandals"
    });
  } else if ((currentTemp >= 60) & (currentTemp < 75)) {
    this.setState({
      outer: "Hoodie or Light Jacket",
      top: "T-shirt",
      pants: "Shorts or Pants",
      shoes: "Shoes "
    });
  } else if ((currentTemp >= 50) & (currentTemp < 60)) {
    this.setState({
      outer: "Jacket/Fleece",
      top: "T-shirt or Long sleeve",
      pants: "Pants",
      shoes: "Shoes"
    });
  } else if ((currentTemp >= 40) & (currentTemp < 50)) {
    this.setState({
      outer: "Jacket/Fleece ",
      top: " Long Sleeve",
      pants: "Pants",
      shoes: "Shoes or Boots"
    });
  } else {
    this.setState({
    outer: "Layers: Coat",
    top: "Long Sleeve",
    pants: "Thick Pants, Layers",
    shoes: "Boots"});
  }
  console.log("is working");
}




  render() {



    const { outer, top, pants, shoes} = this.state;

    return (
      <React.Fragment>
        <List className="styleList">

        {(<ListItem   >
          <ListItemText primary="Outer" secondary={outer} className="style-div"/>
          </ListItem>

        )}
        <Divider  />
        {(<ListItem >
          <ListItemText primary="Top" secondary={top} className="style-div"/>
          </ListItem>

        )}
        <Divider  />
        {(<ListItem>
          <ListItemText primary="Pants" secondary={pants} className="style-div"/>
          </ListItem>
        )}
        <Divider  />
        {(<ListItem >
          <ListItemText primary="Shoes" secondary={shoes} className="style-div"/>

          </ListItem>
        )}
      </List>
      </React.Fragment>
    );
  }
}


export default Style;
