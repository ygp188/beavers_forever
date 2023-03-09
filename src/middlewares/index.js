import { Post } from '../../db/models';

export const pathMiddleware = (req, res, next) => {
  res.locals.url = req?.url;
  next();
};

export const authMiddleware = (req, res, next) => {
  res.locals.user = req?.session?.user;
  next();
};

export const checkUser = async (req, res, next) => {
  const { id } = req?.params;
  const post = await Post.findByPk(id);

  if (post?.user_id === req?.session?.user?.id) {
    return next();
  }

  return res.sendStatus(401);
};
