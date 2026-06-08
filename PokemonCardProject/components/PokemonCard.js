import {View, Text, StyleSheet, Platform, Image} from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};


export default function PokemonCard({
    name,
    image,
    type,
    hp,
    moves,
    weakness
}){

    const { borderColor, emoji } = getTypeDetails(type);

    return (
        
        <View style = {styles.box}>

            <View style = {styles.nameContainer}>
                <Text style = {styles.name}>{name}</Text>
                <Text style = {styles.hp}>❤️ {hp}</Text>
            </View>

            <View>
                <Image 

                source = {image} 
                style = {styles.image}
                accessibilityLabel={`${name} pokemon`}
                resizeMode = "contain">

                </Image>
            </View>

            <View style = {styles.typeContainer}>
                <View style = {[styles.badge, {borderColor}]}>
                <Text style = {styles.typeEmoji}>{emoji}</Text>
                <Text style = {styles.typeText}>{type}</Text>
                </View>
            </View>

            <View style={styles.movesContainer}>
                <Text style = {styles.movesText}>Moves : {moves.join(" , ")}</Text>
            </View>

            <View style={styles.weaknessContainer}>
                <Text style={styles.weaknessText}>Weakness : {weakness.join(" , ")}</Text>
            </View>

        </View>

    );
}

const styles = StyleSheet.create ({

    box: {

        backgroundColor : "white",
        borderRadius : 12,
        borderWidth  : 2,
        padding : 25,
        margin : 20,

        ...Platform.select({

            ios : {

                shadowOffset  :{
                    width : 25,
                    height : 25

                },

                shadowColor : "#333",
                shadowOpacity  : 0.6,
                shadowRadius  : 4

            },

            android : {

                elevation : 25,
                shadowColor : "orange"

            }

        }),

    },

        nameContainer :{
            flexDirection : "row",
            justifyContent : "space-between",
            marginTop : 5,
            marginBottom : 20
        },

        name : {
            
            fontSize : 22,
            fontWeight : "bold"
        },

        hp : {

            fontSize : 22

        },

        image : {

            width : "100%",
            height : 200,
            marginTop : 0,
            marginBottom : 12
        },

        typeContainer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
        },
        
        badge: {
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 6,
            paddingHorizontal: 12,
            borderRadius: 20,
            borderWidth: 4,
        },
        
        typeEmoji: {
            fontSize: 30,
            marginRight: 12,
        },
        
        typeText: {
            fontSize: 22,
            fontWeight: "bold",
        },
        
        movesContainer: {
            marginBottom: 12,
        },

        movesText: {
            fontSize: 18,
            fontWeight: "bold",
        },
        
        
        weaknessContainer: {
            marginBottom: 8,
        },
        
        weaknessText: {
            fontSize: 22,
            fontWeight: "bold",
        },

});