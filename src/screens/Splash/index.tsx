import React from 'react';
import { Button, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

import {
    Container
} from './styles';

export function Splash() {

    const animation = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: animation.value }]
        }
    });

    function handleAnimationPosition() {
        animation.value = Math.random() * 300;
    }

    return (
        <Container>
            <Animated.View style={[styles.box, animatedStyle]} />
            <Button title="Mover" onPress={handleAnimationPosition} />
        </Container>
    );
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
});