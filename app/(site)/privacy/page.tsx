import type { Metadata } from "next";
import Link from "next/link";
import LegalDocument, { type LegalSection } from "@/components/ui/LegalDocument";

/*
 * Rewritten 2026-11-10 for the apps, agents and services. The owner approved the content the same day:
 * - the storage network and the AI model providers are in the US;
 * - model providers don't train on customer data.
 * Every statement here must stay true on the day it is published (ROADMAP item 83 changes the keys wording).
 */

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What Teepin collects, why, who sees it, and how to see, change or delete it. We don't sell your data, use it for ads, or train AI models on it.",
  alternates: { canonical: "/privacy" },
};

const contact = <a href="mailto:support@teepin.com">support@teepin.com</a>;

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          Teepin is made by Flashback Labs, Inc., a Delaware corporation. In this policy, “Teepin”, “we” and “us”
          mean Flashback Labs, Inc.
        </p>
        <p>
          We decide how the personal data in this policy is used. For content an organization puts into Teepin, we
          process it on that organization’s behalf and under its instructions. Questions go to {contact}.
        </p>
      </>
    ),
  },
  {
    id: "scope",
    title: "What this policy covers",
    body: (
      <>
        <p>This policy covers:</p>
        <ul>
          <li>this website, teepin.com, and the console at console.teepin.com;</li>
          <li>the Teepin apps for iPhone, Android, Windows and Mac;</li>
          <li>
            Teepin’s services: agents, routines, connected apps, inference, storage, Build and the Teepin API;
          </li>
          <li>email you send us.</li>
        </ul>
        <p>
          If you use Teepin through an organization’s account, that organization controls its workspace and may have
          its own policies too.
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
          <strong>Your account.</strong> Your name, email address and password (we keep only a secure hash of it, never
          the password itself). Your date of birth, to confirm you’re 18 or over. Whether the account is personal or an
          organization’s, and the organization’s name. If you sign in with Google or Apple, we receive your name, email
          address and an identifier from them. Apple may give us a private relay address instead of your email.
        </p>
        <p>
          <strong>What you give Teepin.</strong> Your messages and instructions, files and images you share, the things
          your agents make for you (documents, tables, apps and routines), what Teepin remembers about you, and files
          you keep in Teepin Storage.
        </p>
        <p>
          <strong>Apps you connect.</strong> When you connect an app, such as Gmail, Calendar or Drive, we access only
          what you allow on that app’s own consent screen, and only to do what you or your agents ask. See{" "}
          <a href="#google-data">Google user data</a>.
        </p>
        <p>
          <strong>Websites your agent is signed in to.</strong> When you sign your agent in to a website, you do it
          yourself in a live view of the agent’s browser. We never see the password you type. The website’s sign-in
          session is kept, encrypted, on your agent’s computer, so the agent stays signed in. You can sign it out at any
          time.
        </p>
        <p>
          <strong>Payments.</strong> Our payment processor handles your card or bank details. We never receive full card
          numbers. We receive your plan, the amounts, limited payment details such as the card type and last four
          digits, and the billing details you give, such as country and tax ID.
        </p>
        <p>
          <strong>Devices and use.</strong> Device type, operating system and app version, the token we need to send
          you notifications, IP address, sign-in times, and usage records (for example tokens, storage and compute
          time) so we can bill you correctly and keep limits fair. We also keep logs of requests and errors, to run and
          protect Teepin.
        </p>
        <p>
          <strong>This website.</strong> teepin.com sets no cookies and runs no analytics, ad trackers or third-party
          scripts. The console and the apps keep your sign-in on your own device.
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
          <li>provide Teepin: run your agents, routines, apps and storage, and answer your requests;</li>
          <li>bill you correctly, and enforce plans and limits;</li>
          <li>keep Teepin and its users safe, including preventing fraud and abuse;</li>
          <li>help you when you contact support;</li>
          <li>
            send service email, such as sign-in codes, receipts, and alerts you’ve asked for (no marketing unless you
            ask for it);
          </li>
          <li>meet our legal obligations.</li>
        </ul>
        <p>
          <strong>We never sell your data, never use it for advertising, and never use it to train AI models</strong>,
          ours or anyone else’s. To keep Teepin working and improve it, we look at aggregate usage and error data, not
          your content.
        </p>
        <p>
          Where EU or UK law applies, our legal bases are: performing our contract with you; our legitimate interest in
          running a secure and reliable service; your consent, where we ask for it; and legal obligations.
        </p>
      </>
    ),
  },
  {
    id: "agents",
    title: "How your agents use your data",
    body: (
      <>
        <ul>
          <li>Your agents work only for your account and only on what you or your organization ask.</li>
          <li>
            Anything with real effects, such as sending, buying, publishing, deleting, or changing something in your
            apps, waits for your approval.
          </li>
          <li>
            What Teepin remembers about you is visible to you. You can change or delete it at any time.
          </li>
          <li>Agents can make mistakes. Check anything important before you rely on it.</li>
        </ul>
      </>
    ),
  },
  {
    id: "google-data",
    title: "Google user data",
    body: (
      <>
        <p>
          When you connect a Google account, Teepin may read or change Gmail, Calendar, Drive, Docs or Sheets, only as
          far as you allow on Google’s consent screen. We use that data only to provide the features you use in Teepin,
          such as finding an email, drafting a reply, or adding an event, and nothing else.
        </p>
        <p>
          Teepin’s use and transfer to any other app of information received from Google APIs will adhere to the{" "}
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements. In particular:
        </p>
        <ul>
          <li>we don’t use Google user data for advertising, and we don’t sell it;</li>
          <li>we don’t use it to train generalized AI or machine-learning models;</li>
          <li>
            no person at Teepin reads it, unless you ask us to (for example, for support), it’s needed for security or
            to investigate abuse, or the law requires it;
          </li>
          <li>
            we transfer it only to provide or improve the features you use, for security, or as the law requires.
          </li>
        </ul>
        <p>
          You can disconnect Google at any time in Connect apps, which removes Teepin’s access at Google. Anything Teepin
          already brought into your chats or memory stays there until you delete it or close your account.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>We share personal data only with:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who run parts of Teepin for us: cloud hosting, our storage network, AI
            model providers that process your requests, our payment processor, email delivery, and sign-in providers.
            They process data only on our behalf and under contract. AI model providers may not train on it.
          </li>
          <li>
            <strong>The apps and websites you direct us to.</strong> When you connect an app, or an agent acts on a
            website for you, we send what that action needs.
          </li>
          <li>
            <strong>Your organization.</strong> On an organization’s account, its owner and admins can see members,
            seats, usage and billing. They manage the organization’s agents, and can transfer a member’s agents to the
            owner.
          </li>
          <li>
            <strong>Authorities</strong>, when the law requires it.
          </li>
          <li>
            <strong>A buyer or successor</strong>, if Flashback Labs, Inc. is merged or acquired. This policy would still
            apply to data collected under it.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "Security and encryption",
    body: (
      <>
        <p>
          Data is encrypted in transit and at rest. Each account’s data is encrypted with its own key.
        </p>
        <p>
          Today Teepin holds the encryption keys in a managed key service, and every use is logged. We’re building
          customer-held keys and enclave-only processing; this page will say when each is live.
        </p>
        <p>
          Teepin staff don’t access your content unless you ask us to, for example for support, and each access is
          recorded with its reason. The exceptions are security incidents and legal requirements.
        </p>
        <p>
          No system is perfectly secure. If a breach affects your data, we’ll tell you as the law requires.
        </p>
      </>
    ),
  },
  {
    id: "where",
    title: "Where your data is",
    body: (
      <p>
        Teepin’s servers, the storage network that holds your files, and the AI model providers that process your
        requests are in the United States. Files you keep in Teepin Storage are encrypted before they leave our systems.
        When we move personal data out of the EU, the UK or another place that limits transfers, we use safeguards the
        law recognises, such as standard contractual clauses.
      </p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <>
        <ul>
          <li>
            <strong>Your content:</strong> while your account is open, until you delete it. Deleted items are removed
            within 30 days, and from backups within 35 days. A deleted agent stays in Recently deleted for 7 days, so you
            can restore it.
          </li>
          <li>
            <strong>Closing your account:</strong> you can close it in the apps or the console. Everything stops at once,
            and you have 30 days to restore it. After that, your data is deleted, and removed from backups within a
            further 35 days.
          </li>
          <li>
            <strong>Billing and tax records:</strong> as long as the law requires, usually 7 years.
          </li>
          <li>
            <strong>Logs:</strong> a limited period, then deleted automatically.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights and choices",
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
        <p>
          Many of these you can do yourself: edit what Teepin remembers about you, disconnect apps, delete chats and
          files, and close your account. Where we rely on your consent, you can withdraw it at any time.
        </p>
        <p>
          Email {contact}. We’ll reply within 30 days, and we may need to confirm it’s you first. We won’t treat you
          differently for using your rights. Depending on where you live, for example in California or the EU, local law
          may give you more rights. You can also complain to your data protection authority.
        </p>
      </>
    ),
  },
  {
    id: "age",
    title: "Age",
    body: (
      <p>
        Teepin is only for people 18 and over. We ask for your date of birth to check this, and we use it for nothing
        else. If you think someone under 18 has given us data, email us and we’ll delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy. The date at the top shows the current version. If a change is significant, we’ll tell
        you by email or in the apps before it applies.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Flashback Labs, Inc. Questions or requests: {contact}. For the rules on using Teepin, see our{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      label="Privacy"
      title="Privacy Policy"
      updated="2026-11-10"
      summary={[
        "We never sell your data, use it for ads, or train AI models on it.",
        "Your agents act only for you, and anything with real effects waits for your yes.",
        "Google data is used only for the features you use, under Google's Limited Use rules.",
        "Email support@teepin.com to see, fix or delete what we hold.",
      ]}
      sections={SECTIONS}
      sibling={{ label: "Terms of Service", href: "/terms" }}
    />
  );
}
