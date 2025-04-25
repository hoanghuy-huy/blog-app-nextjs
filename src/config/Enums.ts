export const PATH = {
  BLOGS: {
    _: '/blogs',
    SLUG: (slug: string) => `${PATH.BLOGS._}/${slug}`
  }
};
