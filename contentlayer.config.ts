// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/**/*.mdx`,
  contentType: 'markdown',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'image' },
    publishedAt: { type: 'date', required: true },
    updatedAt: { type: 'date', required: true },
    author: { type: 'string', required: true },
    isPublished: { type: 'boolean', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true }
  }
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog]
});
