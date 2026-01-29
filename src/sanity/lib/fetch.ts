import { MOCK_PROJECTS, MOCK_EXPERIENCE } from "./mockData";
import { type QueryParams } from "next-sanity";
import { projectId } from "../env";

// Check if Sanity is properly configured
const isSanityConfigured = Boolean(
    projectId &&
    projectId !== '' &&
    projectId !== 'placeholder-build' &&
    projectId !== 'tp876543'
);

export async function sanityFetch<ReturnType = any, const QueryString extends string = string>({
    query,
}: {
    query: QueryString;
    params?: QueryParams;
    perspective?: "previewDrafts" | "published";
    stega?: boolean;
}): Promise<ReturnType> {
    // ALWAYS use mock data if Sanity is not configured
    // This prevents any network calls during build or when env vars are missing
    if (!isSanityConfigured) {
        console.warn("Sanity: Using MOCK DATA (no valid projectId).");

        // Simple string matching to detect which query is being run
        if (query.includes('_type == "project"')) {
            return MOCK_PROJECTS as any;
        }
        if (query.includes('_type == "experience"')) {
            return MOCK_EXPERIENCE as any;
        }

        return [] as any;
    }

    // Only import and use the client if we have a valid projectId
    try {
        const { client } = await import("../client");
        return await client.fetch(query, {}, {
            stega: false,
            perspective: 'published',
            next: {
                revalidate: 60,
            }
        });
    } catch (error) {
        console.error("Error fetching data from Sanity:", error);

        // Fallback to mock data on error
        if (query.includes('_type == "project"')) {
            return MOCK_PROJECTS as any;
        }
        if (query.includes('_type == "experience"')) {
            return MOCK_EXPERIENCE as any;
        }

        return [] as any;
    }
}
