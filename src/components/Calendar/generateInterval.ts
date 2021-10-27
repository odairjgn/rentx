import { eachDayOfInterval, format, parseISO } from 'date-fns';

import { MarkedDatesProps, DayProps } from '.';
import { getPlatfomeDate } from '../../utils/getPlatformDate';
import theme from '../../styles/theme';

export function generateInvertal(start: DayProps, end: DayProps) {
    let interval: MarkedDatesProps = {};

    eachDayOfInterval({ start: parseISO(start.dateString), end: parseISO(end.dateString) })
        .forEach((item) => {
            const date = format(getPlatfomeDate(item), 'yyyy-MM-dd');

            interval = {
                ...interval,
                [date]: {
                    color: start.dateString === date || end.dateString === date
                        ? theme.colors.main : theme.colors.main_light,

                    textColor: start.dateString === date || end.dateString === date
                        ? theme.colors.main_light : theme.colors.main
                }
            };
        });

    return interval;
}