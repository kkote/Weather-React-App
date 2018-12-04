import React from "react";



class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: "",
      img: require('../Images/winter-couplesize.jpg'),
      error: null
    };
  };

  render () {
    const currentTemp= this.state.currentTemp ;

    if(this.state.currentTemp >= 75) {
      return (<div className="img-box">
        <img src={require('../Images/summer-groups.jpg')} alt="summer"/>
      </div>);
    }
    else if ((currentTemp >= 60) & (currentTemp < 75)) {
      return (<div className="img-box">
        <img src={require('../Images/spring-group-s.jpg')} alt="spring "/>
      </div>);
    }
    else if ((currentTemp >= 50) & (currentTemp < 60)) {
      return (<div className="img-box">
        <img src={require('../Images/fall-couple-s.jpg')} alt="fall"/>
      </div>);
    }

    else if ((currentTemp >= 40) & (currentTemp < 50)) {
      return (<div className="img-box">
        <img src={require('../Images/winter-couplesize.jpg')} alt="winter"/>
      </div>);
    }
    else {
      return (<div className="img-box">
        <img src={require('../Images/winter-woman-crop2size.jpg')} alt=" winter"/>
      </div>);
    }
  }
}


export default Img;