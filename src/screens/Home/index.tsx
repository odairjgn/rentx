import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList
} from './styles';


export function Home() {
  const navigation = useNavigation();

  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    thumbnail: 'http://4.bp.blogspot.com/-IkezPUE2c0I/UqHHDMG6XdI/AAAAAAAAF5Y/abl6wQb1atU/s1600/carro1.png'
  };

  function handleDatails() {
    navigation.navigate("CarDetails");
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={carData} onPress={handleDatails} />}
      />

    </Container >
  );
}