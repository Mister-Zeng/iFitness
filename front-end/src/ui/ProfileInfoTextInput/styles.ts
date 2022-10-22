import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

const createStyles = () =>
    StyleSheet.create({       
        infoType: {
            fontSize: RFValue(12),
            color: Colors.ORANGE,
        },
        input:{
            height: RFValue(20),
            margin: RFValue(5),
            borderBottomWidth: 1,
            borderBottomColor: Colors.GREY,
            width: RFValue(200),
            fontSize: RFValue(12),
            color: Colors.WHITE,
            textAlign: "right"
        },
        inputIconContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: RFValue(30),
            justifyContent: 'space-between',
        },
        measurement: {
            fontSize: RFValue(12),
            color: Colors.ORANGE,
        }
       

    });

export default createStyles;