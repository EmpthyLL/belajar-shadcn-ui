import { ResponsiveBump } from '@nivo/bump';
import React from 'react';
import { dataBumps } from '@/lib/data';

interface MyResponsiveBumpProps {
    data: any;
}

export const MyResponsiveBump: React.FC<MyResponsiveBumpProps> = ({ data, ...otherProps }:any) => (
    <ResponsiveBump
        data={dataBumps}
        colors={{ scheme: 'spectral' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36,
            truncateTickAt: 0
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ranking',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        margin={{ top: 40, right: 60, bottom: 40, left: 20 }}
        axisRight={null}
        useMesh={true} // Include any other required props
        xOuterPadding={0} // Example additional prop
        {...otherProps} // Spread other props
    />
);
