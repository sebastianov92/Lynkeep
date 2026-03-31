"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SidebarItem({
  name,
  logo,
  path,
  className,
  linkClassName,
  style,
  collapseButton,
  right = null,
  dropHighlight = false,
  onDrop,
  onDragOver,
  onDragEnter,
  onDragLeave,
}: {
  name: string;
  logo: React.ReactNode;
  path: string;
  style?: React.CSSProperties;
  className?: string;
  linkClassName?: string;
  right?: React.ReactNode;
  collapseButton?: React.ReactNode;
  dropHighlight?: boolean;
  onDrop?: React.DragEventHandler;
  onDragOver?: React.DragEventHandler;
  onDragEnter?: React.DragEventHandler;
  onDragLeave?: React.DragEventHandler;
}) {
  const currentPath = usePathname();
  const isActive = path === currentPath;
  return (
    <li
      className={cn(
        "group relative flex justify-between rounded-lg text-sm transition-all duration-300 ease-out",
        isActive
          ? "glass-card text-foreground font-medium glow-active"
          : "text-muted-foreground hover:text-foreground hover:bg-accent/40",
        dropHighlight && "glass-card ring-2 ring-primary/40",
        className,
      )}
      style={style}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
    >
      {isActive && (
        <div className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full gradient-accent" />
      )}
      <div className="flex-1">
        {collapseButton}
        <Link
          href={path}
          className={cn(
            "flex items-center gap-x-2 rounded-[inherit] px-3 py-2 transition-transform duration-200",
            isActive && "translate-x-0.5",
            linkClassName,
          )}
        >
          <span
            className={cn(
              "transition-colors duration-200",
              isActive && "text-primary",
            )}
          >
            {logo}
          </span>
          <span title={name} className="line-clamp-1 break-all">
            {name}
          </span>
        </Link>
      </div>
      {right}
    </li>
  );
}
