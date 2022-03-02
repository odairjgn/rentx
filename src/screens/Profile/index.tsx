import React, { useState } from 'react';
import { BackButtom } from '../../components/BackButtom';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import {
    Container,
    Header,
    HeaderTop,
    HeaderTitle,
    LogoutButton,
    PhotoContainer,
    Photo,
    PhotoButton,
    Content,
    Options,
    Option,
    OptionTitle,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function Profile(){
    const [option, setOption] = useState<'dataEdit'|'passwordEdit'>('dataEdit');    

    const theme = useTheme();
    const navigation = useNavigation();

    function handleBack(){
        navigation.goBack();
    }

    function handleSignOut(){

    }

    function handleOptionChange(optionSelected: 'dataEdit'|'passwordEdit'){
        setOption(optionSelected);
    }


    return (
        <Container>
            <Header>
                <HeaderTop>
                    <BackButtom 
                    color={theme.colors.shape} 
                    onPress={handleBack}/>
                    <HeaderTitle>Editar Perfil</HeaderTitle>
                    <LogoutButton onPress={handleSignOut}>
                        <Feather 
                        name="power" 
                        size={24} 
                        color={theme.colors.shape} />
                    </LogoutButton>
                </HeaderTop>

                <PhotoContainer>
                    <Photo source={{uri: 'https://i.pinimg.com/originals/e9/52/a9/e952a9ecaf60314e64f96a4ceb59933f.jpg'}}/>
                    <PhotoButton onPress={()=>{}}>
                        <Feather 
                        name="camera" 
                        size={24} 
                        color={theme.colors.shape} />
                    </PhotoButton>
                </PhotoContainer>
            </Header>
            <Content>
                <Options>
                    <Option 
                        active={option === 'dataEdit'}
                        onPress={()=>handleOptionChange('dataEdit')}
                    >
                        <OptionTitle active={option === 'dataEdit'}>
                            Dados
                        </OptionTitle>
                    </Option>
                    <Option 
                        active={option === 'passwordEdit'}
                        onPress={()=>handleOptionChange('passwordEdit')}
                    >
                        <OptionTitle active={option === 'passwordEdit'}>
                            Trocar Senha
                        </OptionTitle>
                    </Option>
                </Options>
            </Content>
        </Container>
    );
}