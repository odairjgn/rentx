import React from 'react';
import { BackButtom } from '../../components/BackButtom';
import { ImageSlider } from '../../components/ImageSlider';

import {
    Container,
    Header,
    CarImages
} from './styles';

export function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButtom onPress={() => { }} />
            </Header>
            <CarImages>
                <ImageSlider
                    imagesUrl={['http://4.bp.blogspot.com/-IkezPUE2c0I/UqHHDMG6XdI/AAAAAAAAF5Y/abl6wQb1atU/s1600/carro1.png']}
                />
            </CarImages>
        </Container>
    );
}