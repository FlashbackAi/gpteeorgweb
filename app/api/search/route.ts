import { createFromSource } from "fumadocs-core/search/server";
import { source } from "@/lib/source";

// The docs' search (the ⌘K dialog). The index is built from our own pages and
// served by this route: no external search service.
export const { GET } = createFromSource(source);
