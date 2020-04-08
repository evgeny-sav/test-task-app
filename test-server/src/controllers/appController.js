import { Router } from 'express';
import axios from 'axios';

import { TESTAPP_API_URL } from '../../configs/config';

const appController = {
  get router() {
    const appRouter = new Router();

    appRouter.post('/login', async (req, res, next) => {
      try {
        const { data } = await axios.post(`${TESTAPP_API_URL}/Api/Session/Logon`, req.body);
        return res.json(data);
      } catch (err) {
        res.status(err.response.status);
        return res.json({ Error: { ...err.response.data } });
      }
    });

    appRouter.delete('/logout/:token', async (req, res, next) => {
      try {
        await axios.delete(`${TESTAPP_API_URL}/Api/Session/Logout/${req.params.token}`, req.body);
        return res.end();
      } catch (err) {
        res.status(err.response.status);
        return res.json({ Error: { ...err.response.data } });
      }
    });

    appRouter.get('/users/:token', async (req, res, next) => {
      try {
        const { data } = await axios.get(`${TESTAPP_API_URL}/Api/Data/ListUsers`, {
          headers: {
            SessionToken: req.params.token,
          },
        });

        return res.json(data);
      } catch (err) {
        res.status(err.response.status);
        return res.json({ Error: { ...err.response.data } });
      }
    });

    appRouter.get('/users/:id/:token', async (req, res, next) => {
      try {
        const { data } = await axios.get(`${TESTAPP_API_URL}/Api/Data/GetUser/${req.params.id}`, {
          headers: {
            SessionToken: req.params.token,
          },
        });

        return res.json(data);
      } catch (err) {
        res.status(err.response.status);
        return res.json({ Error: { ...err.response.data } });
      }
    });

    return appRouter;
  },
};

export default appController;
