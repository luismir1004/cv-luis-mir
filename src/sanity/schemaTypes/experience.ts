import { defineField, defineType } from 'sanity'

export const experienceType = defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'role',
            title: 'Role Title',
            type: 'string',
        }),
        defineField({
            name: 'subRole',
            title: 'Sub Role / Company',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'Date Range',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'points',
            title: 'Key Achievements',
            type: 'array',
            of: [{ type: 'string' }]
        }),
    ],
})
