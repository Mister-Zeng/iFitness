import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

const createStyles = () =>
    StyleSheet.create({
        infoTitle: {
            fontSize: RFValue(15),
            fontWeight: 'bold',
            color: Colors.ORANGE,
            alignSelf: 'center',
            marginVertical: RFValue(30),
        },
        infoContainer: {
            height:"100%",
        },
        macrosContainer: {

        }
    });

export default createStyles;