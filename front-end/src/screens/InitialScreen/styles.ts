import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

const createStyles = () =>
    StyleSheet.create({
        body: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.BLACK
        },
        textContainer : {
            top: RFValue(120),
        },
        text:{
            fontSize: RFValue(25),
            fontWeight: '800',
            color: Colors.WHITE,
            textDecorationLine:"line-through",
            textAlign: 'center',
        },
        text2 :{
            fontSize: RFValue(25),
            fontWeight: '800',
            color: Colors.WHITE,
            textAlign: 'center',
        },
        background: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            bottom: RFValue(40)
        },
        footer: {
            position: 'absolute',
            bottom: RFValue(100),
            width: '100%',
        },
    });

export default createStyles;