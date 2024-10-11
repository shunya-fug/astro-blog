export type Blog = {
  title: string;
  content: string;
  eyecatch?: string;
  category?: Category;
};

export type Category = {
  name: string;
};
