import React from 'react';

interface BarStaffProps {
  height: number;
  width: number;
  lineColor?: string;
}

const SongStaff: React.FC<BarStaffProps> = ({
  height,
  width,
  lineColor = '#666',
}) => {
  const viewboxCalc = `0 0 ${width} ${height}`;
  const staffGapDistance = (height - 1) / 4;

  return (
    <div style={{ height: height, width: width }}>
      <svg id="bar" xmlns="http://www.w3.org/2000/svg" viewBox={viewboxCalc}>
        <line
          style={{ fill: 'none', stroke: lineColor, strokeMiterlimit: 10 }}
          y1={height - 0.5}
          x2={width}
          y2={height - 0.5}
        />
        <line
          style={{ fill: 'none', stroke: lineColor, strokeMiterlimit: 10 }}
          y1={staffGapDistance * 3 + 0.5}
          x2={width}
          y2={staffGapDistance * 3 + 0.5}
        />
        <line
          style={{ fill: 'none', stroke: lineColor, strokeMiterlimit: 10 }}
          y1={staffGapDistance * 2 + 0.5}
          x2={width}
          y2={staffGapDistance * 2 + 0.5}
        />
        <line
          style={{ fill: 'none', stroke: lineColor, strokeMiterlimit: 10 }}
          y1={staffGapDistance * 1 + 0.5}
          x2={width}
          y2={staffGapDistance * 1 + 0.5}
        />
        <line
          style={{ fill: 'none', stroke: lineColor, strokeMiterlimit: 10 }}
          y1="0.5"
          x2={width}
          y2="0.5"
        />
        {/* <line
        style={{
          fill: 'none',
          stroke: lineColor,
          strokeMiterlimit: 10,
          strokeWidth: '0.5px',
        }}
        x1="359.73"
        y1="0.5"
        x2="359.73"
        y2="72.5"
        />
        <line
        style={{
          fill: 'none',
          stroke: lineColor,
          strokeMiterlimit: 10,
          strokeWidth: '0.5px',
        }}
        x1="0.25"
        y1="0.5"
        x2="0.25"
        y2="72.5"
      /> */}
      </svg>
    </div>
  );
};

export default SongStaff;
