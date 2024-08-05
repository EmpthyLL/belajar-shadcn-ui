import { ResponsiveTimeRange } from '@nivo/calendar';
import React from 'react';

interface DataPoint {
    day: string; // Should be in YYYY-MM-DD format
    value: number;
}

interface MyResponsiveCalendarProps {
    data: DataPoint[]; // Array of objects with day and value
    year: string; // Year to display
}

export const MyResponsiveCalendar: React.FC<MyResponsiveCalendarProps> = ({ data, year }) => (
    <ResponsiveTimeRange
        data={data.map(item => ({ day: item.day, value: item.value }))}
        from={`${year}-01-01`}
        to={`${year}-07-31`}
        emptyColor="#eeeeee"
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
    />
);
