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
    dbName: {
      type: 'string',
      minLength: 3,
      required: true,
      pattern: '^[^_]\\w*',
    },
    dbID: {
      type: 'string',
      minLength: 3,
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
    dbName: {
      type: 'string',
      minLength: 3,
      required: true,
      pattern: '^[^_]\\w*',
    },
    dbID: {
      type: 'string',
      minLength: 3,
      required: true,
    },
  },
};

const refreshSchema = {
  type: 'object',
  properties: {
    dbName: {
      type: 'string',
      minLength: 3,
      required: true,
      pattern: '^[^_]\\w*',
    },
    dbID: {
      type: 'string',
      minLength: 3,
      required: true,
    },
  },
};

module.exports = {
  loginSchema,
  refreshSchema,
  registerSchema,
};
