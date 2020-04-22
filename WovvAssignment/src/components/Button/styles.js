import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    containerStyle: {
        width: wp(50),
        alignSelf: 'center'
    },
    buttonStyle: {
        height: hp(8),
        borderRadius: wp(2)
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: 23,
        // color: '#FFFFFF'
    },
    disabledStyle: {
        color: '#FFFFFF'
    }
})