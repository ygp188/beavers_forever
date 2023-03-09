import express from 'express';
import { Beaver } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const beavers = await Beaver.findAll({ order: [['updatedAt', 'DESC']] });
    const initState = { beavers };
    res.render('Layout', initState);
  } catch (err) {
    res.sendStatus(500);
  }
});

export default router;
