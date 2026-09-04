import { describe, expect, it } from "vitest";
import { getCacheControl, LONG_LIVED_ASSET_CACHE, SITEMAP_CACHE } from "../worker";

describe("MFE cache contract", () => {
    it("caches versioned assets and manifests for one year", () => {
        expect(getCacheControl("/_utilities/chrono/images/tool.webp")).toBe(LONG_LIVED_ASSET_CACHE);
        expect(getCacheControl("/_utilities/chrono/styles/tool.css")).toBe(LONG_LIVED_ASSET_CACHE);
        expect(getCacheControl("/en/utilities/categories/chrono/tool/manifest.json")).toBe(LONG_LIVED_ASSET_CACHE);
    });

    it("keeps sitemaps refreshable", () => {
        expect(getCacheControl("/_utilities/en/chrono/sitemap.xml")).toBe(SITEMAP_CACHE);
    });
});
