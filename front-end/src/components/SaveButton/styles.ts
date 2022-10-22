import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

const createStyles = () =>
    StyleSheet.create({
        button: {
           width: '30%',
            alignSelf: 'center',
            padding: RFValue(5),
            alignItems: 'center',
            borderRadius: RFValue(50),
        },
        text:{
            color: Colors.WHITE,
            fontSize: RFValue(15),
            fontWeight: 'bold',
        },        
    });

export default createStyles;