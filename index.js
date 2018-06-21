// @flow
import { ObjectId } from 'bson';

// ----
export type OPS = (
  'insertOne' | 'insertMany' |
  'updateOne' | 'updateMany' |
  'findOne' | 'find' | 'findOneAndUpdate' | 'findOneAndDelete' |
  'deleteOne' | 'deleteMany' |
  'count' |
  'unwatch' | 'watchQuery'
);

export type ErrorType = {
  statusCode: number,
  message: string,
  errorType: string,
  data: any,
}

export type OptionsType = {
  upsert?: boolean,
  project?: Object,
  sort?: Object,
  limit?: number,
  skip?: number,
}

export type Message = {
  requestID: number,
  collection: string,
  op: OPS,

  handle?: string,

  query: ?Object,
  update: ?Object,
  doc: ?Object,
  options: ?OptionsType,
};

export type CurrentUser = {
  uid: string,
  email: string,
  displayName: string,
}

export type ErrorResponse = {
  error: ?ErrorType,
}

// --- --- --- ---

export type RefreshResponse = {
  refreshOk: true,
  dbName: string,
  currentUser: CurrentUser,
  error?: ErrorType,
};

export type RegisterResponse = {
  registerOk: true,
  dbName: string,
  currentUser: CurrentUser,
  error?: ErrorType,
};

export type LoginResponse = {
  loginOk: true,
  dbName: string,
  currentUser: CurrentUser,
  error?: ErrorType,
};

export type ForgotPasswordResponse = {
  forgotPasswordOk: true,
  dbName: string,
  error?: ErrorType,
};

export type ResetPasswordResponse = {
  resetPasswordOk: true,
  dbName: string,
  error?: ErrorType,
};

export type LogoutResponse = {
  logoutOk: true,
  error?: ErrorType,
};

export type TokenData = {
    u: string,
    dbName: string,
};


export type RulesType = {
  rules?: { [key: any]: string | boolean | {
      read?: string | boolean;
      write?: string | boolean;
      create?: string | boolean;
      del?: string | boolean;
    };
  };
};


export type ProjectType = {
  _id: string,
  created: any,
  lastModified: any,
  dbName: string,
  ownerId: ObjectId,
  extra: Object,
  anonymousAccess: boolean,
  allowedDomains: Array<string>,
  rules: RulesType,
};

export type ProjectList = Array<{
  _id: string,
  dbName: string,
  ownerId: ObjectId,
  anonymousAccess: boolean,
  allowedDomains: Array<string>,
}>;
