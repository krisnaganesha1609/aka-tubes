"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className={`${pathname == "/" ? "hidden" : "absolute"} mt-10 ml-10`}>
      <ul>
        <li className="border-2 border-blue-500 p-2 hover:bg-blue-500 hover:border-white">
          <Link
            href={"/"}
            className="font-[family-name:var(--font-geist-sans)]"
          >
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
