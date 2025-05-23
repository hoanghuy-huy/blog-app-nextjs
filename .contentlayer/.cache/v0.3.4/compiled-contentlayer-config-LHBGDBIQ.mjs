// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/**/*.mdx`,
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    image: { type: "image" },
    publishedAt: { type: "date", required: true },
    updatedAt: { type: "date", required: true },
    author: { type: "string", required: true },
    isPublished: { type: "boolean", required: true },
    tags: { type: "list", of: { type: "string" }, required: true }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Blog]
});
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-LHBGDBIQ.mjs.map
