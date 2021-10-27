type IAuthorProps = {
  avatar: string;
  createdAt: string;
  id: string;
  name: string;
  postId: string;
  updatedAt: string;
};

type IComments = {
  createdAt: string;
  description: string;
  id: string;
  postId: string;
  title: string;
  updatedAt: string;
};

export type ICardContentProps = {
  title: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
  comments?: IComments[];
  authors: IAuthorProps[];
};

export type IBlogPost = {
  authors: IAuthorProps[];
  comments: IComments[];
  createdAt: string;
  description: string;
  id: string;
  title: string;
  updatedAt: string;
};
