import type { Metadata } from "next";
import Link from "next/link";
import LegalDocument, { type LegalSection } from "@/components/ui/LegalDocument";

/*
 * Rewritten 2026-11-10 for the apps, agents and services. The owner approved the content the same day:
 * - no refunds except in exceptional cases;
 * - Delaware law and courts;
 * - 30 days' notice of price changes and 14 days' notice of material changes;
 * - liability capped at the greater of 12 months' fees or USD 100.
 */

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The rules for using Teepin: the website, the console, the apps, agents and Teepin's services.",
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
          These terms are an agreement between you and Flashback Labs, Inc., a Delaware corporation that makes Teepin
          (“Teepin”, “we”, “us”). By creating an account or using Teepin, you accept them and our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
        <p>
          If you use Teepin for an organization, you accept these terms for that organization and confirm you’re allowed
          to. If you don’t agree, don’t use Teepin.
        </p>
      </>
    ),
  },
  {
    id: "scope",
    title: "What these terms cover",
    body: (
      <>
        <p>
          These terms cover teepin.com, the console at console.teepin.com, the Teepin apps for iPhone, Android, Windows
          and Mac, and Teepin’s services: agents, routines, connected apps, inference, storage, Build and the Teepin API.
        </p>
        <p>
          If you and we sign a separate agreement for a service, that agreement wins where it conflicts with these
          terms.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Who can use Teepin",
    body: (
      <p>
        You must be 18 or over, and able to enter a binding contract. You can’t use Teepin if the law where you are, or
        a sanctions list, bars you from doing so.
      </p>
    ),
  },
  {
    id: "accounts",
    title: "Your account",
    body: (
      <>
        <ul>
          <li>Give accurate information, and keep it up to date.</li>
          <li>Keep your sign-in secure. You’re responsible for what happens in your account.</li>
          <li>Tell us at once at {contact} if you think someone else has used it.</li>
        </ul>
        <p>
          <strong>Organization accounts.</strong> The organization owns its account, its agents and its data. Its owner
          and admins manage members, seats and settings, and the owner can transfer a member’s agents to themselves.
        </p>
      </>
    ),
  },
  {
    id: "agents",
    title: "Agents acting for you",
    body: (
      <>
        <p>
          Teepin’s agents act on your instructions. They can research, write, keep an eye on things, and build and run
          apps. With your permission, they can also act in the apps you connect and on websites they’re signed in to.
        </p>
        <ul>
          <li>
            Anything with real effects, such as sending, buying, publishing, deleting, or changing something, waits for
            your approval. You’re responsible for the instructions you give and the actions you approve.
          </li>
          <li>
            Agents can make mistakes. Check their work before you rely on it, especially before you act on it.
          </li>
          <li>
            Teepin isn’t a doctor, lawyer or financial adviser. Its answers aren’t professional advice.
          </li>
          <li>
            Some things Teepin won’t do, whatever it’s asked, such as diagnosing or prescribing, or giving personalized
            investment advice.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "connected-apps",
    title: "Connected apps and other websites",
    body: (
      <p>
        When you connect an app or have an agent act on a website, you allow us to access that service for you, within
        what you allowed. Your use of those services is under their own terms. You’re responsible for following them,
        including when an agent acts there on your instructions. We aren’t responsible for other companies’ services.
      </p>
    ),
  },
  {
    id: "your-content",
    title: "Your content",
    body: (
      <>
        <p>
          You own what you put into Teepin and what your agents make for you. You give us permission to host, process
          and send it only as needed to provide Teepin to you. We don’t use it to train AI models.
        </p>
        <p>
          You confirm you have the rights to the content you give us, and that our using it to provide Teepin won’t
          break the law or anyone’s rights.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You agree not to use Teepin, or have an agent, to:</p>
        <ul>
          <li>break the law, or anyone’s rights, including privacy and intellectual property;</li>
          <li>harm children, or make or share sexual content involving minors;</li>
          <li>harass, threaten, defraud or deceive people, or impersonate someone;</li>
          <li>send spam, or reach people who haven’t agreed to hear from you;</li>
          <li>
            make decisions about people’s jobs, credit, housing or similar, without a person reviewing them;
          </li>
          <li>
            access systems or data you’re not allowed to, upload malware, or attack, overload or probe Teepin or others;
          </li>
          <li>get around limits, plans or security, or resell Teepin without our written agreement.</li>
        </ul>
        <p>We may stop an action, remove content, or suspend an account that breaks these rules.</p>
      </>
    ),
  },
  {
    id: "plans-payment",
    title: "Plans, credit and payment",
    body: (
      <>
        <ul>
          <li>Prices are shown before you buy, in US dollars, plus any taxes that apply.</li>
          <li>
            Plans renew automatically each period until you cancel. Cancelling takes effect at the end of the period
            you’ve paid for.
          </li>
          <li>
            Prepaid credit doesn’t expire. When it runs out, the usage it pays for stops. Files you store are then held
            for 7 days, unreadable, and deleted if no credit is added.
          </li>
          <li>
            Payments are processed by our payment processor. You allow us to charge your payment method for your plan,
            renewals and the credit you buy.
          </li>
          <li>
            Payments aren’t refunded, including unused credit and partial periods, except where the law requires it
            or, in exceptional cases, at our discretion.
          </li>
          <li>We’ll tell you at least 30 days before a price change applies to you.</li>
        </ul>
      </>
    ),
  },
  {
    id: "previews",
    title: "Previews",
    body: (
      <p>
        Features marked preview or early access are still being built. They may change, have limits, go down or be
        withdrawn, and come with no uptime or support commitment.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Closing or suspending an account",
    body: (
      <>
        <p>
          You can close your account at any time in the apps or the console. Everything stops at once, and you have 30
          days to restore it. After that, your data is deleted as our <Link href="/privacy">Privacy Policy</Link>{" "}
          describes.
        </p>
        <p>
          We may suspend or close an account that breaks these terms, doesn’t pay, or puts Teepin or others at risk.
          Where we can, we’ll tell you first and give you a chance to fix it.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property and open source",
    body: (
      <>
        <p>
          Teepin, its design and code, and the Teepin name and logo belong to Flashback Labs, Inc. or our licensors.
          These terms don’t give you rights to them beyond using Teepin.
        </p>
        <p>
          Parts of Teepin are open source under the Apache License 2.0. That license, not these terms, governs that code.
          Other names and logos belong to their owners.
        </p>
      </>
    ),
  },
  {
    id: "feedback",
    title: "Feedback",
    body: <p>If you send us ideas or feedback, we may use them freely, with no obligation to you.</p>,
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: (
      <>
        <p>
          Teepin is provided “as is” and “as available”. To the fullest extent the law allows, we disclaim all
          warranties, express or implied, including merchantability, fitness for a particular purpose and
          non-infringement.
        </p>
        <p>
          We don’t promise Teepin will be uninterrupted or error-free, or that what agents produce will be accurate or
          complete.
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
            we aren’t liable for indirect, incidental, special, consequential or punitive damages, or for lost profits,
            revenue or data;
          </li>
          <li>
            our total liability for all claims about Teepin is limited to the greater of what you paid us in the 12
            months before the claim and USD 100.
          </li>
        </ul>
        <p>
          Nothing in these terms limits liability that the law doesn’t allow us to limit, such as for fraud, or your
          rights as a consumer that can’t be waived.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    body: (
      <p>
        If you misuse Teepin or break these terms, and someone brings a claim against us because of it, you’ll cover our
        reasonable losses and costs from that claim.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms. The date at the top shows the current version. For a material change, we’ll tell you
        by email or in the apps at least 14 days before it applies. If you keep using Teepin after that, the new terms
        apply.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of the State of Delaware, USA, without regard to conflict-of-law rules. The
        state and federal courts in Delaware have exclusive jurisdiction over any dispute, unless the law where you live
        lets you bring a claim there.
      </p>
    ),
  },
  {
    id: "general",
    title: "General",
    body: (
      <p>
        If any part of these terms can’t be enforced, the rest still applies. If we don’t enforce a right, we haven’t
        given it up. You can’t transfer these terms without our consent; we can transfer them to a successor. These terms
        and our <Link href="/privacy">Privacy Policy</Link> are the whole agreement about Teepin, unless you’ve signed a
        separate agreement with us.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: <p>Flashback Labs, Inc. Questions about these terms: {contact}.</p>,
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      label="Terms"
      title="Terms of Service"
      updated="2026-11-10"
      summary={[
        "Teepin is for people 18 and over.",
        "Your agents act on your instructions; anything with real effects waits for your yes.",
        "You own your content. We use it only to provide Teepin, never to train AI models.",
        "Plans renew until you cancel; prepaid credit doesn't expire.",
      ]}
      sections={SECTIONS}
      sibling={{ label: "Privacy Policy", href: "/privacy" }}
    />
  );
}
