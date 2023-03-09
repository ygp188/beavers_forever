import express from 'express';
import { Beaver, Post, User } from '../../db/models';
import { checkUser } from '../middlewares';

const router = express.Router();

// beavers
router.post('/beavers', async (req, res) => {
  try {
    const newBeaver = await Beaver.create(req.body);
    res.json(newBeaver);
  } catch (err) {
    res.sendStatus(500);
  }
});

router.delete('/beavers/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Beaver.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});

// posts
router
  .route('/posts')
  .get(async (req, res) => {
    try {
      const posts = await Post.findAll({ include: User });
      res.json(posts);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const id = req.session.user?.id;
      const newPost = await Post.create({ ...req.body, user_id: id });
      const postWithUser = await Post.findByPk(newPost.id, { include: User });
      res.json(postWithUser);
    } catch (err) {
      res.sendStatus(500);
    }
  });

router
  .route('/posts/:id')
  .delete(checkUser, async (req, res) => {
    const { id } = req.params;
    try {
      await Post.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .patch(checkUser, async (req, res) => {
    const { id } = req.params;
    try {
      await Post.update(req.body, { where: { id } });
      const updatedPost = await Post.findByPk(id, { include: User });
      res.json(updatedPost);
    } catch (err) {
      res.sendStatus(500);
    }
  });

export default router;
