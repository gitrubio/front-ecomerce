import { Command, CommandInput } from "@/components/ui/command";
import { X } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialValue?: string;
}

export function SearchBar({ onSearch, initialValue = "" }: SearchBarProps) {
  const [value, setValue] = useState(initialValue);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(value.trim());
    }
  };

  const clearSearch = () => {
    setValue("");
    onSearch("");
  };
  return (
    <div className="flex items-center justify-end">
      <Command className="rounded-lg border shadow-md w-[300px]">
        <CommandInput
          placeholder="Buscar..."
          value={value}
          onValueChange={setValue}
          onKeyDown={handleKeyDown}
        />
      </Command>
      {value && (
        <button
          onClick={clearSearch}
          className="p-2 text-gray-500 hover:text-gray-800 absolute right-100%"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
