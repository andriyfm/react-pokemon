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
      <div className="w-full h-2 bg-gray-200 rounded">
        <div
          className={`h-full rounded ${color}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
