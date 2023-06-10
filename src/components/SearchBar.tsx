interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        placeholder="Search Pokemon"
        className="w-[500px] h-[50px] border-[1px] rounded-lg px-5 active:border-yellow-400 focus:border-yellow-400 focus:outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
