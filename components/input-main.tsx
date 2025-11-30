import React, { forwardRef } from 'react';
import {
    Platform,
    StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';

type InputMainProps = Omit<TextInputProps, 'onChange'> & {
    placeholder?: string;
    value?: string;
    onChange?: (text: string) => void;
    containerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    label?: string;
    placeholderTextColor?: string;
    showLabel?: boolean;
};

/**
 * InputMain
 * - Reusable input field for Android and iOS
 * - Accepts placeholder, value and onChange
 * - Supports custom styles via containerStyle and inputStyle
 * - Sets Android-friendly defaults (underlineColorAndroid transparent)
 */
const InputMain = forwardRef<TextInput, InputMainProps>((props, ref) => {
    const {
        placeholder,
        value,
        onChange,
        containerStyle,
        inputStyle,
        label,
        placeholderTextColor = '#9AA0A6',
        showLabel = false,
        multiline,
        numberOfLines,
        ...rest
    } = props;

    const handleChangeText = (text: string) => {
        onChange && onChange(text);
        if (rest.onChangeText) {
            rest.onChangeText(text);
        }
    };

    return (
        <View style={[styles.container, containerStyle]}>
            {showLabel && label ? <Text style={styles.label}>{label}</Text> : null}
            <TextInput
                ref={ref}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                onChangeText={handleChangeText}
                underlineColorAndroid="transparent" // important for Android look
                style={[
                    styles.input,
                    multiline && styles.inputMultiline,
                    inputStyle,
                ]}
                multiline={multiline}
                numberOfLines={numberOfLines}
                textAlignVertical={multiline ? 'top' : 'center'} // Android multiline alignment fix
                allowFontScaling={true}
                {...rest}
            />
        </View>
    );
});

InputMain.displayName = 'InputMain';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E6EA',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 12,
        paddingVertical: Platform.select({ android: 6, ios: 10 }),
    },
    label: {
        fontSize: 12,
        color: '#6B6F76',
        marginBottom: 6,
    },
    input: {
        fontSize: 16,
        color: '#111827',
        padding: 0,
        minHeight: 36,
    },
    inputMultiline: {
        paddingTop: 6,
        paddingBottom: 6,
    },
});

export default InputMain;