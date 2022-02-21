import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components'
import { BorderlessButton } from 'react-native-gesture-handler';

import {
    Container,
    IconContainer,
    InputText
} from './styles';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
}

export function PasswordInput({
    iconName,
    ...rest
}
    : Props) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const theme = useTheme();

    function handlePasswordVisibilityChange() {
        setIsPasswordVisible(prevState => !prevState);
    }

    return (
        <Container>
            <IconContainer>
                <Feather
                    name={iconName}
                    size={24}
                    color={theme.colors.text_details} />
            </IconContainer>
            <InputText
                secureTextEntry={isPasswordVisible}
                {...rest}
            />
            <BorderlessButton onPress={handlePasswordVisibilityChange}>
                <IconContainer>
                    <Feather
                        name={isPasswordVisible ? 'eye' : 'eye-off'}
                        size={24}
                        color={theme.colors.text_details} />
                </IconContainer>
            </BorderlessButton>
        </Container>
    );
}