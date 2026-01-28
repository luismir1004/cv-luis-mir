import { defineField, defineType } from 'sanity'

export const techType = defineType({
    name: 'tech',
    title: 'Technology',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Frontend', value: 'frontend' },
                    { title: 'Backend / AI', value: 'backend' },
                    { title: 'Infrastructure', value: 'infra' },
                    { title: 'Other', value: 'other' }
                ]
            }
        }),
        defineField({
            name: 'icon',
            title: 'Icon (SVG string or Image)',
            type: 'string',
            description: 'Paste the SVG code here for now'
        }),
    ],
})
