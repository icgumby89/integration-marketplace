import Image from "next/image";
import Link from "next/link";
import type { Integration } from "@/data/integrations";
import { integrationDetails } from "@/data/integration-details";

type IntegrationCardProps = {
  integration: Integration;
  isConnected?: boolean;
};

export default function IntegrationCard({ integration, isConnected }: IntegrationCardProps) {
  return (
    <div className="flex h-[241px] w-[280px] flex-col rounded-lg border border-[#d1d5db] bg-white px-4 py-5">
      <div className="relative flex flex-1 flex-col gap-3">
        {/* Trophy badge or Active badge in top-right */}
        {isConnected ? (
          <div className="absolute right-0 top-0 flex items-center gap-1 rounded-full bg-[#effaf6] px-2 py-0.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1ba148] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1ba148]" />
            </span>
            <span className="text-xs font-medium text-[#374151]">Active</span>
          </div>
        ) : integration.featured ? (
          <div className="absolute right-0 top-0 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#f1f8fd] shadow-[0px_4px_8px_-2px_rgba(55,65,81,0.1),0px_2px_4px_-2px_rgba(55,65,81,0.06)]">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="#1771b8">
              <path d="M4 2h8v5a4 4 0 0 1-8 0V2zM2 3h2v3H2.5A1.5 1.5 0 0 1 1 4.5v0A1.5 1.5 0 0 1 2.5 3H2zm12 0h-2v3h1.5A1.5 1.5 0 0 0 15 4.5v0A1.5 1.5 0 0 0 13.5 3H14zM6 12h4v2H6v-2zm-1 0v2H5a1 1 0 0 1-1-1v0a1 1 0 0 1 1-1h0zm6 0v2h0a1 1 0 0 0 1-1v0a1 1 0 0 0-1-1h0zM7 9.5h2V12H7V9.5z" />
            </svg>
          </div>
        ) : null}

        {/* Header */}
        <div className="flex items-center gap-1.5">
          <div className="flex h-10 items-center justify-center rounded border border-[#d1d5db] px-2 py-3">
            <Image
              src={integration.logo}
              alt={`${integration.name} logo`}
              width={24}
              height={24}
              className="object-cover"
            />
          </div>
          <div className="flex-1 pl-1.5">
            <h3 className="text-base font-bold leading-[1.4] text-[#212731]">
              {integration.name}
            </h3>
            <span className="inline-block rounded bg-[#f6f7f8] px-1.5 py-0.5 text-xs font-medium text-[#212731]">
              {integration.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="flex-1 text-sm leading-6 text-[#647382]">
          {integration.description}
        </p>

        {/* Buttons */}
        <div className="mt-auto flex gap-[13px]">
          {integrationDetails[integration.id] ? (
            <Link
              href={`/integration/${integration.id}`}
              className="min-w-[80px] rounded border border-[#1771b8] px-3 py-1 text-center text-xs font-semibold text-[#1771b8] hover:bg-[#f1f8fd]"
            >
              Learn more
            </Link>
          ) : (
            <button className="min-w-[80px] rounded border border-[#1771b8] px-3 py-1 text-xs font-semibold text-[#1771b8] hover:bg-[#f1f8fd]">
              Learn more
            </button>
          )}
          {!isConnected && (
            <button className="min-w-[80px] rounded bg-[#1771b8] px-3 py-1 text-xs font-semibold text-white hover:bg-[#125e96]">
              Connect
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
