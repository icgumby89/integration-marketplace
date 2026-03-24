"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import CategorySidebar from "@/components/CategorySidebar";
import IntegrationCard from "@/components/IntegrationCard";
import CustomIntegrationCard from "@/components/CustomIntegrationCard";
import ResourcesList from "@/components/ResourcesList";
import Pagination from "@/components/Pagination";
import { integrations } from "@/data/integrations";
import { customIntegrations } from "@/data/custom-integrations";

const heroContent: Record<string, { title: string; description: string }> = {
  default: {
    title: "Integrations",
    description:
      "Browse dozens of integrations to connect calendars, CRMs, payment processors, and more.",
  },
  "Custom Integration": {
    title: "Custom Integration",
    description:
      "Our Public API and push events give you full control to build custom integrations - from syncing data with your CRM to automating workflows across your business.",
  },
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [connectedIds, setConnectedIds] = useState<string[]>([]);

  useEffect(() => {
    setConnectedIds(JSON.parse(localStorage.getItem("connectedIntegrations") || "[]"));
  }, []);

  const isCustom = selectedCategory === "Custom Integration";
  const hero = heroContent[selectedCategory] || heroContent["default"];

  const categoryFiltered =
    selectedCategory === "Active"
      ? integrations.filter((i) => connectedIds.includes(i.id))
      : selectedCategory === "All" || isCustom
        ? integrations
        : selectedCategory === "Featured"
          ? integrations.filter((i) => i.featured)
          : integrations.filter((i) => i.category === selectedCategory);

  const filteredIntegrations = searchQuery
    ? categoryFiltered.filter((i) =>
        i.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categoryFiltered;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#f6f9f9]">
        <div className="mx-auto flex h-[275px] max-w-[1104px] items-center justify-between px-6">
          <div className="max-w-[430px]">
            <h1 className="text-[32px] font-bold leading-[1.35] text-[#212731]">
              {hero.title}
            </h1>
            <p className="mt-2.5 text-sm leading-6 text-[#374151]">
              {hero.description}
            </p>
          </div>
          <div className="relative h-[203px] w-[372px]">
            <Image
              src="/images/20068c27-143a-4da6-ad94-637f7a9a5806.png"
              alt="Integration icons illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto flex max-w-[1104px] gap-9 py-10">
        {/* Sidebar */}
        <CategorySidebar
          selected={selectedCategory}
          onSelect={(cat) => {
            setSelectedCategory(cat);
            setCurrentPage(1);
          }}
          activeCount={connectedIds.length}
        />

        {/* Content Area */}
        <div className="flex-1">
          {isCustom ? (
            /* Custom Integration View */
            <div className="flex flex-col gap-10">
              {/* Cards section */}
              <div className="border-b border-[#d1d5db] pb-10">
                <div className="mb-5 flex items-center justify-end">
                  <span className="text-xs font-medium text-[#647382]">
                    1-3 of 3 results
                  </span>
                </div>
                <div className="flex gap-[22px]">
                  {customIntegrations.map((ci) => (
                    <CustomIntegrationCard key={ci.id} integration={ci} />
                  ))}
                </div>
              </div>

              {/* Resources section */}
              <ResourcesList />
            </div>
          ) : (
            /* Default Integrations View */
            <>
              {/* Search & Filters */}
              <div className="mb-[30px] flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex h-[44px] w-[280px] items-center gap-2 rounded border border-[#d1d5db] bg-white px-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="2"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery ?? ""}
                      onChange={(e) => {
                        setSearchQuery(e.target.value ?? "");
                        setCurrentPage(1);
                      }}
                      className="flex-1 bg-transparent text-base text-[#374151] outline-none placeholder:text-[#647382]"
                    />
                  </div>
                  <button className="flex items-center gap-1 rounded border border-[#d1d5db] px-4 py-3 text-sm font-semibold text-[#374151]">
                    Integration type
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M3 5l3 3 3-3"
                        stroke="#374151"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                <span className="text-xs font-medium text-[#647382]">
                  {Math.min((currentPage - 1) * 15 + 1, filteredIntegrations.length)}-{Math.min(currentPage * 15, filteredIntegrations.length)} of {filteredIntegrations.length} results
                </span>
              </div>

              {/* Integration Cards Grid */}
              <div className="flex flex-col gap-5">
                {Array.from(
                  { length: Math.ceil(filteredIntegrations.slice((currentPage - 1) * 15, currentPage * 15).length / 3) },
                  (_, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="flex items-start gap-6"
                    >
                      {filteredIntegrations
                        .slice((currentPage - 1) * 15, currentPage * 15)
                        .slice(rowIndex * 3, rowIndex * 3 + 3)
                        .map((integration) => (
                          <IntegrationCard
                            key={integration.id}
                            integration={integration}
                            isConnected={connectedIds.includes(integration.id)}
                          />
                        ))}
                    </div>
                  )
                )}
              </div>

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={Math.max(1, Math.ceil(filteredIntegrations.length / 15))}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </div>
      </section>

      {/* Custom Build CTA - only show on default view */}
      {!isCustom && (
        <section className="px-6 py-16">
          <div className="mx-auto relative max-w-[1104px] overflow-hidden rounded-lg bg-[#f6f7f8]">
            <div className="flex items-center justify-between px-[108px] py-[88px]">
              <div className="flex max-w-[429px] flex-col gap-6">
                <div className="flex flex-col gap-[5px]">
                  <h2 className="text-2xl font-bold leading-[1.4] text-[#212731]">
                    Custom build an Integration
                  </h2>
                  <p className="text-base leading-7 text-[#374151]">
                    You can build a custom integration for just your team or
                    publish it to the Spectora Marketplace, where any Spectora
                    user can install it.
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-1 rounded bg-[#1771b8] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125e96]">
                    Read docs
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="pl-1"
                    >
                      <path
                        d="M4 10h12M11 5l5 5-5 5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <Link
                    href="/custom-api"
                    className="text-sm font-semibold text-[#1771b8] hover:underline"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute right-[166px] top-[56px] h-[255px] w-[238px]">
              <Image
                src="/images/e38ca698-9f9a-4b14-a634-c15623d5bc13.png"
                alt="Custom integration illustration"
                fill
                className="rounded-[34px] object-cover"
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
