import React from 'react';
import { View, TextView } from 'react-native';
import EditText from '@editText/EditText';
import CustomButton from '@button/CustomButton';
import axios from 'axios';
import { styles } from '@home/styles';
import strings from '@resources/Strings';
import { NUMERIC_PAD, URL, API_KEY, API_KEY_CONST, DEMO_URL, DETAIL_SCREEN } from '@resources/Constants'

const {
    name_label,
    nasa_jpl_url_label,
    is_potentially_hazardous_asteroid_label
} = strings;

// const {
//     title,
//     line,
//     btnStyle,
//     mainView,
//     continueContainerStyle
// } = styles;


export default class Details extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const { navigation, route } = this.props;
        const { name, nasa_jpl_url, is_potentially_hazardous_asteroid } = route.params;
        console.warn(name, nasa_jpl_url, is_potentially_hazardous_asteroid);

        return (
            <View>
                {/* <TextView>{name_label}{name}</TextView>
                <TextView>{nasa_jpl_url_label}{nasa_jpl_url}</TextView>
                <TextView>{is_potentially_hazardous_asteroid_label}{is_potentially_hazardous_asteroid}</TextView> */}
            </View>
        );
    }
}
