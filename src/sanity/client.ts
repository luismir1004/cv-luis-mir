import { createClient, type SanityClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from './env'

// Create a placeholder client for build time when projectId is not available
// The sanityFetch function will use mock data in this case
const createSafeClient = (): SanityClient => {
    // Use a dummy projectId during build if none is provided
    // This prevents the error during static generation
    const safeProjectId = projectId || 'placeholder-build';

    return createClient({
        projectId: safeProjectId,
        dataset,
        apiVersion,
        useCdn,
        perspective: 'published',
    });
}

export const client = createSafeClient();

// Helper to check if we're using a real Sanity connection
export const isSanityConfigured = (): boolean => {
    return Boolean(projectId && projectId !== 'placeholder-build' && projectId !== 'tp876543');
}
