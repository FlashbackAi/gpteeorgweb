import Image from "next/image";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";

function Title() {
  return (
    <span className="flex items-center gap-2">
      <Image
        src="/teepin-wordmark.svg"
        alt="Teepin"
        width={93}
        height={15}
        className="dark:invert"
        priority
      />
      <span className="text-fd-muted-foreground font-mono text-xs uppercase tracking-widest">
        Docs
      </span>
    </span>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      nav={{ title: <Title />, url: "/docs" }}
      themeSwitch={{ mode: "light-dark-system" }}
      links={[
        { text: "Console", url: "https://console.teepin.com", external: true },
        { text: "teepin.com", url: "/" },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
