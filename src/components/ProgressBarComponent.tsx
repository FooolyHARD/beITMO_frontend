import React, { useEffect, useState } from "react";

type CircularProgressProps = {
  size: number;
  strokeWidth: number;
  percentage: number;
  color: string;
};

const ProgressBarComponent: React.FC<CircularProgressProps> = ({
  size,
  strokeWidth,
  percentage,
  color,
}) => {
  const [progress, setProgress] = useState<number>(0);
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  const viewBox: string = `0 0 ${size} ${size}`;
  const radius: number = (size - strokeWidth) / 2;
  const circumference: number = radius * Math.PI * 2;
  const dash: number = (progress * circumference) / 100;

  return (
    <svg width={size} height={size} viewBox={viewBox}>
      <circle
        fill="none"
        stroke="#ccc"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        fill="none"
        stroke={color}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={`${dash} ${circumference - dash}`}
        strokeLinecap="round"
        style={{ transition: "all 0.5s" }}
      />
      <text
        fill="black"
        fontSize="20px"
        x="50%"
        y="50%"
        dy="8px"
        textAnchor="middle"
      >
        {`${percentage}`}
      </text>
    </svg>
  );
};

export default ProgressBarComponent;