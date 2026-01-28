import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './project'
import { experienceType } from './experience'
import { techType } from './tech'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [projectType, experienceType, techType],
}
