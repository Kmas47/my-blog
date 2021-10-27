type IAuthorProps = {
  avatar: string;
  createdAt: string;
  id: string;
  name: string;
  postId: string;
  updatedAt: string;
};

export type ICardContentProps = {
  title?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  comments?: [];
  authors: IAuthorProps[];
};
