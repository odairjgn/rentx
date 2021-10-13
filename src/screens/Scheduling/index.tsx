import React from 'react';
import { useTheme } from 'styled-components';
import { BackButtom } from '../../components/BackButtom';
import { useNavigation } from '@react-navigation/native';

import ArrowSVG from '../../assets/arrow.svg';

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer
} from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

export function Scheduling() {

    const theme = useTheme();
    const navigation = useNavigation();

    function handleConfirmRental() {
        navigation.navigate("SchedulingDetails");
    }

    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
                <BackButtom
                    onPress={() => { }}
                    color={theme.colors.shape}
                />

                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim de aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}>
                            18/06/2021
                        </DateValue>
                    </DateInfo>

                    <ArrowSVG />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false}>
                            18/06/2021
                        </DateValue>
                    </DateInfo>
                </RentalPeriod>

            </Header>

            <Content>
                <Calendar />
            </Content>

            <Footer>
                <Button title="Confirmar" onPress={handleConfirmRental} />
            </Footer>
        </Container>
    );
}