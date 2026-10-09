"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, ChevronRight } from "lucide-react";

interface SearchItem {
  id: string;
  name: string;
  index: number;
  icon: React.ReactNode;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: SearchItem[];
  onSelect: (index: number) => void;
}

export function SearchModal({
  isOpen,
  onClose,
  items,
  onSelect,
}: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md border-zinc-800 bg-black p-5 shadow-2xl rounded-3xl text-white">
        <DialogHeader>
          <DialogTitle className="sr-only">Search</DialogTitle>
        </DialogHeader>

        {/* Search Input Bar */}
        <div className="relative flex items-center w-full mb-3">
          <Search className="absolute left-3.5 h-4 w-4 text-zinc-500 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search platforms (e.g. instagram, github, x)..."
            autoFocus
            className="w-full h-12 pl-10 pr-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-600 transition-colors"
          />
        </div>

        {/* Results List */}
        <div className="max-h-64 overflow-y-auto space-y-1 pr-1 scrollbar-none">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs text-zinc-500">
              No matching platforms found
            </div>
          ) : (
            filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelect(item.index);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-950 border border-zinc-800/80 shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-white text-sm tracking-tight truncate">
                    {item.name}
                  </span>
                </div>
                <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-white transition-colors shrink-0" />
              </button>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
