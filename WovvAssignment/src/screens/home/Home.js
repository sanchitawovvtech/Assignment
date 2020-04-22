import React from 'react';
import { View } from 'react-native';
import EditText from '@editText/EditText';
import CustomButton from '@button/CustomButton';
import axios from 'axios';
import { styles } from '@home/styles';
import strings from '@resources/Strings';
import { NUMERIC_PAD, URL, API_KEY, API_KEY_CONST, DEMO_URL, DETAIL_SCREEN } from '@resources/Constants'

const {
    asteroid_id,
    submit_button,
    random_asteroid_button
} = strings;

const {
    title,
    line,
    btnStyle,
    mainView,
    continueContainerStyle
} = styles;


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
    }

    onSubmit = () => {
        const { id } = this.state;
        const { navigation } = this.props;
        const url = `${URL}${id}${API_KEY_CONST}${API_KEY}`;

        axios.get(url)
            .then(res => {
                const { name, nasa_jpl_url, is_potentially_hazardous_asteroid } = res.data;
                navigation.navigate(DETAIL_SCREEN, { name, nasa_jpl_url, is_potentially_hazardous_asteroid })
            })
            .catch(err => {
                console.log(err);
            })
    }

    onRandomSubmit = () => {
        axios.get(DEMO_URL)
            .then(res => {
                const { near_earth_objects } = res.data;
                var item = near_earth_objects[Math.floor(Math.random() * near_earth_objects.length)];
                const { id } = item;
                const url = `${URL}${id}${API_KEY_CONST}${API_KEY}`;
                return url
            })
            .then(url => {
                axios.get(url)
                    .then(res => {
                        const { name, nasa_jpl_url, is_potentially_hazardous_asteroid } = res.data;
                        navigation.navigate(DETAIL_SCREEN, { name, nasa_jpl_url, is_potentially_hazardous_asteroid })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }

            )
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const { id } = this.state;
        return (
            <View style={mainView}>
                <EditText
                    keyboardType={NUMERIC_PAD}
                    placeholder={asteroid_id}
                    onChangeText={id => this.setState({ id })}
                    defaultValue={id}
                    value={id} />
                <CustomButton
                    style={btnStyle}
                    containerStyle={continueContainerStyle}
                    title={submit_button}
                    disabled={id === ''}
                    onPress={() => this.onSubmit()} />
                <CustomButton
                    style={btnStyle}
                    containerStyle={continueContainerStyle}
                    title={random_asteroid_button}
                    onPress={() => this.onRandomSubmit()} />
            </View>
        );
    }
}
