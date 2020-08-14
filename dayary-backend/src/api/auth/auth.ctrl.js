import Joi from '@hapi/joi';
import User from '../../models/user';

/**
 * {
 *  userId: 'test',
 *  password: 'test'
 * }
 */
export const register = async (ctx) => {
  // Request Body
  const schema = Joi.object().keys({
    userId: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { userId, password } = ctx.request.body;
  try {
    const exists = await User.findByUserId(userId);
    if (exists) {
      ctx.status = 409;
      return;
    }
    const user = new User({
      userId,
    });
    await user.setPassword(password);
    await user.save();

    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (err) {
    ctx.throw(500, err);
  }
};

/**
 * POST /api/auth/login
 * {
 *  userId: 'test',
 *  password: 'test'
 * }
 */
export const login = async (ctx) => {
  const { userId, password } = ctx.request.body;
  if (!userId || !password) {
    ctx.status = 401;
    return;
  }

  try {
    const user = await User.findByUserId(userId);
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(e);
  }
};

/**
 * GET /api/auth/check
 */
export const check = async (ctx) => {
  const { user } = ctx.state;
  console.log(user);
  if (!user) {
    ctx.status = 401;
    return;
  }
  ctx.body = user;
};

/**
 * POST /api/auth/logout
 */
export const logout = async (ctx) => {
  ctx.cookies.set('토큰 발급');
  ctx.status = 204;
};
