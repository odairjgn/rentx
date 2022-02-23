import React,
{ useState } from 'react';
import {
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import * as Yup from 'yup';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import theme from '../../styles/theme';

import {
    Container,
    Header,
    Title,
    Form,
    SubTitle,
    Footer
} from './styles';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSingIn() {
        try {
            const schema = Yup.object().shape({
                email: Yup
                    .string()
                    .required('E-mail obrigatório')
                    .email('Digite um e-mail válido'),
                password: Yup
                    .string()
                    .required('Senha obrigatória')
            });

            await schema.validate({ email, password })

            //Fazer login
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                Alert.alert('Opa', error.message);
            } else {
                Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login, verifique as credenciais.');
            }
        }
    }

    return (
        <KeyboardAvoidingView
            behavior="position"
            enabled
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor="transparent"
                        translucent
                    />
                    <Header>
                        <Title>
                            Estamos{'\n'}quase lá.
                        </Title>
                        <SubTitle>
                            Faça seu login para começar{'\n'}uma experiência incrível.
                        </SubTitle>
                    </Header>

                    <Form>
                        <Input
                            iconName='mail'
                            placeholder='E-mail'
                            keyboardType='email-address'
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={setEmail}
                            value={email}
                        />
                        <PasswordInput
                            iconName='lock'
                            placeholder='Senha'
                            onChangeText={setPassword}
                            value={password}
                        />
                    </Form>

                    <Footer>
                        <Button
                            title="Login"
                            onPress={handleSingIn}
                            enabled={true}
                            loading={false}
                        />
                        <Button
                            title="Criar conta gratuita"
                            color={theme.colors.background_secondary}
                            onPress={() => { }}
                            light
                            enabled={true}
                            loading={false}
                        />
                    </Footer>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}