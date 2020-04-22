import React from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '@editText/styles';
import { ASTERISK, CENTER_ALIGN } from '@resources/Constants'

const {
    text,
    labelStyle,
    astric,
    textInputStyle
} = styles;

const EditText = ({ label, value, onChangeText, mandatory, keyboardType, textAlignStyle, editable, textColor, placeholder }) => {
    return (
        <View>
            <View style={labelStyle}>
                <Text style={text}>{label}</Text>
                {
                    mandatory && <Text style={astric}>{ASTERISK}</Text>
                }

            </View>
            <TextInput
                keyboardType={keyboardType}
                textAlign={textAlignStyle ? textAlignStyle : CENTER_ALIGN}
                style={[textInputStyle, { color: textColor }]}
                onChangeText={onChangeText}
                value={value}
                autoCorrect={false}
                editable={editable}
                placeholder={placeholder}
            />
        </View>
    );
}

EditText.defaultProps = {
    label: undefined,
    value: undefined,
    placeholder: undefined,
    mandatory: true,
    keyboardType: 'default',
    editable: true
}

EditText.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    keyboardType: PropTypes.string,
    placeholder: PropTypes.string,
    mandatory: PropTypes.bool,
    editable: PropTypes.bool
}


export default EditText;