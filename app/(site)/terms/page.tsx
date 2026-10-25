import type { Metadata } from "next";
import Link from "next/link";
import LegalDocument, { type LegalSection } from "@/components/ui/LegalDocument";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The rules for using teepin.com and the Teepin early-access program.",
  alternates: { canonical: "/terms" },
};

const contact = <a href="mailto:support@teepin.com">support@teepin.com</a>;

const SECTIONS: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement",
    body: (
      <>
        <p>
          These terms are an agreement between you and Teepin (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;). By using teepin.com, you accept them.
        </p>
        <p>
          If you use the site for a company, you accept them for that company
          and confirm you&rsquo;re allowed to. If you don&rsquo;t agree,
          don&rsquo;t use the site.
        </p>
      </>
    ),
  },
  {
    id: "scope",
    title: "What these terms cover",
    body: (
      <>
        <p>These terms cover the website and the early-access program.</p>
        <p>
          Our services (Teepin Inference, Compute, Storage, and Data
          &amp; Network) are provided under a separate service agreement.
          If that agreement conflicts with these terms, the service agreement
          wins.
        </p>
      </>
    ),
  },
  {
    id: "using-the-site",
    title: "Using the site",
    body: (
      <>
        <p>You may browse, read and link to the site. You agree not to:</p>
        <ul>
          <li>break the law or anyone&rsquo;s rights while using it;</li>
          <li>try to access systems or data you&rsquo;re not allowed to;</li>
          <li>
            disrupt or overload the site, including with automated traffic;
          </li>
          <li>upload or send malware;</li>
          <li>
            pose as Teepin or claim a connection with us that doesn&rsquo;t
            exist.
          </li>
        </ul>
        <p>We may block access for anyone who breaks these rules.</p>
      </>
    ),
  },
  {
    id: "early-access",
    title: "Early access",
    body: (
      <>
        <p>
          You can request early access by emailing us. A request doesn&rsquo;t
          guarantee a place. We decide who joins and when.
        </p>
        <p>
          Early-access services are pre-release. They may change, have limits,
          go down or be withdrawn. We may ask you to accept extra terms before
          you use them.
        </p>
        <p>
          Unless we agree otherwise in writing, they come as is, with no uptime
          or support commitment. Don&rsquo;t rely on them for anything critical.
        </p>
      </>
    ),
  },
  {
    id: "product-info",
    title: "Prices and product information",
    body: (
      <p>
        Product descriptions, prices, savings and other figures on this site are
        for information only. They are estimates, may change without notice,
        and are not an offer. What you pay is set in your service agreement or
        order.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <>
        <p>
          The site&rsquo;s content, design and code, and the Teepin name and
          logo, belong to Teepin or our licensors. These terms don&rsquo;t give
          you any rights to them beyond using the site.
        </p>
        <p>
          Don&rsquo;t copy, change or reuse them, including our name and logo,
          without our written permission. Shelby and other third-party names
          belong to their owners.
        </p>
      </>
    ),
  },
  {
    id: "feedback",
    title: "Feedback",
    body: (
      <p>
        If you send us ideas or feedback, we may use them freely, with no
        obligation to you.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    body: (
      <p>
        The site may link to other sites. We don&rsquo;t control them and
        aren&rsquo;t responsible for their content or practices.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: (
      <>
        <p>
          The site is provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo;. To the fullest extent the law allows, we disclaim
          all warranties, express or implied, including merchantability, fitness
          for a particular purpose and non-infringement.
        </p>
        <p>
          We don&rsquo;t promise the site will be uninterrupted, error-free or
          accurate.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <>
        <p>To the fullest extent the law allows:</p>
        <ul>
          <li>
            we aren&rsquo;t liable for indirect, incidental, special,
            consequential or punitive damages, or for lost profits, revenue or
            data, arising from your use of the site;
          </li>
          <li>
            our total liability for any claim about the site is limited to USD
            100.
          </li>
        </ul>
        <p>
          Nothing in these terms limits liability that the law doesn&rsquo;t
          allow us to limit, such as for fraud.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    body: (
      <p>
        If you misuse the site or break these terms and someone brings a claim
        against us because of it, you&rsquo;ll cover our reasonable losses and
        costs from that claim.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms. The date at the top shows the current
        version. If you keep using the site after a change, the new terms apply.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      // TODO: name the governing law and courts once Teepin's legal entity
      // and place of incorporation are confirmed.
      <p>
        These terms are governed by the laws of the place where Teepin is
        incorporated, without regard to conflict-of-law rules. Its courts have
        exclusive jurisdiction over any dispute, unless the law where you live
        lets you bring a claim there.
      </p>
    ),
  },
  {
    id: "general",
    title: "General",
    body: (
      <p>
        If any part of these terms can&rsquo;t be enforced, the rest still
        applies. If we don&rsquo;t enforce a right, we haven&rsquo;t given it
        up. You can&rsquo;t transfer these terms without our consent; we can
        transfer them to a successor. These terms and our{" "}
        <Link href="/privacy">Privacy Policy</Link> are the whole agreement
        about the site.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: <p>Questions about these terms: {contact}.</p>,
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      label="Terms"
      title="Terms and Conditions"
      updated="2026-10-12"
      summary={[
        "These terms cover teepin.com and our early-access program.",
        "Paid services come with their own agreement.",
        "Use the site lawfully and don't try to break it.",
        "Prices and figures on the site are estimates and can change.",
      ]}
      sections={SECTIONS}
      sibling={{ label: "Privacy Policy", href: "/privacy" }}
    />
  );
}
