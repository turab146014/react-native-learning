import {StyleSheet, Platform, ScrollView} from "react-native";

import {SafeAreaView} from "react-native-safe-area-context";

import PokemonCard from "../../components/PokemonCard";

export default function App(){
  
  const charmanderData = {

    name : "Charmander",
    image: require("../../assets/images/charmander.png"),
    type : "Fire",
    hp : 39,
    moves : ["Scratch", "Ember", "Growl", "Leer"],
    weakness : ["Water", "Rock"]

  }

  const squirtleData = {
    name: "Squirtle",
    image: require("../../assets/images/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weakness: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("../../assets/images/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weakness: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("../../assets/images/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weakness: ["Ground"],
  };

  return (

  <SafeAreaView style = {styles.container}>
    <ScrollView>
      <PokemonCard {...charmanderData}/>
      <PokemonCard {...squirtleData}/>
      <PokemonCard {...pikachuData}/>
      <PokemonCard {...bulbasaurData}/>
    </ScrollView>
  </SafeAreaView>

 );
}

const styles = StyleSheet.create ({

  container : {

    flex : 1,
    backgroundColor : "#f5f5f5",
    paddingTop : Platform.OS === "android" ? 25 : 0

  },

});