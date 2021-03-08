import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './component/Navigation/Navigation';
import Logo from './component/Logo/Logo';
import ImageLink from './component/ImageLink/ImageLink';
import ImageBox from './component/ImageBox/ImageBox';
import Login from './component/Login/Login';
import Registration from './component/Registration/Registration';


const particlesOpt = {
    "particles": {
        "number": {
            "value": 300,
            "density": {
                "enable": true,
                "value_area": 3000
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.02
        },
        "move": {
            "direction": "none",
            "speed": 0.25,
            "random": true
        },
        "size": {
            "value": 1.5
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
            }
        }
    },
    "retina_detect": true
}

const initialState = {
  input: '',
  imageURL: '',
  box: [],
  route: 'login',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: '',
    joined: ''
  }
}
 
class App extends Component {
  constructor() {
    super ();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calFaceLoc = (data) => {
    // const cint = data.outputs[0].data.regions[0].region_info.bounding_box;
    // console.log(cint);
    // console.log(data.outputs[0]);
    return data.outputs[0].data.regions.map(face => {
      const clarifaiFace = face.region_info.bounding_box;
      const clarifaiFaceID = face.id;
      return {
        id: clarifaiFaceID,
        lCol: clarifaiFace.left_col * 100 + '%',
        tRow: clarifaiFace.top_row * 100 + '%',
        rCol: (100 - clarifaiFace.right_col * 100) + '%',
        bRow: (100 - clarifaiFace.bottom_row * 100) + '%',
      }
    });
  }

  DispFaceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({box: []})
    this.setState({imageURL: this.state.input}); 
    fetch('https://blooming-inlet-71509.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            input: this.state.input
        })
    })
    .then(response => response.json())
    .then(response => {
      if (response) {
        fetch('https://blooming-inlet-71509.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.user.id
            })
        })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count}))
          })
      }
      this.DispFaceBox(this.calFaceLoc(response))})
    .catch(err => console.log(err))   
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'FcrApp') {
      this.setState({isSignedIn: true})
    }
    this.setState({route : route})
  }

  render() {
    const { isSignedIn, imageURL, route, box} = this.state;
    return (
      <div className='text-center'>
        <Particles className='particles' params={particlesOpt} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} name={this.state.user.name} entries={this.state.user.entries}/>
        <Logo />
        {route === 'FcrApp'
          ? <div className='flex flex-col items-center'>
              <ImageLink onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
              <ImageBox box={box} imageURL={imageURL} />
            </div>
          
          : (route === 'login'
              ? <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : <Registration loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            )
        }
        <footer className='pt-5 text-white text-sm'> Build by Alfian Nahar </footer>
      </div>
    )
  }
}

export default App;