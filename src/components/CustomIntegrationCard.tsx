import Link from "next/link";
import type { CustomIntegration } from "@/data/custom-integrations";
import { integrationDetails } from "@/data/integration-details";

function CardIcon({ icon }: { icon: CustomIntegration["icon"] }) {
  const icons: Record<string, React.ReactNode> = {
    webhook: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="#374151">
        <path d="M2 2h5v5H2V2zm7 0h5v5H9V2zm-7 7h5v5H2V9zm7 0h5v5H9V9z" />
      </svg>
    ),
    grid: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="#374151">
        <path d="M1 1h6v6H1V1zm8 0h6v6H9V1zM1 9h6v6H1V9zm8 0h6v6H9V9z" />
      </svg>
    ),
    message: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="#374151">
        <path d="M2 3h12v8H4l-2 2V3zm2 2v1h8V5H4zm0 2v1h6V7H4z" />
      </svg>
    ),
  };

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded border border-[#d1d5db] bg-white">
      {icons[icon]}
    </div>
  );
}

export default function CustomIntegrationCard({
  integration,
}: {
  integration: CustomIntegration;
}) {
  return (
    <div className="flex w-[280px] flex-col rounded-lg border border-[#d1d5db] bg-white px-4 py-5">
      <div className="flex items-center gap-1.5">
        <CardIcon icon={integration.icon} />
        <div className="flex-1 pl-1.5">
          <h3 className="text-[15px] font-bold leading-[1.4] text-[#212731]">
            {integration.name}
          </h3>
          <span className="inline-block rounded bg-[#f6f7f8] px-1.5 py-0.5 text-xs font-medium text-[#212731]">
            Custom Integration
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-[#647382]">
        {integration.description}
      </p>
      <div className="mt-5">
        {integrationDetails[integration.id] ? (
          <Link
            href={`/integration/${integration.id}`}
            className="rounded border border-[#1771b8] px-3 py-1 text-xs font-semibold text-[#1771b8] hover:bg-[#f1f8fd]"
          >
            Learn more
          </Link>
        ) : (
          <button className="rounded border border-[#1771b8] px-3 py-1 text-xs font-semibold text-[#1771b8] hover:bg-[#f1f8fd]">
            Learn more
          </button>
        )}
      </div>
    </div>
  );
}
