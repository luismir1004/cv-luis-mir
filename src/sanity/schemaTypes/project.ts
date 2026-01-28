import { defineField, defineType } from 'sanity'

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description (Multilingual)',
            type: 'object',
            fields: [
                { name: 'es', title: 'Spanish', type: 'text' },
                { name: 'en', title: 'English', type: 'text' }
            ]
        }),
        defineField({
            name: 'url',
            title: 'Project URL',
            type: 'url',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'colors',
            title: 'Theme Colors',
            type: 'object',
            fields: [
                { name: 'hex', title: 'Hex Code', type: 'string' },
                { name: 'iconBg', title: 'Icon Background Class', type: 'string' },
                { name: 'iconText', title: 'Icon Text Class', type: 'string' },
                { name: 'hoverText', title: 'Hover Text Class', type: 'string' }
            ]
        }),
        defineField({
            name: 'icons',
            title: 'Icons (SVG Code)',
            type: 'object',
            fields: [
                { name: 'tech', title: 'Tech Icon (SVG)', type: 'text' },
                { name: 'bg', title: 'Background Icon (SVG)', type: 'text' }
            ]
        })
    ],
})
