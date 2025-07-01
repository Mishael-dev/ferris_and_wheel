"use client";
import Image from "next/image";
import { Button } from "./ui/button";

import { useState } from "react";
import Link from "next/link";
import Container from "./ui/container";

interface NavItem {
  label: string;
  url: string;
}

interface DropdownProps {
  items: NavItem[];
}

export function Dropdown({ items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="m-1 relative inline-flex md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Dropdown"
      >
        Pages
        <svg
          className={`size-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full mt-2 min-w-60 bg-white shadow-md rounded-lg dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 z-10"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="p-1 space-y-0.5">
            {items.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const navItems = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/services" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <header className=" border-b py-2">
      <Container>
        <div className="flex items-center justify-between ">
          <span>
            <Image src={"/logo.png"} height={50} width={50} alt="logo" />
          </span>

          <nav className="p-1 space-y-0.5 hidden md:flex w-md justify-between">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div>
            <Dropdown items={navItems} />
            <Link href={"/contact"}>
              <Button>Buy A House</Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
