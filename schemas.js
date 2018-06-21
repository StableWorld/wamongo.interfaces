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
  properties: {
    additionalProperties: false,
  },
};

const rulesSchema = {
  id: 'RulesType',
  type: 'object',
  properties: {
    rules: {
      type: 'object',
      required: true,
      patternProperties: {
        '^\\w*$': {
          anyOf: [
            { type: 'string' },
            { type: 'boolean' },
            {
              type: 'object',
              properties: {
                read: { anyOf: [{ type: 'string' }, { type: 'boolean' }] },
                write: { anyOf: [{ type: 'string' }, { type: 'boolean' }] },
                insert: { anyOf: [{ type: 'string' }, { type: 'boolean' }] },
                del: { anyOf: [{ type: 'string' }, { type: 'boolean' }] },
              },
              additionalProperties: false,
            },
          ],
        },
        additionalProperties: false,
      },
    },
  },
  additionalProperties: false,
};

module.exports = {
  loginSchema,
  refreshSchema,
  registerSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  rulesSchema,
};
