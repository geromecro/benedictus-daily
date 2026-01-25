"use client";

import { Check } from "lucide-react";

interface ChecklistItemProps {
  id: string;
  label: string;
  description?: string;
  checked: boolean;
  onToggle: (id: string) => void;
  disabled?: boolean;
}

export default function ChecklistItem({
  id,
  label,
  description,
  checked,
  onToggle,
  disabled = false,
}: ChecklistItemProps) {
  return (
    <button
      onClick={() => !disabled && onToggle(id)}
      disabled={disabled}
      className={`checkbox-container w-full text-left ${checked ? "completed" : ""} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <div className={`custom-checkbox ${checked ? "checked" : ""}`}>
        {checked && <Check size={16} strokeWidth={3} />}
      </div>
      <div className="flex-1 min-w-0">
        <p
          className={`font-medium ${
            checked ? "text-[var(--success)] line-through" : "text-[var(--text-primary)]"
          }`}
        >
          {label}
        </p>
        {description && (
          <p className="text-sm text-[var(--text-muted)] mt-0.5">{description}</p>
        )}
      </div>
    </button>
  );
}
