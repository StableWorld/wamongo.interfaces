// @flow

const loginSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      minLength: 1,
      required: true,
    },
    password: {
      type: 'string',
      minLength: 1,
      required: true,
    },
  },
};

const resetPasswordSchema = {
  type: 'object',
  properties: {
    newPassword: {
      type: 'string',
      minLength: 1,
      required: true,
    },
    token: {
      type: 'string',
      minLength: 1,
      required: true,
    },
  },
};

const forgotPasswordSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      minLength: 1,
      required: true,
    },
  },
};

const registerSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'email',
      required: true,
    },
    password: {
      type: 'string',
      minLength: 6,
      required: true,
    },
  },
};

const refreshSchema = {
  type: 'object',
  properties: { },
};

module.exports = {
  loginSchema,
  refreshSchema,
  registerSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
};
