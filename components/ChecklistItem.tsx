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
      role="checkbox"
      aria-checked={checked}
      className={`checkbox-container w-full text-left ${checked ? "completed" : ""} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } animate-fade-in`}
    >
      <div className={`custom-checkbox ${checked ? "checked" : ""}`}>
        {checked && <Check size={16} strokeWidth={3} aria-hidden="true" />}
      </div>
      <div className="flex-1 min-w-0">
        <p
          className={`font-medium transition-colors duration-300 ${
            checked
              ? "text-[var(--gold)] line-through decoration-[var(--gold-muted)] decoration-1"
              : "text-[var(--text-primary)]"
          }`}
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          {label}
        </p>
        {description && (
          <p className="text-sm text-[var(--text-muted)] mt-0.5 italic">{description}</p>
        )}
      </div>
    </button>
  );
}
