"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ConnectModal, { ConfigureModal } from "@/components/ConnectModal";

function ConnectConfirmModal({
  onContinue,
  onClose,
}: {
  onContinue: () => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Scrim */}
      <div
        className="absolute inset-0 bg-[#212731] opacity-20"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative w-[392px] rounded-lg bg-white px-6 py-8 shadow-[0px_12px_16px_-4px_rgba(55,65,81,0.08),0px_4px_6px_-2px_rgba(55,65,81,0.03)]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 flex items-center justify-center rounded p-1 text-[#647382] hover:text-[#374151]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Warning icon */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fef7f1]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9" stroke="#cb6e15" strokeWidth="2" />
              <path d="M10 6v5" stroke="#cb6e15" strokeWidth="2" strokeLinecap="round" />
              <circle cx="10" cy="14" r="1" fill="#cb6e15" />
            </svg>
          </div>

          {/* Content */}
          <div className="pb-7 pt-5">
            <p className="text-base font-bold leading-[1.4] text-[#374151]">
              [Permission] not activated
            </p>
            <p className="mt-2 text-sm leading-6 text-[#647382]">
              This integration requires permissions to access your account data. By continuing, you authorize Spectora to connect with this service and sync your information.
            </p>
          </div>

          {/* Continue button */}
          <button
            onClick={onContinue}
            className="w-full max-w-[240px] rounded bg-[#1771b8] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125e96]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

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
  const [showConfirm, setShowConfirm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showConfigureModal, setShowConfigureModal] = useState(false);

  useEffect(() => {
    const connected = JSON.parse(localStorage.getItem("connectedIntegrations") || "[]");
    setIsConnected(connected.includes(id));
  }, [id]);

  function handleConnect() {
    if (id === "mailchimp") {
      setShowConfirm(true);
      return;
    }
    if (id === "zoho-crm") {
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

      {showConfirm && (
        <ConnectConfirmModal
          onClose={() => setShowConfirm(false)}
          onContinue={() => {
            setShowConfirm(false);
            setShowModal(true);
          }}
        />
      )}

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
