import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import ProductHeader from "@/components/ProductHeader";
import { integrationDetails } from "@/data/integration-details";

function UseCaseIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    mail: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1771b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="16" height="12" rx="2" />
        <path d="M2 6l8 5 8-5" />
      </svg>
    ),
    shield: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1771b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2l7 3v5c0 4-3 6-7 8-4-2-7-4-7-8V5l7-3z" />
        <path d="M7.5 10l2 2 3.5-4" />
      </svg>
    ),
    chart: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1771b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17V9h3v8H3zm5.5 0V3h3v14h-3zm5.5 0V7h3v10h-3z" />
      </svg>
    ),
    dollar: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1771b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 5v10M7 8.5c0-1.5 1.3-2 3-2s3 .5 3 2-1.3 2-3 2-3 .5-3 2 1.3 2 3 2 3-.5 3-2" />
      </svg>
    ),
    funnel: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1771b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4h16l-6 7v5l-4 2v-7L2 4z" />
      </svg>
    ),
    check: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1771b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="14" height="14" rx="2" />
        <path d="M7 10l2.5 2.5L13 8" />
      </svg>
    ),
  };

  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f1f8fd]">
      {icons[icon] || icons.check}
    </div>
  );
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function IntegrationDetailPage({ params }: Props) {
  const { id } = await params;
  const detail = integrationDetails[id];

  if (!detail) {
    notFound();
  }

  const isCustom = detail.category === "Custom Integration";
  const hasIconUseCases = detail.useCases?.some((uc) => uc.icon);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Product Header */}
      <ProductHeader
        id={id}
        name={detail.name}
        category={detail.category}
        description={detail.description}
        logoImage={detail.logoImage}
        isCustom={isCustom}
      />

      {/* Main Content */}
      <section className="mx-auto flex max-w-[1096px] flex-col gap-10 px-6 py-10">
        {/* Features Section */}
        <div className="flex gap-[50px] border-b border-[#d1d5db] pb-10">
          {/* Left sidebar metadata */}
          <div className="flex w-[124px] shrink-0 flex-col gap-7">
            <div className="flex flex-col gap-2 py-0.5 text-sm">
              <p className="font-semibold text-[#212731]">Built by</p>
              <p className="leading-6 text-[#647382]">{detail.builtBy}</p>
            </div>
            <div className="flex flex-col gap-2 py-0.5 text-sm">
              <p className="font-semibold text-[#212731]">Account type</p>
              <p className="leading-6 text-[#647382]">Base</p>
            </div>
            <div className="flex flex-col gap-2 py-0.5 text-sm">
              <p className="font-semibold text-[#212731]">Support</p>
              <a
                href={detail.supportUrl}
                className="flex items-center gap-1 text-xs font-semibold text-[#647382] underline"
              >
                Support site
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="#647382"
                >
                  <path d="M4.5 2v1H3v10h10v-1.5h1V14H2V2h2.5zm4 0h5v5h-1V4.4L7.35 9.56l-.7-.7L11.79 3H8.5V2z" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col gap-2 py-0.5 text-sm">
              <p className="font-semibold text-[#212731]">Resources</p>
              {detail.resourceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="flex items-center gap-1 text-xs font-semibold text-[#647382] underline"
                >
                  {link.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="#647382"
                  >
                    <path d="M4.5 2v1H3v10h10v-1.5h1V14H2V2h2.5zm4 0h5v5h-1V4.4L7.35 9.56l-.7-.7L11.79 3H8.5V2z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Features content */}
          <div className="flex flex-1 flex-col gap-10">
            <p className="text-sm font-semibold text-[#647382]">Features</p>

            {detail.features.map((feature, i) => (
              <div key={i} className="flex flex-col gap-5">
                {/* Feature image */}
                <div
                  className="relative h-[420px] w-full overflow-hidden rounded-lg border border-[#d1d5db]"
                  style={{ backgroundColor: feature.imageBg }}
                >
                  {/* Floating logos feature image (Contact Sync) */}
                  {detail.featureLogos ? (
                    <>
                      <div className="absolute left-1/2 top-[-40%] h-[140%] w-[120%] -translate-x-1/2 rounded-[50%] bg-[#F6F9F9]" />
                      {detail.featureLogos.map((logo, j) => (
                        <div
                          key={j}
                          className="absolute flex items-center justify-center rounded border border-[#d1d5db] bg-white p-2"
                          style={{
                            width: logo.size,
                            height: logo.size,
                            left: logo.left,
                            top: logo.top,
                          }}
                        >
                          <Image
                            src={logo.image}
                            alt=""
                            width={logo.size - 20}
                            height={logo.size - 20}
                            className={`object-contain ${logo.rounded ? "rounded-full" : ""}`}
                          />
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {/* Optional background ellipse */}
                      {feature.bgImage && (
                        <div className="absolute left-1/2 top-[-40%] h-[140%] w-[120%] -translate-x-1/2 rounded-[50%] bg-[#fff5b2]" />
                      )}

                      {/* Optional logo overlay */}
                      {feature.logoOverlay && (
                        <div className="absolute left-1/2 top-[20px] h-[50px] w-[120px] -translate-x-1/2">
                          <Image
                            src={feature.logoOverlay}
                            alt=""
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}

                      {/* Screenshot */}
                      {feature.logoOverlay ? (
                        <div className="absolute bottom-0 left-1/2 top-[90px] w-[72%] -translate-x-1/2 px-3">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            width={1920}
                            height={1194}
                            className="w-full rounded object-contain"
                          />
                        </div>
                      ) : feature.image ? (
                        <div className="absolute bottom-0 left-1/2 top-[60px] w-[72%] -translate-x-1/2 px-3 py-2">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            width={1920}
                            height={1194}
                            className="w-full rounded object-contain"
                          />
                        </div>
                      ) : null}
                    </>
                  )}
                </div>

                {/* Feature text */}
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold leading-[1.4] text-[#212731]">
                    {feature.title}
                  </h2>
                  <p className="text-sm leading-6 text-[#374151]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Examples / Use Cases Section */}
        {detail.useCases && detail.useCases.length > 0 && (
          <div className="flex gap-[50px] border-b border-[#d1d5db] pb-10">
            <div className="w-[124px] shrink-0">
              <p className="text-sm font-semibold text-[#212731]">Examples</p>
            </div>
            <div className="flex flex-1 flex-col gap-5">
              <p className="text-sm font-semibold text-[#647382]">Use Cases</p>

              {detail.useCaseIntro && (
                <p className="text-sm leading-6 text-[#374151]">
                  {detail.useCaseIntro}
                </p>
              )}

              {hasIconUseCases ? (
                /* Icon-based use case cards */
                <div className="grid grid-cols-3 gap-4">
                  {detail.useCases.map((useCase, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-2.5 rounded-lg border border-[#d1d5db] bg-white p-5"
                    >
                      {useCase.icon && <UseCaseIcon icon={useCase.icon} />}
                      <h3 className="text-sm font-bold text-[#212731]">
                        {useCase.title}
                      </h3>
                      <p className="text-xs leading-[18px] text-[#647382]">
                        {useCase.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                /* Text-based use case cards */
                <div className="grid grid-cols-3 gap-4">
                  {detail.useCases.map((useCase, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-4 rounded-lg border border-[#d1d5db] bg-white p-3.5"
                    >
                      <div className="border-b border-[#d1d5db] pb-4">
                        <h3 className="text-base font-bold leading-[1.4] text-[#212731]">
                          {useCase.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-6 text-[#647382]">
                        {useCase.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* About Section - hidden for custom integrations */}
        {!isCustom && (
          <div className="flex gap-[50px] border-b border-[#d1d5db] pb-10">
            {/* Left sidebar - Based in */}
            <div className="flex w-[124px] shrink-0 flex-col gap-2 py-0.5 text-sm">
              <p className="font-semibold text-[#212731]">Based in</p>
              <div className="flex items-center gap-2">
                <span className="text-sm">{detail.basedIn.flag}</span>
                <span className="text-sm leading-6 text-[#647382]">
                  {detail.basedIn.country}
                </span>
              </div>
            </div>

            {/* About content */}
            <div className="flex flex-1 flex-col gap-5">
              <p className="text-sm font-semibold text-[#647382]">About</p>
              <div className="text-sm leading-6 text-[#374151]">
                {detail.about.split("\n\n").map((paragraph, i) => (
                  <p key={i} className={i > 0 ? "mt-4" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Permissions Section */}
        <div className="flex gap-[50px] pb-10">
          {/* Left sidebar - legal links */}
          <div className="flex w-[124px] shrink-0 flex-col gap-2 py-0.5">
            <a
              href="#"
              className="flex items-center gap-1 text-xs font-semibold text-[#647382] underline"
            >
              Privacy policy
              <svg width="12" height="12" viewBox="0 0 16 16" fill="#647382">
                <path d="M4.5 2v1H3v10h10v-1.5h1V14H2V2h2.5zm4 0h5v5h-1V4.4L7.35 9.56l-.7-.7L11.79 3H8.5V2z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-xs font-semibold text-[#647382] underline"
            >
              Terms of service
              <svg width="12" height="12" viewBox="0 0 16 16" fill="#647382">
                <path d="M4.5 2v1H3v10h10v-1.5h1V14H2V2h2.5zm4 0h5v5h-1V4.4L7.35 9.56l-.7-.7L11.79 3H8.5V2z" />
              </svg>
            </a>
          </div>

          {/* Permissions content */}
          <div className="flex flex-1 flex-col gap-5">
            <p className="text-sm font-semibold text-[#647382]">Data Access</p>

            <div className="overflow-hidden rounded-lg border border-[#d1d5db] bg-[#f6f9f9]">
              {detail.permissions.map((permission, i) => (
                <button
                  key={i}
                  className="flex w-full items-center justify-between border-b border-[#d1d5db] bg-white p-5 text-left hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f6f7f8] text-xs font-semibold text-[#374151]">
                      {i + 1}
                    </span>
                    <span className="text-sm font-semibold text-[#212731]">
                      {permission}
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
