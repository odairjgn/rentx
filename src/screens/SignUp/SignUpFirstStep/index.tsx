import React from 'react';
import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButtom } from '../../../components/BackButtom';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import * as Yup from 'yup';

import {
    Container,
    Header,
    Steps,
    Title,
    Subtitle,
    Form,
    FormTitle
} from './styles';

export function SignUpFirstStep() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [driverLicense, setDriverLicense] = React.useState('');

    const navigation = useNavigation();

    function handleBack() {
        navigation.goBack();
    }

    async function handleNextStep() {
        try {
            const schema = Yup.object().shape({
                name: Yup.string()
                    .required('Nome obrigatório'),
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('E-mail inválido'),
                driverLicense: Yup.string()
                    .required('CNH é obrigatório')
            });

            const data = { name, email, driverLicense };
            await schema.validate(data);

            navigation.navigate('SignUpSecondStep', { user: data });
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                return Alert.alert('Opa', error.message);
            }
        }
    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <BackButtom onPress={handleBack} />
                        <Steps>
                            <Bullet active />
                            <Bullet />
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
                        <FormTitle>1. Dados</FormTitle>
                        <Input
                            iconName='user'
                            placeholder='Nome'
                            onChangeText={setName}
                            value={name}
                        />
                        <Input
                            iconName='mail'
                            placeholder='E-mail'
                            keyboardType='email-address'
                            onChangeText={setEmail}
                            value={email}
                        />
                        <Input
                            iconName='credit-card'
                            placeholder='CNH'
                            keyboardType='numeric'
                            onChangeText={setDriverLicense}
                            value={driverLicense}
                        />
                    </Form>

                    <Button
                        title='Próximo'
                        onPress={handleNextStep}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}