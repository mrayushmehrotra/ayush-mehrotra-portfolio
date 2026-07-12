"use client";

export default function FreelanceSection() {
  return (
    <section
      id="freelance"
      className="px-8 py-40"
      style={{ background: "var(--earth)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
          <div>
            <span className="eyebrow mb-8">Freelance</span>
            <h2
              className="font-cormorant fade-up mt-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1,
                color: "var(--cream)",
              }}
            >
              Client work that
              <br />
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                solved real
              </em>{" "}
              problems.
            </h2>
          </div>
          <p
            className="text-base leading-relaxed fade-up delay-1 max-w-lg"
            style={{ color: "rgba(237,229,212,0.92)" }}
          >
            Freelance projects built for businesses in Mau, UP &mdash; from
            hospital management to pharmacy billing systems, focused on
            practical tooling that improves daily operations.
          </p>
        </div>

        {/* Featured freelance project */}
        <div
          className="fade-up rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
          style={{
            background: "rgba(20,17,13,0.6)",
            border: "1px solid var(--line-strong)",
            borderRadius: "1.5rem",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--accent)", letterSpacing: "0.28em" }}
                >
                  Healthcare &middot; SaaS
                </span>
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ background: "#4ade80" }}
                />
                <span
                  className="text-xs"
                  style={{ color: "rgba(237,229,212,0.7)" }}
                >
                  Delivered
                </span>
              </div>

              <h3
                className="font-cormorant font-medium mb-4 leading-tight"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "var(--cream)",
                  letterSpacing: "-0.018em",
                }}
              >
                Up Singh Hospital
                <br />
                Patient Management System
              </h3>

              <p
                className="text-sm tracking-widest uppercase mb-8"
                style={{ color: "var(--accent)", letterSpacing: "0.24em" }}
              >
                Mau, Uttar Pradesh
              </p>

              <p
                className="text-base leading-relaxed mb-8 max-w-lg"
                style={{ color: "rgba(237,229,212,0.92)" }}
              >
                A full-stack web application built for Up Singh Hospital to
                digitize patient records, streamline billing, and bring
                transparency across every department. Replaced manual
                register-based tracking with a real-time system accessible to
                doctors, reception, and administration &mdash; reducing wait
                times and eliminating record discrepancies.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  {
                    label: "Patient records",
                    desc: "Digital registration, history, and prescriptions",
                  },
                  {
                    label: "Billing & payments",
                    desc: "Transparent invoicing with receipt generation",
                  },
                  {
                    label: "Appointment tracking",
                    desc: "Real-time schedule for doctors and staff",
                  },
                  {
                    label: "Dashboard & reports",
                    desc: "Daily, weekly, and monthly analytics",
                  },
                ].map((feature) => (
                  <div
                    key={feature.label}
                    className="p-4 rounded-xl"
                    style={{ background: "rgba(237,229,212,0.04)" }}
                  >
                    <div
                      className="text-sm font-medium mb-1"
                      style={{ color: "var(--cream)" }}
                    >
                      {feature.label}
                    </div>
                    <div
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(237,229,212,0.7)" }}
                    >
                      {feature.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs tracking-wide uppercase px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(237,229,212,0.06)",
                      border: "1px solid var(--line)",
                      color: "var(--cream)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="aspect-[4/3] rounded-xl overflow-hidden image-reveal fade-up"
                style={{
                  border: "1px solid var(--line)",
                  background: "rgba(20,17,13,0.8)",
                }}
              >
                <img
                  src="https://picsum.photos/seed/hospital-dashboard-mgmt/1200/900"
                  alt="Up Singh Hospital Patient Management System dashboard"
                  className="w-full h-full object-cover"
                  style={{
                    filter: "contrast(0.95) saturate(0.72) brightness(0.86)",
                  }}
                />
              </div>

              <div
                className="absolute -bottom-6 -left-6 p-5 rounded-xl hidden md:block"
                style={{
                  background: "rgba(20,17,13,0.9)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid var(--line-strong)",
                }}
              >
                <div
                  className="font-cormorant text-3xl font-medium"
                  style={{ color: "var(--cream)" }}
                >
                  100%
                </div>
                <div
                  className="text-xs tracking-widest uppercase mt-1"
                  style={{ color: "var(--accent)", letterSpacing: "0.2em" }}
                >
                  Records digitized
                </div>
              </div>

              <div
                className="absolute -top-6 -right-6 p-5 rounded-xl hidden md:block"
                style={{
                  background: "rgba(20,17,13,0.9)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid var(--line-strong)",
                }}
              >
                <div
                  className="font-cormorant text-3xl font-medium"
                  style={{ color: "var(--cream)" }}
                >
                  Zero
                </div>
                <div
                  className="text-xs tracking-widest uppercase mt-1"
                  style={{ color: "var(--accent)", letterSpacing: "0.2em" }}
                >
                  Paper registers
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dawavale — billing system */}
        <div
          className="fade-up rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden mt-12"
          style={{
            background: "rgba(20,17,13,0.6)",
            border: "1px solid var(--line-strong)",
            borderRadius: "1.5rem",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--accent)", letterSpacing: "0.28em" }}
                >
                  Pharmacy &middot; React Native
                </span>
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ background: "#4ade80" }}
                />
                <span
                  className="text-xs"
                  style={{ color: "rgba(237,229,212,0.7)" }}
                >
                  Delivered
                </span>
              </div>

              <h3
                className="font-cormorant font-medium mb-4 leading-tight"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "var(--cream)",
                  letterSpacing: "-0.018em",
                }}
              >
                Dawavale
                <br />
                Pharmacy Billing System
              </h3>

              <p
                className="text-sm tracking-widest uppercase mb-8"
                style={{ color: "var(--accent)", letterSpacing: "0.24em" }}
              >
                React Native &middot; Mobile-first
              </p>

              <p
                className="text-base leading-relaxed mb-8 max-w-lg"
                style={{ color: "rgba(237,229,212,0.92)" }}
              >
                A cross-platform mobile billing system built for Dawavale, an
                online pharmacy. Designed with a clean, modern interface to
                streamline order processing, invoice generation, and inventory
                tracking &mdash; making daily billing faster and more accurate
                for the pharmacy staff.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { label: "Smart billing", desc: "Auto-calculated orders with tax & discounts" },
                  { label: "Invoice PDF", desc: "Digital receipts ready to share or print" },
                  { label: "Inventory sync", desc: "Real-time stock updates on every sale" },
                  { label: "Customer history", desc: "Past orders and prescription records" },
                ].map((feature) => (
                  <div
                    key={feature.label}
                    className="p-4 rounded-xl"
                    style={{ background: "rgba(237,229,212,0.04)" }}
                  >
                    <div
                      className="text-sm font-medium mb-1"
                      style={{ color: "var(--cream)" }}
                    >
                      {feature.label}
                    </div>
                    <div
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(237,229,212,0.7)" }}
                    >
                      {feature.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {["React Native", "TypeScript", "Expo", "SQLite", "Zustand"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs tracking-wide uppercase px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(237,229,212,0.06)",
                      border: "1px solid var(--line)",
                      color: "var(--cream)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="aspect-[4/3] rounded-xl overflow-hidden image-reveal fade-up"
                style={{
                  border: "1px solid var(--line)",
                  background: "rgba(20,17,13,0.8)",
                }}
              >
                <img
                  src="https://picsum.photos/seed/dawavale-pharmacy-billing/1200/900"
                  alt="Dawavale Pharmacy Billing System"
                  className="w-full h-full object-cover"
                  style={{
                    filter: "contrast(0.95) saturate(0.72) brightness(0.86)",
                  }}
                />
              </div>

              <div
                className="absolute -bottom-6 -left-6 p-5 rounded-xl hidden md:block"
                style={{
                  background: "rgba(20,17,13,0.9)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid var(--line-strong)",
                }}
              >
                <div
                  className="font-cormorant text-3xl font-medium"
                  style={{ color: "var(--cream)" }}
                >
                  2x
                </div>
                <div
                  className="text-xs tracking-widest uppercase mt-1"
                  style={{ color: "var(--accent)", letterSpacing: "0.2em" }}
                >
                  Faster billing
                </div>
              </div>

              <div
                className="absolute -top-6 -right-6 p-5 rounded-xl hidden md:block"
                style={{
                  background: "rgba(20,17,13,0.9)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid var(--line-strong)",
                }}
              >
                <div
                  className="font-cormorant text-3xl font-medium"
                  style={{ color: "var(--cream)" }}
                >
                  Mobile
                </div>
                <div
                  className="text-xs tracking-widest uppercase mt-1"
                  style={{ color: "var(--accent)", letterSpacing: "0.2em" }}
                >
                  Cross-platform app
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
