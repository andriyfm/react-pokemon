interface ProgressBarProps {
  progress: number;
  label: string;
}

function ProgressBar({ progress, label }: ProgressBarProps) {
  const formatedLabel = label.replace("-", " ");
  const color =
    progress < 50
      ? "bg-[#D93E30]"
      : progress > 90
      ? "bg-[#64D368]"
      : "bg-[#F5DB13]";

  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm capitalize">{`${formatedLabel} (${progress})`}</div>
      <div className="w-full h-2 rounded bg-slate-700">
        <div
          className={`h-full rounded max-w-full ${color}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
