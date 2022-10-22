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
        profilePicture: {
            backgroundColor: Colors.WHITE,
            width: RFValue(65),
            height: RFValue(65),
            borderRadius: RFValue(50),
            alignSelf: 'center',
            marginTop: RFValue(20),
        },
        infoContainer:{

        },
        infoTitle: {
            fontSize: RFValue(15),
            fontWeight: 'bold',
            color: Colors.ORANGE,
            alignSelf: 'center',
            marginTop: RFValue(20),
        },
        saveButtonContainer: {
            marginTop: RFValue(20),
        },
        inputContainer: {
            marginVertical: RFValue(15),
        }

    });

export default createStyles;