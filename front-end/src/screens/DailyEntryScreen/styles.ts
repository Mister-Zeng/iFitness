import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

const createStyles = () =>
    StyleSheet.create({
        body: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        background: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
        },
        text:{
            fontSize: RFValue(25),
            fontWeight: '300',
            color: Colors.WHITE
        },
        infoTitle: {
            fontSize: RFValue(15),
            fontWeight: 'bold',
            color: Colors.ORANGE,
            alignSelf: 'center',
            marginTop: RFValue(20),
        },
    });

export default createStyles;