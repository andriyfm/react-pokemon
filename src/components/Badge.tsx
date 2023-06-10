interface BadgeProps {
  text: string;
  isOutline?: boolean;
}

export default function Badge({ text, isOutline }: BadgeProps) {
  const bgColor = isOutline
    ? "bg-transparent border border-slate-500 text-slate-100"
    : "bg-gray-200";

  return (
    <span
      className={`px-2.5 py-1 mx-1 text-[10px] font-semibold uppercase text-gray-500 rounded-full ${bgColor}`}
    >
      {text}
    </span>
  );
}
