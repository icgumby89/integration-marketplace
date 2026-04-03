"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ConnectModal, { ConfigureModal } from "@/components/ConnectModal";

type ProductHeaderProps = {
  id: string;
  name: string;
  category: string;
  description: string;
  logoImage: string;
  isCustom: boolean;
};

export default function ProductHeader({
  id,
  name,
  category,
  description,
  logoImage,
  isCustom,
}: ProductHeaderProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showConfigureModal, setShowConfigureModal] = useState(false);

  useEffect(() => {
    const connected = JSON.parse(localStorage.getItem("connectedIntegrations") || "[]");
    setIsConnected(connected.includes(id));
  }, [id]);

  function handleConnect() {
    if (id === "mailchimp" || id === "zoho-crm") {
      setShowModal(true);
      return;
    }
    completeConnect();
  }

  function handleDisconnect() {
    const connected = JSON.parse(localStorage.getItem("connectedIntegrations") || "[]");
    const updated = connected.filter((cid: string) => cid !== id);
    localStorage.setItem("connectedIntegrations", JSON.stringify(updated));
    setIsConnected(false);
    setShowConfigureModal(false);
  }

  function completeConnect() {
    const connected = JSON.parse(localStorage.getItem("connectedIntegrations") || "[]");
    if (!connected.includes(id)) {
      connected.push(id);
      localStorage.setItem("connectedIntegrations", JSON.stringify(connected));
    }
    setIsConnected(true);
    setShowModal(false);
  }

  return (
    <section className="border-b border-[#d1d5db] bg-white">
      <div className="mx-auto flex h-[275px] max-w-[1096px] items-center justify-between px-6">
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div className="flex h-[101px] w-[101px] shrink-0 items-center justify-center rounded border border-[#d1d5db] bg-white p-2">
            {isCustom ? (
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
            ) : (
              <Image
                src={logoImage}
                alt={`${name} logo`}
                width={68}
                height={68}
                className="object-contain"
              />
            )}
          </div>

          <div className="max-w-[430px]">
            <div className="flex items-center gap-3">
              <h1 className="text-[32px] font-bold leading-[1.35] text-[#212731]">
                {name}
              </h1>
              <span className="rounded bg-[#f6f7f8] px-1.5 py-0.5 text-xs font-medium text-[#212731]">
                {category}
              </span>
              {isConnected && (
                <span className="flex items-center gap-1 rounded-full bg-[#effaf6] px-2 py-0.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1ba148] opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1ba148]" />
                  </span>
                  <span className="text-xs font-medium text-[#374151]">
                    Active
                  </span>
                </span>
              )}
            </div>
            <p className="mt-2.5 text-sm leading-6 text-[#374151]">
              {description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href={isCustom ? "/custom-api" : "/"}
            className="px-4 py-2.5 text-sm font-semibold text-[#1771b8] hover:underline"
          >
            {isCustom
              ? "Return to Custom Integrations"
              : "Return to Integrations"}
          </Link>
          {!isCustom && isConnected && (
            <button
              onClick={() => setShowConfigureModal(true)}
              className="rounded bg-[#1771b8] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125e96]"
            >
              Configure
            </button>
          )}
          {!isCustom && !isConnected && (
            <button
              onClick={handleConnect}
              className="rounded bg-[#1771b8] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125e96]"
            >
              Connect
            </button>
          )}
        </div>
      </div>

      {showModal && (
        <ConnectModal
          integrationId={id}
          integrationName={name}
          integrationLogo={logoImage}
          onClose={() => setShowModal(false)}
          onConnect={completeConnect}
        />
      )}

      {showConfigureModal && (
        <ConfigureModal
          integrationId={id}
          integrationName={name}
          integrationLogo={logoImage}
          onClose={() => setShowConfigureModal(false)}
          onDisconnect={handleDisconnect}
        />
      )}
    </section>
  );
}
