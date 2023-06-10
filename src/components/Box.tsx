export default function Box({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const lowestValue = value < 50;
  const highestValue = value > 90;
  const color = highestValue
    ? "text-[#64D368]"
    : lowestValue
    ? "text-[#D93E30]"
    : "text-[#F5DB13]";
  const borderColor = highestValue
    ? "border-[#64D368]"
    : lowestValue
    ? "border-[#D93E30]"
    : "border-[#F5DB13]";

  return (
    <div
      className={`flex flex-col items-center justify-center gap-0 border rounded-full w-36 h-36  bg-[#223150] ${borderColor}`}
    >
      <div className={`text-4xl font-bold ${color}`}>{value}</div>
      <div className="text-sm capitalize text-slate-200">{label}</div>
    </div>
  );
}
