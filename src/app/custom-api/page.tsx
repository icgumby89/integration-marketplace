"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import CustomIntegrationCard from "@/components/CustomIntegrationCard";
import { customIntegrations } from "@/data/custom-integrations";

const sidebarItems = [
  "How it works",
  "Steps",
  "Custom Integration",
  "Resources",
];

const steps = [
  {
    label: "Choose your integration type",
    image:
      "/images/385baab3-57fa-43f0-9d5a-bb0529a9e3ea.png",
  },
  {
    label: "Configure permissions",
    image:
      "/images/9807576e-ed64-47f1-ba38-d7cad5822b5d.png",
  },
  {
    label: "Enter your API key",
    image:
      "/images/9ee6fece-efe0-40a4-87ee-ffd24b46ef4a.png",
  },
  {
    label: "Test your connection",
    image:
      "/images/151384d2-21f1-45c3-b783-3d0b8fd597ec.png",
  },
];

const docArticles = [
  "Lorem ipsum dolor sit amet consectetur",
  "Lorem ipsum dolor sit amet consectetur",
  "Lorem ipsum dolor sit amet consectetur",
  "Lorem ipsum dolor sit amet consectetur",
];

export default function CustomApiPage() {
  const [activeSection, setActiveSection] = useState("How it works");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Product Header */}
      <section className="border-b border-[#d1d5db] bg-white">
        <div className="mx-auto flex h-[275px] max-w-[1104px] items-center justify-between px-6">
          <div className="flex items-start gap-4">
            {/* Code Icon */}
            <div className="flex h-[101px] w-[101px] shrink-0 items-center justify-center rounded border border-[#d1d5db] bg-white">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="text-[#374151]"
              >
                <path
                  d="M12 14l-6 6 6 6M28 14l6 6-6 6M22 10l-4 20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="max-w-[430px]">
              <div className="flex items-center gap-3">
                <h1 className="whitespace-nowrap text-[32px] font-bold leading-[1.35] text-[#212731]">
                  Custom API Integration
                </h1>
                <span className="rounded bg-[#f6f7f8] px-1.5 py-0.5 text-xs font-medium text-[#212731]">
                  Developer
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-6 text-[#374151]">
                Build a custom integration to sync inspection data, automate
                workflows, or send information to any external service.
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="text-sm font-semibold text-[#1771b8] hover:underline"
          >
            Return to Integrations
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-[1104px] py-10">
        <div className="flex gap-[30px]">
          {/* Sidebar Navigation */}
          <div className="shrink-0">
            <div className="flex w-[184px] flex-col">
              {sidebarItems.map((item) => {
                const isActive = activeSection === item;
                return (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item)}
                    className={`flex h-[55px] items-center gap-3 px-3 py-4 text-left text-sm font-semibold ${
                      isActive
                        ? "rounded bg-[#f1f8fd] text-[#1771b8]"
                        : "text-[#212731] hover:bg-gray-50"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="flex min-w-0 flex-1 flex-col gap-5">
            <p className="text-sm font-semibold text-[#647382]">
              How it works
            </p>

            {/* Video Embed */}
            <div className="relative h-[420px] w-full overflow-hidden rounded-lg border border-[#d1d5db]">
              <Image
                src="/images/89c0c052-216b-46b1-9d1f-a0fb025d4532.png"
                alt="Spectora Public API documentation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/49" />
              {/* Top bar */}
              <div className="absolute left-0 top-0 flex h-[45px] w-full items-center bg-black/70 px-5">
                <span className="text-sm font-semibold text-white">
                  Watch: How to set up a custom integration (2 min)
                </span>
              </div>
              {/* Play button */}
              <button className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d1d5db] bg-white p-3 shadow-md">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="#647382"
                >
                  <path d="M3 1l10 6-10 6V1z" />
                </svg>
              </button>
            </div>

            {/* Steps */}
            <div className="mt-5 flex flex-col gap-2">
              <h2 className="text-xl font-bold leading-[1.4] text-[#212731]">
                Steps
              </h2>
              <p className="text-sm leading-6 text-[#374151]">
                Lorem ipsum dolor sit amet consectetur. Vulputate integer enim
                gravida erat ipsum. Eget lorem risus volutpat sed neque.
              </p>
            </div>

            {/* 4-Step Process */}
            <div className="flex items-center justify-between">
              {steps.map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <div className="flex w-[175px] flex-col items-center gap-2">
                    <div className="relative h-[104px] w-[100px] overflow-hidden rounded-full">
                      <Image
                        src={step.image}
                        alt={step.label}
                        width={277}
                        height={153}
                        className="absolute left-[-89%] top-[-24%] h-[148%] w-[277%] max-w-none"
                      />
                    </div>
                    <p className="text-center text-base font-bold leading-[1.4] text-[#212731]">
                      {step.label}
                    </p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="-mt-8 mx-1">
                      <Image
                        src="/images/e3f56717-ca3e-4d56-8a91-0fd5804e9c7f.png"
                        alt=""
                        width={73}
                        height={15}
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width divider */}
        <div className="mt-10 border-b border-[#d1d5db]" />

        {/* Custom Integration section */}
        <div className="flex gap-[30px] py-10">
          <div className="w-[184px] shrink-0">
            <p className="text-sm font-semibold text-[#212731]">
              Custom Integration
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-5">
            <p className="text-sm leading-6 text-[#374151]">
              Lorem ipsum dolor sit amet consectetur. Vulputate integer enim
              gravida erat ipsum. Eget lorem risus volutpat sed neque. Lorem
              ipsum dolor sit amet consectetur. Vulputate integer enim gravida
              erat ipsum. Eget lorem risus volutpat sed neque. Lorem ipsum
              dolor sit amet consectetur. Vulputate integer enim gravida erat
              ipsum. Eget lorem risus volutpat sed neque.
            </p>
            <div className="flex items-center justify-between">
              {customIntegrations.map((ci) => (
                <CustomIntegrationCard key={ci.id} integration={ci} />
              ))}
            </div>
          </div>
        </div>

        {/* Full-width divider */}
        <div className="border-b border-[#d1d5db]" />

        {/* Resources section */}
        <div className="flex gap-[30px] py-10">
          <div className="w-[184px] shrink-0">
            <p className="text-sm font-semibold text-[#212731]">Resources</p>
          </div>
          <div className="flex flex-1 flex-col gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold text-[#647382]">
                Documentation
              </p>
              <p className="text-sm leading-6 text-[#374151]">
                Lorem ipsum dolor sit amet consectetur. Vulputate integer enim
                gravida erat ipsum. Eget lorem risus volutpat sed neque. Lorem
                ipsum dolor sit amet consectetur. Vulputate integer enim
                gravida erat ipsum. Eget lorem risus volutpat sed neque.
              </p>
            </div>

            {/* Article List */}
            <div className="overflow-hidden rounded-lg border border-[#d1d5db] bg-[#f6f9f9]">
              {docArticles.map((title, i) => (
                <button
                  key={i}
                  className="flex w-full items-center justify-between border-b border-[#d1d5db] bg-white p-5 text-left hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f6f7f8] text-xs font-semibold text-[#374151]">
                      {i + 1}
                    </span>
                    <span className="text-sm font-semibold text-[#212731]">
                      {title}
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
                  What do these permissions allow?
                </span>
                <button className="text-sm font-semibold text-[#1771b8] underline hover:text-[#125e96]">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
