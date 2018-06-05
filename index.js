// @flow

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

export type LogoutResponse = {
  logoutOk: true,
  error?: ErrorType,
};

export type TokenData = {
    u: string,
    dbName: string,
};
