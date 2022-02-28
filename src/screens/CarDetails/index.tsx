import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButtom } from '../../components/BackButtom';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { CarDTO } from '../../dtos/carDTO';
import { useTheme } from 'styled-components';
import Animated,
{
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate,
    Extrapolate
}
    from 'react-native-reanimated';

import {
    Container,
    Header,
    CarImages,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Accessories,
    Footer
} from './styles';

interface Params {
    car: CarDTO;
}

import { useNavigation, useRoute } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StatusBar, StyleSheet } from 'react-native';


export function CarDetails() {

    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Params;

    const theme = useTheme();

    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y;
    });

    const headerStyleAnimation = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 200],
                [200, 70],
                Extrapolate.CLAMP
            )
        }
    });

    const sliderCarsStyleAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [0, 150],
                [1, 0],
                Extrapolate.CLAMP
            )
        }
    });

    function handleConfirmRental() {
        navigation.navigate("Scheduling" as never, { car } as never);
    }

    function handleBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <Animated.View
                style={[
                    headerStyleAnimation,
                    styles.header,
                    { backgroundColor: theme.colors.background_secondary }
                ]}
            >
                <Header>
                    <BackButtom onPress={handleBack} />
                </Header>
                <Animated.View style={sliderCarsStyleAnimation}>
                    <CarImages>
                        <ImageSlider
                            imagesUrl={car.photos}
                        />
                    </CarImages>
                </Animated.View>
            </ Animated.View>

            <Animated.ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingTop: getStatusBarHeight() + 160
                }}
                showsVerticalScrollIndicator={false}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
            >
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                    <Rent>
                        <Period>{car.period}</Period>
                        <Price>R$ {car.price}</Price>
                    </Rent>
                </Details>
                <Accessories>
                    {
                        car.accessories.map(accessory => (
                            <Accessory
                                key={accessory.type}
                                name={accessory.name}
                                icon={getAccessoryIcon(accessory.type)}
                            />
                        ))
                    }
                </Accessories>

                <About>
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                </About>
            </Animated.ScrollView>

            <Footer>
                <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
            </Footer>
        </Container >
    );
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        overflow: 'hidden',
        zIndex: 1
    }
});