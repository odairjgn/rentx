import React from 'react';
import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BackButtom } from '../../../components/BackButtom';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';

import {
    Container,
    Header,
    Steps,
    Title,
    Subtitle,
    Form,
    FormTitle
} from './styles';
import { PasswordInput } from '../../../components/PasswordInput';
import { useTheme } from 'styled-components';
import { api } from '../../../services/api';

interface Params {
    user: {
        name: string,
        email: string,
        driverLicense: string
    }
}

export function SignUpSecondStep() {
    const [password, setPassword] = React.useState('');
    const [passwordConfirm, setPasswordConfirm] = React.useState('');
    const navigation = useNavigation();
    const route = useRoute();
    const theme = useTheme();

    const { user } = route.params as Params;

    function handleBack() {
        navigation.goBack();
    }

    async function handleRegister() {
        if (!password || !passwordConfirm) {
            return Alert.alert('Informe a senha e a confirmação.');
        }

        if (password != passwordConfirm) {
            return Alert.alert('As senhas não são iguais');
        }

        await api.post('/users', {
            name: user.name,
            email: user.email,
            driver_license: user.driverLicense,
            password
        })
        .then(() => {
            navigation.navigate('Confirmation', {
                title: 'Conta Criada!',
                message: 'Agora é só fazer login\ne aproveitar.',
                nextScreenRoute: 'SignIn'
            });
        })
        .catch(() => {
            Alert.alert('Opa', 'Não foi possível cadastrar.');
        });        
    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <BackButtom onPress={handleBack} />
                        <Steps>
                            <Bullet />
                            <Bullet active />
                        </Steps>
                    </Header>
                    <Title>
                        Crie sua{'\n'}conta
                    </Title>
                    <Subtitle>
                        Faça seu cadastro de{'\n'}
                        forma rápida e fácil
                    </Subtitle>

                    <Form>
                        <FormTitle>2. Senha</FormTitle>
                        <PasswordInput
                            iconName='lock'
                            placeholder='Senha'
                            onChangeText={setPassword}
                            value={password}
                        />
                        <PasswordInput
                            iconName='lock'
                            placeholder='Repetir senha'
                            onChangeText={setPasswordConfirm}
                            value={passwordConfirm}
                        />
                    </Form>

                    <Button
                        color={theme.colors.success}
                        title='Cadastrar'
                        onPress={handleRegister}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}