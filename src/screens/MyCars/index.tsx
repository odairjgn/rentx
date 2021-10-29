import React, { useState, useEffect } from 'react';
import { CarDTO } from '../../dtos/carDTO';
import { api } from '../../services/api';

import {
    Container
} from './styles';

export function MyCars() {
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get(`/schedules_byuser?user_id=1`);
                setCars(response.data as CarDTO[]);
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }

        fetchCars();
    }, [])

    return (
        <Container>

        </Container>
    );
}