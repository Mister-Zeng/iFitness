import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

const createStyles = () =>
    StyleSheet.create({       
        registerContainer: {
            flexDirection: 'row',
            padding: RFValue(10),
        },
        registerText: {
            color: Colors.WHITE,
            fontSize: RFValue(12),
            fontWeight: 'bold',
        },
        registerBtnText: {
            color: Colors.ORANGE,
            textDecorationLine: 'underline',
            fontWeight: 'bold',
            fontSize: RFValue(12),
        }

    });

export default createStyles;