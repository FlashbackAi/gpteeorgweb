import type { Metadata } from "next";
import Link from "next/link";
import LegalDocument, { type LegalSection } from "@/components/ui/LegalDocument";

/*
 * Account deletion (2026-11-18), the page the Google Play listing links to. It must stay public (no sign-in) and
 * true to the code: closing is in the apps and the console (ROADMAP item 25), with a 30-day grace and then the purge
 * (teepin-core pkg/accounts/purge.go). Retention matches the Privacy Policy's "How long we keep it".
 */

export const metadata: Metadata = {
  title: "Delete your account",
  description:
    "How to delete your Teepin account and its data, what is deleted, what is kept and for how long.",
  alternates: { canonical: "/delete-account" },
};

const contact = <a href="mailto:support@teepin.com">support@teepin.com</a>;

const SECTIONS: LegalSection[] = [
  {
    id: "in-the-app",
    title: "In the Teepin app",
    body: (
      <>
        <ol>
          <li>Open the sidebar, tap your initials at the bottom, then tap your name to open Account settings.</li>
          <li>
            Under <strong>Close account</strong>, tap <strong>Close account…</strong>.
          </li>
          <li>
            Teepin lists each service that still has something running or stored. Type each service’s name to confirm,
            then close the account.
          </li>
        </ol>
        <p>The same steps work in the Teepin apps for Android, iPhone, Windows and Mac.</p>
      </>
    ),
  },
  {
    id: "on-the-web",
    title: "On the web",
    body: (
      <ol>
        <li>
          Sign in at <a href="https://console.teepin.com">console.teepin.com</a>.
        </li>
        <li>
          Go to <strong>Settings</strong>, then <strong>Account</strong>, and choose <strong>Close account</strong>.
        </li>
        <li>Confirm each service that is listed, then close the account.</li>
      </ol>
    ),
  },
  {
    id: "organizations",
    title: "Organization accounts",
    body: (
      <p>
        An organization’s account is closed by its primary owner, from <strong>Settings</strong>, then{" "}
        <strong>Organization</strong>, then <strong>Close account</strong>. Members can ask the owner, or write to us.
      </p>
    ),
  },
  {
    id: "by-email",
    title: "Can’t sign in?",
    body: (
      <p>
        Email {contact} from the address on your account and ask us to delete it. We may need to confirm it’s you first,
        and we’ll reply within 30 days.
      </p>
    ),
  },
  {
    id: "what-happens",
    title: "What happens next",
    body: (
      <ul>
        <li>The account closes at once. Everything running stops, and nobody can sign in.</li>
        <li>For 30 days you can change your mind and restore it, by signing in or by writing to us.</li>
        <li>
          After 30 days, the account’s data is deleted for good, and removed from backups within a further 35 days. We
          email you when it’s done.
        </li>
        <li>Unused credit is forfeited, not refunded. If you have credit left, write to us before you close.</li>
      </ul>
    ),
  },
  {
    id: "deleted",
    title: "What is deleted",
    body: (
      <ul>
        <li>your profile: name, email address, password and sign-in connections;</li>
        <li>your chats, agents, what Teepin remembers about you, routines and connected apps;</li>
        <li>the documents, tables and apps your agents made, and the files in Teepin Storage;</li>
        <li>workspaces, app images and anything still running;</li>
        <li>your saved payment details at our payment processor.</li>
      </ul>
    ),
  },
  {
    id: "kept",
    title: "What is kept, and for how long",
    body: (
      <ul>
        <li>
          <strong>Billing and tax records</strong> (invoices, payments, credit and usage records): as long as the law
          requires, usually 7 years.
        </li>
        <li>
          <strong>A record that the account existed and was closed</strong>, without your name, email address or
          content, so our records stay consistent.
        </li>
        <li>
          <strong>Logs:</strong> a limited period, then deleted automatically.
        </li>
      </ul>
    ),
  },
  {
    id: "only-some-data",
    title: "Deleting some data without closing",
    body: (
      <p>
        You don’t have to close your account to delete things. You can delete chats, files and agents, edit or delete
        what Teepin remembers, and disconnect apps at any time in the apps or the console. See our{" "}
        <Link href="/privacy">Privacy Policy</Link> for more.
      </p>
    ),
  },
];

export default function DeleteAccountPage() {
  return (
    <LegalDocument
      label="Delete account"
      title="Delete your Teepin account"
      updated="2026-11-18"
      summary={[
        "Close your account in the Teepin app or at console.teepin.com, under Account settings.",
        "Can't sign in? Email support@teepin.com from your account's address.",
        "You have 30 days to restore it. After that, your data is deleted for good.",
        "Billing and tax records are kept as long as the law requires, usually 7 years.",
      ]}
      sections={SECTIONS}
      sibling={{ label: "Privacy Policy", href: "/privacy" }}
    />
  );
}
