import type { Metadata } from "next";
import Link from "next/link";
import LegalDocument, { type LegalSection } from "@/components/ui/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What teepin.com collects, why, and how to see or delete it. No cookies, no analytics, no ad trackers.",
  alternates: { canonical: "/privacy" },
};

const contact = <a href="mailto:contact@teepin.com">contact@teepin.com</a>;

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          Teepin builds cloud and AI services on portable storage and idle
          data-centre compute. In this policy, &ldquo;Teepin&rdquo;,
          &ldquo;we&rdquo; and &ldquo;us&rdquo; mean the company that runs
          teepin.com.
        </p>
        <p>
          We decide how the personal data described here is used. Questions
          about this policy go to {contact}.
        </p>
      </>
    ),
  },
  {
    id: "scope",
    title: "What this policy covers",
    body: (
      <>
        <p>This policy covers teepin.com and any email you send us.</p>
        <p>
          Data you put into our services &mdash; files, models, prompts,
          databases &mdash; is customer data. Your service agreement with us
          governs it, not this policy. See{" "}
          <a href="#customer-data">Data on our services</a>.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <p>
          <strong>What you send us.</strong>{" "}
            When you email us &mdash; to
          request early access, ask a question or anything else &mdash; we get
          your email address, your name if you include it, and whatever you
          write. That may include your company and role.
        </p>
        <p>
          <strong>Server logs.</strong>{" "}
            When you load a page, our hosting
          provider records technical data: IP address, browser and device type,
          the page requested, the referring page and the time. We use it to run
          and protect the site.
        </p>
        <p>
          <strong>What we don&rsquo;t collect.</strong>{" "}
            This site sets no
          cookies. It runs no analytics, no ad trackers and no third-party
          scripts. Fonts and images are served from our own domain. There are no
          forms and no accounts.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use it",
    body: (
      <>
        <p>We use personal data to:</p>
        <ul>
          <li>reply to you;</li>
          <li>
            run the early-access program, including deciding who gets access
            and contacting you about it;
          </li>
          <li>keep the site running and secure, including spotting abuse;</li>
          <li>meet our legal obligations.</li>
        </ul>
        <p>
          We won&rsquo;t send you marketing email unless you&rsquo;ve asked for
          it.
        </p>
        <p>
          Where EU or UK law applies, our legal bases are: our legitimate
          interest in answering messages and running a secure site; steps you
          ask us to take before a contract, such as joining early access; your
          consent, where we ask for it; and legal obligations.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>
          We don&rsquo;t sell personal data. We don&rsquo;t share it for
          advertising. We share it only with:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong>{" "}
            who host the site and handle our
            email. They process it on our behalf, under contract, and
            can&rsquo;t use it for their own purposes.
          </li>
          <li>
            <strong>Authorities</strong>, when the law requires it.
          </li>
          <li>
            <strong>A buyer or successor</strong>, if Teepin is merged or
            acquired. This policy would still apply to data collected under it.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <>
        <p>
          <strong>Emails:</strong>{" "}
            as long as we need them to handle your
          request and run early access. You can ask us to delete them sooner.
        </p>
        <p>
          <strong>Server logs:</strong>{" "}
            a limited period, then deleted
          automatically.
        </p>
      </>
    ),
  },
  {
    id: "customer-data",
    title: "Data on our services",
    body: (
      <>
        <p>
          Our services are designed so workloads run inside trusted execution
          environments and stored data is encrypted. The aim is that neither we
          nor the owner of the hardware can read your data.
        </p>
        <p>
          The exact commitments for customer data are set out in your service
          agreement.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>You can ask us to:</p>
        <ul>
          <li>show you the personal data we hold about you;</li>
          <li>correct it;</li>
          <li>delete it;</li>
          <li>stop or limit how we use it;</li>
          <li>give you a copy in a portable format.</li>
        </ul>
        <p>Where we rely on your consent, you can withdraw it at any time.</p>
        <p>
          Email {contact}. We&rsquo;ll reply within 30 days. We may need to
          confirm it&rsquo;s you first.
        </p>
        <p>
          Depending on where you live, local law may give you more rights. You
          can also complain to your data protection authority.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    title: "International transfers",
    body: (
      <p>
        We and our providers may process data outside your country. When we
        move personal data out of the EU, the UK or another place that limits
        transfers, we use safeguards the law recognises, such as standard
        contractual clauses.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        We use reasonable technical and organisational measures to protect
        personal data. No system is perfectly secure. If a breach affects your
        data, we&rsquo;ll tell you as the law requires.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        This site is for businesses. It isn&rsquo;t aimed at children, and we
        don&rsquo;t knowingly collect data from anyone under 16. If you think we
        have, email us and we&rsquo;ll delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy. The date at the top shows the current
        version. If a change is significant, we&rsquo;ll say so on this page.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions or requests: {contact}. For the rules on using this site, see
        our <Link href="/terms">Terms and Conditions</Link>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      label="Privacy"
      title="Privacy Policy"
      updated="2026-10-12"
      summary={[
        "No cookies, analytics or ad trackers on this site.",
        "We only get what you email us, plus standard server logs.",
        "We don't sell your data or use it for ads.",
        "Email contact@teepin.com to see, fix or delete what we hold.",
      ]}
      sections={SECTIONS}
      sibling={{ label: "Terms and Conditions", href: "/terms" }}
    />
  );
}
