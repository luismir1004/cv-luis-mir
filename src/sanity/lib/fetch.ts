import { client } from "../client";
import { MOCK_PROJECTS, MOCK_EXPERIENCE } from "./mockData";
import { type QueryParams } from "next-sanity";

export async function sanityFetch<ReturnType = any, const QueryString extends string = string>({
    query,
    params = {},
    perspective = "published",
    stega = false,
}: {
    query: QueryString;
    params?: QueryParams;
    perspective?: "previewDrafts" | "published";
    stega?: boolean;
}): Promise<ReturnType> {
    try {
        // Fallback for missing or placeholder project ID to prevent crash
        if (client.config().projectId === 'tp876543' || !client.config().projectId) {
            console.warn("Sanity Project: Using MOCK DATA.");

            // Simple string matching to detect which query is being run
            // In a real app we might pass a 'type' param, but here we infer from query string content
            if (query.includes('_type == "project"')) {
                return MOCK_PROJECTS as any;
            }
            if (query.includes('_type == "experience"')) {
                return MOCK_EXPERIENCE as any;
            }

            return [] as any;
        }

        return await client.fetch(query, params, {
            stega,
            perspective: perspective,
            // The `next` option allows you to verify the stale-while-revalidate behavior
            // and setting revalidate to 0 allows you to verify the dynamic behavior
            next: {
                revalidate: perspective === "previewDrafts" ? 0 : 60, // 60 seconds cache
            }
        });
    } catch (error) {
        console.error("Error fetching data from Sanity:", error);
        return [] as any;
    }
}
