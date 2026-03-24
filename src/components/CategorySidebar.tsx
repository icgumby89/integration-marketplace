"use client";

import { categories } from "@/data/integrations";

type CategorySidebarProps = {
  selected: string;
  onSelect: (category: string) => void;
  activeCount?: number;
};

export default function CategorySidebar({ selected, onSelect, activeCount = 0 }: CategorySidebarProps) {
  const allCategories = [
    categories[0],
    { name: "Active", count: activeCount },
    ...categories.slice(1),
  ];

  return (
    <div className="shrink-0">
      <h2 className="py-0.5 text-base font-bold text-[#212731]">Categories</h2>
      <div className="mt-3.5 flex w-[184px] flex-col">
        {allCategories.map((cat) => {
          const isActive = selected === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => onSelect(cat.name)}
              className={`flex h-[55px] items-center gap-3 rounded px-3 py-4 text-left ${
                isActive ? "bg-[#f1f8fd]" : "bg-white hover:bg-gray-50"
              }`}
            >
              <span
                className={`flex-1 text-sm font-semibold ${
                  isActive ? "text-[#1771b8]" : "text-[#212731]"
                }`}
              >
                {cat.name}
              </span>
              <span
                className={`rounded-lg px-1.5 py-1 text-xs font-medium ${
                  isActive
                    ? "bg-[#0a2a44] text-white"
                    : "border border-[#d1d5db] text-[#212731]"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
