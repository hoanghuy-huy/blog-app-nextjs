export interface Blog {
  title: string;
  description: string;
  image: {
    filePath: string | null;
    relativeFilePath: string | null;
    format: string | null;
    height: number | null;
    width: number | null;
    blurhashDataUrl: string | null;
    aspectRatio: number | null;
  };
  publishedAt: string;
  updatedAt: string;
  author: string;
  isPublished: boolean;
  tags: string[];
  //   _id: string;
  //   _raw: {
  //     sourceFilePath: string;
  //     sourceFileName: string;
  //     sourceFileDir: string;
  //     contentType: 'markdown';
  //     flattenedPath: string;
  //   };
  //   body: {
  //     raw: string;
  //     code: string;
  //   };
}
