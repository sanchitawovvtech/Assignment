import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    mainView: {
        backgroundColor: 'gray',
        display: 'flex',
        padding: hp(10),
        justifyContent: 'center'
    },
    btnStyle: {
        marginTop: hp(10),
        width: wp(50),
    },
    continueContainerStyle: {
        width: wp(50),
        alignSelf: 'center'
    },
})