import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    text: {
        fontWeight: '500',
        fontSize: 14,
        color: "#333333",
        paddingBottom: hp(0.5)
    },
    labelStyle: {
        flexDirection: 'row'
    },
    astric: {
        color: "red"
    },
    textInputStyle: {
        height: 50,
        borderColor: '#F1F1F1',
        borderWidth: 1,
        borderRadius: hp(0.7),
        backgroundColor: '#FFFFFF',
        lineHeight: 18,
    }
})