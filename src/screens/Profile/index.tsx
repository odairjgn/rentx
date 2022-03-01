import React from 'react';
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
    PhotoButton
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function Profile(){
    const theme = useTheme();
    const navigation = useNavigation();

    function handleBack(){
        navigation.goBack();
    }

    function handleSignOut(){

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
            
        </Container>
    );
}