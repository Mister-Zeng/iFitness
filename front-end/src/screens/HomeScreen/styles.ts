import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

const createStyles = () =>
    StyleSheet.create({
        screen: {
            backgroundColor: Colors.BLACK,
        },
        greeting: {
           color: Colors.WHITE,
           fontSize: RFValue(20),
           fontWeight:"bold"
        },
        infoContainer:{
            padding:RFValue(25),
            paddingBottom: RFValue(100),
        },
        greetingContainer: {
            flexDirection: "row",
        },
        text:{
            fontSize: RFValue(25),
            color: Colors.WHITE
        },
        userName:{
            color:Colors.ORANGE,
            fontSize: RFValue(20),
            fontWeight: "bold",  
            fontStyle: "italic",
            textDecorationLine: "underline",
        },
        dashboard: {
            color: Colors.WHITE,
            fontSize: RFValue(14),
            marginTop: RFValue(40),
            fontWeight: "bold",
        },
        weightContainer: {
            marginTop: RFValue(15),
            borderWidth: 2,
            borderColor: Colors.GREY,
            borderRadius: 5,
            padding: RFValue(15), 
            alignItems : "center",
        },
        graphTitle: {
            color: Colors.WHITE,
            fontSize: RFValue(12),
            marginBottom: RFValue(10),
        },
        macroProgressTitle: {
            color: Colors.WHITE,
            fontSize: RFValue(10),

        },
        macroProgressContainer: {
            marginBottom: RFValue(5),
        },
        macroContainer: {
            marginTop: RFValue(35),
            borderWidth: 2,
            borderColor: Colors.GREY,
            borderRadius: 5,
            padding: RFValue(15), 
            alignItems : "center",
            marginBottom: RFValue(150),
        },
        
    });

export default createStyles;