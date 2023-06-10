type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-[#F5DB13] font-semibold text-slate-700 px-4 py-2 rounded-md text-sm hover:bg-[#F2B807] transition-colors ${props.className}`}
    >
      {props.children}
    </button>
  );
}
