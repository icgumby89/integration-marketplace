import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "#" },
  { label: "Templates", href: "#" },
  { label: "Contacts", href: "#" },
  { label: "Metrics", href: "#" },
  { label: "Automation", href: "#" },
  { label: "Actions", href: "#" },
  { label: "Settings", href: "#" },
];

type HeaderProps = {
  activePage?: string;
};

export default function Header({ activePage }: HeaderProps) {
  return (
    <header>
      {/* Main Nav */}
      <div className="bg-white px-6 py-2.5">
        <div className="mx-auto flex max-w-[1104px] items-center justify-between">
          <Link href="/" className="flex h-[43px] items-center text-[24px] font-bold tracking-wide text-[#212731]">
            SPECTORA
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex w-[318px] items-center gap-2 rounded-md border border-[#6b7280] bg-white p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111827"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <span className="text-base text-[#374151]">Search</span>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5c9ccf]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </div>
            <div className="flex items-center">
              <div className="h-9 w-9 overflow-hidden rounded-full bg-[#5c9ccf]">
                <Image
                  src="/images/e5e8af41-ed87-43ec-bf87-18d78ac54f8f.png"
                  alt="User avatar"
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </div>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                className="ml-2"
              >
                <path
                  d="M2 6l3 3 3-3"
                  stroke="#374151"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Nav */}
      <nav className="bg-[#45769c] px-6">
        <div className="mx-auto flex max-w-[1104px] items-center">
          <div className="flex flex-1 items-center gap-8 pl-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2 py-4 text-[15px] font-medium text-white hover:opacity-80 ${
                  activePage === item.label ? "border-b-2 border-white" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="#"
            className="flex items-center gap-2 py-4 text-[15px] font-medium text-white hover:opacity-80"
          >
            Support Center
          </Link>
        </div>
      </nav>
    </header>
  );
}
