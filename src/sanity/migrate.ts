
import { createClient } from '@sanity/client'
import { PROJECTS_DATA, TRANSLATIONS } from '../data'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN, // Needs a token with write access
    useCdn: false,
})

async function migrate() {
    console.log('Starting migration...')

    // Migrate Projects
    for (const project of PROJECTS_DATA) {
        console.log(`Migrating project: ${project.title}`)
        await client.createOrReplace({
            _type: 'project',
            _id: `project-${project.id}`,
            title: project.title,
            slug: { current: project.id }, // crude slug generation
            url: project.url,
            description: {
                es: project.description.es,
                en: project.description.en
            },
            tags: project.tags,
            colors: project.colors,
            // Map icons manually if needed, simplified for now
            icons: {
                tech: project.icons.tech,
                bg: project.icons.bg
            }
        })
    }

    // Migrate Experience
    // Construct experience objects from TRANSLATIONS
    const expEs = TRANSLATIONS.es;

    // This is a manual mapping based on known structure of roles in data.ts
    const experiences = [
        {
            id: 'role-1',
            role: expEs.role_1,
            subRole: expEs.role_1_sub,
            date: expEs.role_1_date,
            description: expEs.role_1_desc,
            points: [expEs.role_1_point1, expEs.role_1_point2],
            order: 1
        },
        {
            id: 'role-2',
            role: expEs.role_2,
            subRole: expEs.role_2_sub,
            date: expEs.role_2_date,
            description: expEs.role_2_desc,
            points: [expEs.role_2_point1, expEs.role_2_point2],
            order: 2
        }
    ]

    for (const exp of experiences) {
        console.log(`Migrating experience: ${exp.role}`)
        await client.createOrReplace({
            _type: 'experience',
            _id: exp.id,
            role: exp.role,
            subRole: exp.subRole,
            date: exp.date,
            description: exp.description,
            points: exp.points
        })
    }

    console.log('Migration complete!')
}

migrate().catch(console.error)
