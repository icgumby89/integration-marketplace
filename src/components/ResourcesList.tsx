import { resources } from "@/data/custom-integrations";

export default function ResourcesList() {
  return (
    <div className="w-full">
      <p className="mb-5 text-sm font-semibold text-[#647382]">Resources</p>
      <div className="overflow-hidden rounded-lg border border-[#d1d5db] bg-[#f6f9f9]">
        {resources.map((resource) => (
          <button
            key={resource.id}
            className="flex w-full items-center justify-between border-b border-[#d1d5db] bg-white p-5 text-left hover:bg-gray-50"
          >
            <div className="flex items-center gap-3.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f6f7f8] text-xs font-semibold text-[#374151]">
                {resource.id}
              </span>
              <span className="text-sm font-semibold text-[#212731]">
                {resource.title}
              </span>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-[#374151]"
            >
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
        <div className="flex items-center gap-2.5 px-7 py-3">
          <span className="text-sm text-[#212731]">
            Lorem ipsum dolor sit amet consectetur?
          </span>
          <button className="text-sm font-semibold text-[#1771b8] underline hover:text-[#125e96]">
            Click here
          </button>
        </div>
      </div>
    </div>
  );
}
