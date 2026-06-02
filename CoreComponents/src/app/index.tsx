import { View } from 'react-native';
import Greet from '../../components/greet';

export default function App(){
  return (
  <View style={{flex:1, backgroundColor: "black", padding : 80}}>
    <Greet name= "Turab Shah"/>
    <Greet name= "Abdullah "/>
  </View>
  );
}