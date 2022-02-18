import React from 'react';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
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
    return (
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
                />
            </Form>

            <Footer>
                <Button
                    title="Login"
                    onPress={() => { }}
                    enabled={false}
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
    );
}