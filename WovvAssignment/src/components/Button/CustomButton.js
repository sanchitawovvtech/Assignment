import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { styles } from '@button/styles';

const {
    containerStyle,
    buttonStyle,
    titleStyle
} = styles;

const CustomButton = ({ title, type, onPress, style, backgroundColor, containerStyle, disabled, customTitleStyle }) => {
    return (
        <View>
            <Button
                buttonStyle={[buttonStyle, style, { backgroundColor: backgroundColor }]}
                containerStyle={containerStyle}
                titleStyle={[titleStyle, customTitleStyle]}
                title={title}
                type={type}
                onPress={onPress}
                disabled={disabled}
            />
        </View>
    );
}

CustomButton.defaultProps = {
    title: undefined,
    type: 'solid',
    backgroundColor: '#5A67F2',
    disabled: false
}

CustomButton.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    onPress: PropTypes.func,
    backgroundColor: PropTypes.string,
    disabled: PropTypes.bool
}


export default CustomButton;