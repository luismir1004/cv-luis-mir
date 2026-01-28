import { groq } from "next-sanity";

export const PROJECTS_QUERY = groq`*[_type == "project"] | order(orderRank) {
    _id,
    title,
    slug,
    description,
    url,
    tags,
    colors,
    "icon": icon.asset->url
}`;

export const EXPERIENCE_QUERY = groq`*[_type == "experience"] | order(date desc) {
    _id,
    role,
    subRole,
    date,
    description,
    points
}`;
