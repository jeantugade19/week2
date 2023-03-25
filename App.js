import React, {Component} from 'react';
import { View, Text, Image,  StyleSheet } from 'react-native';
import logo from './assets/snack-icon.png';

class App extends Component {
  render(){
    return(
      <View style={style.container}>
      <View style={style.container1}>
    <Text style={style.textdesign}>"Hellow World"</Text>
    <Image source={logo} style={style.imgDesign} />
    </View>
  </View>
    )
  }

}
 

const style = StyleSheet.create({

imgDesign:{
  width: 50,
  height: 50,

},

  container: {
    flex: 1,
   backgroundColor: "#FFBF03",
   alignItems: 'center',
 
},
container1: {
  backgroundColor: "#000ff"
},

  textDesign: {
    fontSize: 50,
    color: "#FFF",
    fontWeight: "bold",

  }

});
 export default App;