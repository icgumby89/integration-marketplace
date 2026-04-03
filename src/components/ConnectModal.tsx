"use client";

import { useState } from "react";
import Image from "next/image";

type ConnectModalProps = {
  integrationName: string;
  integrationLogo: string;
  onClose: () => void;
  onConnect: () => void;
};

function SpectoraLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M18 4L3 16V32H14V22H22V32H33V16L18 4Z" stroke="#374151" strokeWidth="2" strokeLinejoin="round" fill="white" />
      <circle cx="27" cy="10" r="7" fill="#1BA148" />
      <path d="M23.5 10L26 12.5L30.5 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function LogoPair({ integrationLogo, integrationName }: { integrationLogo: string; integrationName: string }) {
  return (
    <div className="flex items-center gap-3.5">
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded border border-[#d1d5db] bg-white p-2">
        <Image
          src={integrationLogo}
          alt={integrationName}
          width={36}
          height={36}
          className="object-contain"
        />
      </div>
      <svg width="30" height="8" viewBox="0 0 30 8" fill="none">
        <path d="M0 4h30M22 1l4 3-4 3M8 1L4 4l4 3" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded border border-[#d1d5db] bg-white p-2">
        <SpectoraLogo />
      </div>
    </div>
  );
}

function ModalHeader({
  integrationName,
  step,
  totalSteps,
  onClose,
}: {
  integrationName: string;
  step: number;
  totalSteps: number;
  onClose: () => void;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#d1d5db] px-6 py-5">
      <div className="flex flex-1 items-center">
        <button onClick={onClose} className="text-[#374151] hover:text-[#212731]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 justify-center">
        <p className="text-base font-bold text-[#212731]">
          {integrationName} Integration
        </p>
      </div>
      <div className="flex flex-1 items-center justify-end gap-3">
        <span className="text-xs font-medium text-[#647382]">Steps</span>
        <span className="text-xs font-medium text-[#1771b8]">{step}/{totalSteps}</span>
        <div className="h-1 w-[120px] bg-[#e4f1fc]">
          <div
            className="h-full bg-[#1771b8] transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Step 1: Login ─── */
function StepLogin({
  integrationName,
  integrationLogo,
  onNext,
}: {
  integrationName: string;
  integrationLogo: string;
  onNext: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    onNext();
  }

  return (
    <div className="flex w-[474px] flex-col items-center gap-5">
      <LogoPair integrationLogo={integrationLogo} integrationName={integrationName} />

      <form onSubmit={handleLogin} className="flex w-full flex-col gap-7">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold leading-[1.4] text-[#212731]">
            Log in and authorize
          </h2>
          <p className="text-sm leading-6 text-[#374151]">
            Log in to authorize your Spectora account to {integrationName}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#374151]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="test@email.com"
              className="h-[44px] rounded border border-[#d1d5db] bg-white px-3 text-base text-[#212731] outline-none placeholder:text-[#647382] focus:border-[#1771b8]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#374151]">Password</label>
            <div className="flex h-[44px] items-center rounded border border-[#d1d5db] bg-white px-3 focus-within:border-[#1771b8]">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="************"
                className="flex-1 bg-transparent text-base text-[#212731] outline-none placeholder:text-[#647382]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-1 text-[#374151]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {showPassword ? (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </>
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-5">
            <button
              type="submit"
              className="min-w-[80px] rounded bg-[#1771b8] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125e96]"
            >
              Log in
            </button>
            <button
              type="button"
              className="min-w-[80px] rounded border border-[#1771b8] px-4 py-3 text-sm font-semibold text-[#1771b8] hover:bg-[#f1f8fd]"
            >
              Create account
            </button>
          </div>
          <button
            type="button"
            className="self-start px-0.5 text-sm font-semibold text-[#1771b8] hover:underline"
          >
            Forgot password
          </button>
        </div>
      </form>
    </div>
  );
}

/* ─── Step 2: API Key Verification ─── */
function StepApiKey({
  integrationName,
  integrationLogo,
  onNext,
  onClose,
}: {
  integrationName: string;
  integrationLogo: string;
  onNext: () => void;
  onClose: () => void;
}) {
  const [apiKey, setApiKey] = useState("");
  const [verified, setVerified] = useState(false);
  const [verifying, setVerifying] = useState(false);

  function handleVerify() {
    setVerifying(true);
    // Simulate API key verification
    setTimeout(() => {
      setVerifying(false);
      setVerified(true);
      setTimeout(onNext, 600);
    }, 1200);
  }

  return (
    <div className="flex w-[474px] flex-col items-center gap-5">
      <LogoPair integrationLogo={integrationLogo} integrationName={integrationName} />

      <div className="flex w-full flex-col gap-7">
        <div className="flex flex-col gap-2">
          <p className="text-sm leading-6 text-[#374151]">
            Our integration syncs your contacts with your {integrationName} account.
          </p>
          <p className="text-sm leading-6 text-[#374151]">
            You have an Essentials plan on {integrationName}. Enter the API key below.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#374151]">
            {integrationName} API Key
          </label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="3jl201k5n23kdj010fk"
            className="h-[44px] rounded border border-[#d1d5db] bg-white px-3 text-base text-[#212731] outline-none placeholder:text-[#647382] focus:border-[#1771b8]"
          />
          <button className="self-start text-xs font-medium text-[#1771b8] hover:underline">
            Where do I find this?
          </button>
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={handleVerify}
            disabled={verifying || verified}
            className="min-w-[80px] rounded bg-[#1771b8] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125e96] disabled:opacity-60"
          >
            {verifying ? "Verifying..." : verified ? "Verified" : "Verify API Key"}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-3 text-sm font-semibold text-[#1771b8] hover:underline"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 3: Configure Sync ─── */
function StepConfigure({
  integrationName,
  integrationLogo,
  onConnect,
  onBack,
}: {
  integrationName: string;
  integrationLogo: string;
  onConnect: () => void;
  onBack: () => void;
}) {
  const [audience, setAudience] = useState("main-audience");
  const [audienceOpen, setAudienceOpen] = useState(false);
  const [syncClients, setSyncClients] = useState(true);
  const [syncAgents, setSyncAgents] = useState(false);
  const [autoTag, setAutoTag] = useState(true);
  const [syncExisting, setSyncExisting] = useState(true);

  // Simulated audiences fetched from Mailchimp after API key verification
  const audiences = [
    { id: "main-audience", name: "Main Audience", memberCount: 2450 },
    { id: "newsletter", name: "Newsletter Subscribers", memberCount: 890 },
    { id: "leads", name: "New Leads", memberCount: 312 },
  ];

  const fieldMappings = [
    { spectora: "Client/Agent Email", mailchimp: "EMAIL", required: true },
    { spectora: "First Name", mailchimp: "FNAME", required: false },
    { spectora: "Last Name", mailchimp: "LNAME", required: false },
    { spectora: "Phone Number", mailchimp: "PHONE", required: false },
    { spectora: "Inspection Address", mailchimp: "ADDRESS", required: false },
    { spectora: "Company / Brokerage", mailchimp: "COMPANY", required: false },
  ];

  return (
    <div className="flex w-[600px] flex-col items-center gap-5">
      <LogoPair integrationLogo={integrationLogo} integrationName={integrationName} />

      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold leading-[1.4] text-[#212731]">
            Configure your sync
          </h2>
          <p className="text-sm leading-6 text-[#374151]">
            Choose what data to sync from Spectora to {integrationName} and how it should be organized.
          </p>
        </div>

        {/* Audience Selection */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#212731]">
            {integrationName} Audience
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setAudienceOpen(!audienceOpen)}
              className="flex h-[44px] w-full items-center justify-between rounded border border-[#d1d5db] bg-white px-3 text-left text-base leading-7 text-[#212731] outline-none focus:border-[#1771b8]"
            >
              <span>{audiences.find((a) => a.id === audience)?.name}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className={`text-[#647382] transition-transform ${audienceOpen ? "rotate-180" : ""}`}
              >
                <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {audienceOpen && (
              <div className="absolute left-0 top-[48px] z-10 w-full rounded border border-[#d1d5db] bg-white shadow-lg">
                {audiences.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => {
                      setAudience(a.id);
                      setAudienceOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-3 py-2.5 text-left hover:bg-[#f6f9f9] ${a.id === audience ? "bg-[#f6f9f9]" : ""}`}
                  >
                    <span className="text-sm text-[#212731]">{a.name}</span>
                    <span className="text-xs text-[#647382]">{a.memberCount.toLocaleString()} contacts</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <p className="text-xs font-medium text-[#647382]">
            Select which {integrationName} audience your contacts will be synced to.
          </p>
        </div>

        <div className="border-t border-[#d1d5db]" />

        {/* Contact Types */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-[#374151]">
            Spectora contacts to sync
          </label>
          <p className="text-xs leading-5 text-[#647382]">
            Choose which contact types from Spectora should be synced to {integrationName}.
          </p>
          <div className="flex gap-6">
            <label className="flex cursor-pointer gap-3 items-start">
              <div className="pt-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setSyncClients(!syncClients)}
                  className={`flex h-4 w-4 items-center justify-center rounded ${syncClients ? "bg-[#1771b8]" : "border border-[#d1d5db] bg-white"}`}
                >
                  {syncClients && (
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="flex flex-col">
                <p className="pb-2 pt-1 text-sm font-semibold text-[#212731]">Clients</p>
                <p className="text-sm leading-6 text-[#374151]">Homebuyers and homeowners from your inspections</p>
              </div>
            </label>
            <label className="flex cursor-pointer gap-3 items-start">
              <div className="pt-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setSyncAgents(!syncAgents)}
                  className={`flex h-4 w-4 items-center justify-center rounded ${syncAgents ? "bg-[#1771b8]" : "border border-[#d1d5db] bg-white"}`}
                >
                  {syncAgents && (
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="flex flex-col">
                <p className="pb-2 pt-1 text-sm font-semibold text-[#212731]">Agents</p>
                <p className="text-sm leading-6 text-[#374151]">Real estate agents (buyer&apos;s agents and listing agents)</p>
              </div>
            </label>
          </div>
        </div>

        {/* Auto-tagging */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-[#212731]">Auto-tag contacts</p>
            <p className="text-xs text-[#647382]">
              Automatically tag synced contacts as &quot;Spectora-Client&quot; or &quot;Spectora-Agent&quot; in {integrationName}
            </p>
          </div>
          <button
            onClick={() => setAutoTag(!autoTag)}
            className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${autoTag ? "bg-[#1771b8]" : "bg-[#d1d5db]"}`}
          >
            <span
              className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${autoTag ? "left-[22px]" : "left-0.5"}`}
            />
          </button>
        </div>

        {/* Sync existing contacts */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-[#212731]">Sync existing contacts</p>
            <p className="text-xs text-[#647382]">
              Bulk-sync all current Spectora contacts on first setup. If off, only new contacts sync going forward.
            </p>
          </div>
          <button
            onClick={() => setSyncExisting(!syncExisting)}
            className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${syncExisting ? "bg-[#1771b8]" : "bg-[#d1d5db]"}`}
          >
            <span
              className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${syncExisting ? "left-[22px]" : "left-0.5"}`}
            />
          </button>
        </div>

        <div className="border-t border-[#d1d5db]" />

        {/* Field Mapping Preview */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#374151]">
            Field mapping
          </label>
          <p className="text-xs leading-5 text-[#647382]">
            These Spectora fields will be synced to {integrationName} merge fields. Sync is one-way (Spectora → {integrationName}).
          </p>
          <div className="overflow-hidden rounded border border-[#d1d5db]">
            <div className="flex items-center bg-[#f6f9f9] px-4 py-2.5 text-xs font-semibold text-[#647382]">
              <span className="flex-1">Spectora Field</span>
              <span className="w-6 text-center">→</span>
              <span className="flex-1">{integrationName} Merge Tag</span>
            </div>
            {fieldMappings.map((field) => (
              <div
                key={field.mailchimp}
                className="flex items-center border-t border-[#d1d5db] px-4 py-2.5 text-sm"
              >
                <span className="flex flex-1 items-center gap-1.5 text-[#212731]">
                  {field.spectora}
                  {field.required && (
                    <span className="text-[10px] font-medium text-[#1771b8]">Required</span>
                  )}
                </span>
                <span className="w-6 text-center text-[#d1d5db]">→</span>
                <span className="flex-1 font-mono text-xs text-[#647382]">
                  {field.mailchimp}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="min-w-[80px] rounded border border-[#d1d5db] px-4 py-3 text-sm font-semibold text-[#374151] hover:bg-[#f6f9f9]"
          >
            Back
          </button>
          <button
            onClick={onConnect}
            disabled={!syncClients && !syncAgents}
            className="min-w-[80px] rounded bg-[#1771b8] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125e96] disabled:opacity-40"
          >
            Connect Integration
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Shared: Custom Select for Zoho steps ─── */
function ZohoCustomSelect({
  label,
  value,
  options,
  open,
  onToggle,
  onSelect,
  disabled,
}: {
  label: string;
  value: string;
  options: { id: string; name: string }[];
  open: boolean;
  onToggle: () => void;
  onSelect: (id: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className={`text-sm font-semibold ${disabled ? "text-[#b0b7c0]" : "text-[#212731]"}`}>{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={onToggle}
          disabled={disabled}
          className={`flex h-[44px] w-full items-center justify-between rounded border px-3 text-left text-base leading-7 outline-none ${disabled ? "border-[#e5e7eb] bg-[#f6f9f9] text-[#b0b7c0] cursor-not-allowed" : "border-[#d1d5db] bg-white text-[#212731] focus:border-[#1771b8]"}`}
        >
          <span>{options.find((o) => o.id === value)?.name}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={`transition-transform ${disabled ? "text-[#d1d5db]" : "text-[#647382]"} ${open ? "rotate-180" : ""}`}
          >
            <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {open && !disabled && (
          <div className="absolute left-0 top-[48px] z-10 w-full rounded border border-[#d1d5db] bg-white shadow-lg">
            {options.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => onSelect(o.id)}
                className={`flex w-full px-3 py-2.5 text-left text-sm text-[#212731] hover:bg-[#f6f9f9] ${o.id === value ? "bg-[#f6f9f9]" : ""}`}
              >
                {o.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Step 2: Zoho Clients ─── */
function StepZohoClients({
  integrationName,
  integrationLogo,
  enabled,
  onToggle,
  onNext,
  onBack,
}: {
  integrationName: string;
  integrationLogo: string;
  enabled: boolean;
  onToggle: () => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [clientModule, setClientModule] = useState("contacts");
  const [clientModuleOpen, setClientModuleOpen] = useState(false);

  const clientModules = [
    { id: "contacts", name: "Contacts" },
    { id: "leads", name: "Leads" },
  ];

  const fieldMappings = [
    { spectora: "Client Name", zoho: "First_Name / Last_Name", required: true },
    { spectora: "Client Email", zoho: "Email", required: true },
    { spectora: "Client Phone", zoho: "Phone", required: false },
    { spectora: "Property Address", zoho: "Mailing_Street, City, State, Zip", required: false },
  ];

  return (
    <div className="flex w-[600px] flex-col items-center gap-5">
      <LogoPair integrationLogo={integrationLogo} integrationName={integrationName} />

      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold leading-[1.4] text-[#212731]">
            Sync Clients
          </h2>
          <p className="text-sm leading-6 text-[#374151]">
            Configure how client data from Spectora syncs to {integrationName}.
          </p>
        </div>

        {/* Enable toggle */}
        <label className="flex cursor-pointer items-start gap-3">
          <div className="pt-0.5 shrink-0">
            <button
              type="button"
              onClick={onToggle}
              className={`flex h-5 w-5 items-center justify-center rounded ${enabled ? "bg-[#1771b8]" : "border border-[#d1d5db] bg-white"}`}
            >
              {enabled && (
                <svg width="11" height="9" viewBox="0 0 9 7" fill="none">
                  <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-[#212731]">Sync Clients</p>
            <p className="text-xs leading-5 text-[#647382]">Homebuyers &amp; homeowners from your inspections</p>
          </div>
        </label>

        <div className="border-t border-[#d1d5db]" />

        {/* Module mapping */}
        <ZohoCustomSelect
          label="Clients sync to"
          value={clientModule}
          options={clientModules}
          open={clientModuleOpen}
          onToggle={() => setClientModuleOpen(!clientModuleOpen)}
          onSelect={(id) => { setClientModule(id); setClientModuleOpen(false); }}
          disabled={!enabled}
        />

        {/* Field mapping */}
        <div className={`flex flex-col gap-2 ${!enabled ? "opacity-40" : ""}`}>
          <label className="text-sm font-semibold text-[#212731]">Field mapping</label>
          <p className="text-xs leading-5 text-[#647382]">
            Spectora fields are mapped to {integrationName} fields.
          </p>
          <div className="overflow-hidden rounded border border-[#d1d5db]">
            <div className="flex items-center bg-[#f6f9f9] px-4 py-2.5 text-xs font-semibold text-[#647382]">
              <span className="flex-1">Spectora Field</span>
              <span className="w-6 text-center">→</span>
              <span className="flex-1">{integrationName} Field</span>
            </div>
            {fieldMappings.map((field) => (
              <div
                key={field.zoho}
                className="flex items-center border-t border-[#d1d5db] px-4 py-2.5 text-sm"
              >
                <span className="flex flex-1 items-center gap-1.5 text-[#212731]">
                  {field.spectora}
                  {field.required && (
                    <span className="text-[10px] font-medium text-[#1771b8]">Required</span>
                  )}
                </span>
                <span className="w-6 text-center text-[#d1d5db]">→</span>
                <span className="flex-1 font-mono text-xs text-[#647382]">{field.zoho}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="min-w-[80px] rounded border border-[#d1d5db] px-4 py-3 text-sm font-semibold text-[#374151] hover:bg-[#f6f9f9]"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="min-w-[80px] rounded bg-[#1771b8] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125e96]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 3: Zoho Agents ─── */
function StepZohoAgents({
  integrationName,
  integrationLogo,
  enabled,
  onToggle,
  onNext,
  onBack,
}: {
  integrationName: string;
  integrationLogo: string;
  enabled: boolean;
  onToggle: () => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [agentModule, setAgentModule] = useState("accounts");
  const [agentModuleOpen, setAgentModuleOpen] = useState(false);

  const agentModules = [
    { id: "accounts", name: "Accounts (by brokerage)" },
    { id: "contacts", name: "Contacts (with role tag)" },
  ];

  const fieldMappings = [
    { spectora: "Agent Name", zoho: "First_Name / Last_Name", required: true },
    { spectora: "Agent Email", zoho: "Email", required: true },
    { spectora: "Agent Phone", zoho: "Phone", required: false },
    { spectora: "Brokerage", zoho: "Account_Name", required: false },
  ];

  return (
    <div className="flex w-[600px] flex-col items-center gap-5">
      <LogoPair integrationLogo={integrationLogo} integrationName={integrationName} />

      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold leading-[1.4] text-[#212731]">
            Sync Agents
          </h2>
          <p className="text-sm leading-6 text-[#374151]">
            Configure how real estate agent data from Spectora syncs to {integrationName}.
          </p>
        </div>

        {/* Enable toggle */}
        <label className="flex cursor-pointer items-start gap-3">
          <div className="pt-0.5 shrink-0">
            <button
              type="button"
              onClick={onToggle}
              className={`flex h-5 w-5 items-center justify-center rounded ${enabled ? "bg-[#1771b8]" : "border border-[#d1d5db] bg-white"}`}
            >
              {enabled && (
                <svg width="11" height="9" viewBox="0 0 9 7" fill="none">
                  <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-[#212731]">Sync Agents</p>
            <p className="text-xs leading-5 text-[#647382]">Real estate agents from your inspections</p>
          </div>
        </label>

        <div className="border-t border-[#d1d5db]" />

        {/* Module mapping */}
        <ZohoCustomSelect
          label="Agents sync to"
          value={agentModule}
          options={agentModules}
          open={agentModuleOpen}
          onToggle={() => setAgentModuleOpen(!agentModuleOpen)}
          onSelect={(id) => { setAgentModule(id); setAgentModuleOpen(false); }}
          disabled={!enabled}
        />

        {/* Field mapping */}
        <div className={`flex flex-col gap-2 ${!enabled ? "opacity-40" : ""}`}>
          <label className="text-sm font-semibold text-[#212731]">Field mapping</label>
          <p className="text-xs leading-5 text-[#647382]">
            Spectora fields are mapped to {integrationName} fields.
          </p>
          <div className="overflow-hidden rounded border border-[#d1d5db]">
            <div className="flex items-center bg-[#f6f9f9] px-4 py-2.5 text-xs font-semibold text-[#647382]">
              <span className="flex-1">Spectora Field</span>
              <span className="w-6 text-center">→</span>
              <span className="flex-1">{integrationName} Field</span>
            </div>
            {fieldMappings.map((field) => (
              <div
                key={field.zoho}
                className="flex items-center border-t border-[#d1d5db] px-4 py-2.5 text-sm"
              >
                <span className="flex flex-1 items-center gap-1.5 text-[#212731]">
                  {field.spectora}
                  {field.required && (
                    <span className="text-[10px] font-medium text-[#1771b8]">Required</span>
                  )}
                </span>
                <span className="w-6 text-center text-[#d1d5db]">→</span>
                <span className="flex-1 font-mono text-xs text-[#647382]">{field.zoho}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="min-w-[80px] rounded border border-[#d1d5db] px-4 py-3 text-sm font-semibold text-[#374151] hover:bg-[#f6f9f9]"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="min-w-[80px] rounded bg-[#1771b8] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125e96]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 4: Zoho Inspections ─── */
function StepZohoInspections({
  integrationName,
  integrationLogo,
  enabled,
  onToggle,
  anyEnabled,
  onConnect,
  onBack,
}: {
  integrationName: string;
  integrationLogo: string;
  enabled: boolean;
  onToggle: () => void;
  anyEnabled: boolean;
  onConnect: () => void;
  onBack: () => void;
}) {
  const [pipeline, setPipeline] = useState("inspection-pipeline");
  const [pipelineOpen, setPipelineOpen] = useState(false);

  const pipelines = [
    { id: "inspection-pipeline", name: "Inspection Pipeline (new)" },
    { id: "default", name: "Default Pipeline" },
  ];

  const stageMapping = [
    { spectora: "Requested", zoho: "Requested", probability: "10%" },
    { spectora: "Scheduled", zoho: "Scheduled", probability: "50%" },
    { spectora: "In Progress", zoho: "In Progress", probability: "70%" },
    { spectora: "Report Pending", zoho: "Report Pending", probability: "80%" },
    { spectora: "Report Delivered", zoho: "Report Delivered", probability: "90%" },
    { spectora: "Paid", zoho: "Closed Won", probability: "100%" },
    { spectora: "Cancelled", zoho: "Closed Lost", probability: "0%" },
  ];

  const fieldMappings = [
    { spectora: "Inspection Fee", zoho: "Deal → Amount", required: true },
    { spectora: "Services", zoho: "Deal → Inspection_Services", required: false },
    { spectora: "Inspector Name", zoho: "Deal → Assigned_Inspector", required: false },
    { spectora: "Report URL", zoho: "Deal → Report_URL", required: false },
    { spectora: "Payment Status", zoho: "Deal → Payment_Status", required: false },
  ];

  return (
    <div className="flex w-[600px] flex-col items-center gap-5">
      <LogoPair integrationLogo={integrationLogo} integrationName={integrationName} />

      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold leading-[1.4] text-[#212731]">
            Sync Inspections
          </h2>
          <p className="text-sm leading-6 text-[#374151]">
            Configure how inspection data from Spectora syncs as Deals in {integrationName}.
          </p>
        </div>

        {/* Enable toggle */}
        <label className="flex cursor-pointer items-start gap-3">
          <div className="pt-0.5 shrink-0">
            <button
              type="button"
              onClick={onToggle}
              className={`flex h-5 w-5 items-center justify-center rounded ${enabled ? "bg-[#1771b8]" : "border border-[#d1d5db] bg-white"}`}
            >
              {enabled && (
                <svg width="11" height="9" viewBox="0 0 9 7" fill="none">
                  <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-[#212731]">Sync Inspections</p>
            <p className="text-xs leading-5 text-[#647382]">Inspections created as CRM Deals</p>
          </div>
        </label>

        <div className="border-t border-[#d1d5db]" />

        {/* Pipeline selection */}
        <ZohoCustomSelect
          label="Inspections pipeline"
          value={pipeline}
          options={pipelines}
          open={pipelineOpen}
          onToggle={() => setPipelineOpen(!pipelineOpen)}
          onSelect={(id) => { setPipeline(id); setPipelineOpen(false); }}
          disabled={!enabled}
        />

        {/* Stage mapping */}
        <div className={`flex flex-col gap-2 ${!enabled ? "opacity-40" : ""}`}>
          <label className="text-sm font-semibold text-[#212731]">Deal stage mapping</label>
          <p className="text-xs leading-5 text-[#647382]">
            Inspection statuses in Spectora map to these Deal stages in {integrationName}.
          </p>
          <div className="overflow-hidden rounded border border-[#d1d5db]">
            <div className="flex items-center bg-[#f6f9f9] px-4 py-2.5 text-xs font-semibold text-[#647382]">
              <span className="flex-1">Spectora Status</span>
              <span className="w-6 text-center">→</span>
              <span className="flex-1">Zoho CRM Stage</span>
              <span className="w-16 text-right">Probability</span>
            </div>
            {stageMapping.map((stage) => (
              <div
                key={stage.spectora}
                className="flex items-center border-t border-[#d1d5db] px-4 py-2 text-sm"
              >
                <span className="flex-1 text-[#212731]">{stage.spectora}</span>
                <span className="w-6 text-center text-[#d1d5db]">→</span>
                <span className="flex-1 text-[#647382]">{stage.zoho}</span>
                <span className="w-16 text-right font-mono text-xs text-[#647382]">{stage.probability}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Field mapping */}
        <div className={`flex flex-col gap-2 ${!enabled ? "opacity-40" : ""}`}>
          <label className="text-sm font-semibold text-[#212731]">Field mapping</label>
          <p className="text-xs leading-5 text-[#647382]">
            Spectora fields are mapped to {integrationName} fields.
          </p>
          <div className="overflow-hidden rounded border border-[#d1d5db]">
            <div className="flex items-center bg-[#f6f9f9] px-4 py-2.5 text-xs font-semibold text-[#647382]">
              <span className="flex-1">Spectora Field</span>
              <span className="w-6 text-center">→</span>
              <span className="flex-1">{integrationName} Field</span>
            </div>
            {fieldMappings.map((field) => (
              <div
                key={field.zoho}
                className="flex items-center border-t border-[#d1d5db] px-4 py-2.5 text-sm"
              >
                <span className="flex flex-1 items-center gap-1.5 text-[#212731]">
                  {field.spectora}
                  {field.required && (
                    <span className="text-[10px] font-medium text-[#1771b8]">Required</span>
                  )}
                </span>
                <span className="w-6 text-center text-[#d1d5db]">→</span>
                <span className="flex-1 font-mono text-xs text-[#647382]">{field.zoho}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="min-w-[80px] rounded border border-[#d1d5db] px-4 py-3 text-sm font-semibold text-[#374151] hover:bg-[#f6f9f9]"
          >
            Back
          </button>
          <button
            onClick={onConnect}
            disabled={!anyEnabled}
            className="min-w-[80px] rounded bg-[#1771b8] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125e96] disabled:opacity-40"
          >
            Connect Integration
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Modal ─── */
export default function ConnectModal({
  integrationName,
  integrationLogo,
  onClose,
  onConnect,
}: ConnectModalProps) {
  const [step, setStep] = useState(1);
  const [zohoClients, setZohoClients] = useState(false);
  const [zohoAgents, setZohoAgents] = useState(false);
  const [zohoInspections, setZohoInspections] = useState(false);
  const isZoho = integrationName === "Zoho CRM";
  const totalSteps = isZoho ? 4 : 2;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      <ModalHeader integrationName={integrationName} step={step} totalSteps={totalSteps} onClose={onClose} />

      <div className="flex flex-1 flex-col items-center overflow-y-auto p-16">
        {step === 1 && (
          <StepLogin
            integrationName={integrationName}
            integrationLogo={integrationLogo}
            onNext={() => setStep(2)}
          />
        )}
        {step === 2 && isZoho && (
          <StepZohoClients
            integrationName={integrationName}
            integrationLogo={integrationLogo}
            enabled={zohoClients}
            onToggle={() => setZohoClients(!zohoClients)}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && isZoho && (
          <StepZohoAgents
            integrationName={integrationName}
            integrationLogo={integrationLogo}
            enabled={zohoAgents}
            onToggle={() => setZohoAgents(!zohoAgents)}
            onNext={() => setStep(4)}
            onBack={() => setStep(2)}
          />
        )}
        {step === 4 && isZoho && (
          <StepZohoInspections
            integrationName={integrationName}
            integrationLogo={integrationLogo}
            enabled={zohoInspections}
            onToggle={() => setZohoInspections(!zohoInspections)}
            anyEnabled={zohoClients || zohoAgents || zohoInspections}
            onConnect={onConnect}
            onBack={() => setStep(3)}
          />
        )}
        {step === 2 && !isZoho && (
          <StepConfigure
            integrationName={integrationName}
            integrationLogo={integrationLogo}
            onConnect={onConnect}
            onBack={() => setStep(1)}
          />
        )}
      </div>
    </div>
  );
}
