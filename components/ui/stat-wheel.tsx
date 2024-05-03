const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ color, pct = 100 }: { color: any; pct?: number }) => {
  const r = 30;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={160}
      cy={40}
      fill="#243228"
      stroke={strokePct !== circ ? color : ""} // remove color as 0% sets full circumference
      strokeWidth={"4px"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage, color }: { percentage: number; color: any }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1.4em"}
      fontWeight={"600"}
      fill={color}
    >
      {percentage.toFixed(0)}
    </text>
  );
};

const Pie = ({ percentage, color }: { percentage: number; color: any }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={80} height={80}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle color="#243228" />
        <Circle color={color} pct={pct} />
      </g>
      <Text color={color} percentage={pct} />
    </svg>
  );
};

export default Pie;
