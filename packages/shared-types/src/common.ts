export interface ICommonEntity {
  id: string;
  created: Date;
  updated: Date;
}

export interface IErrorResponse {
  statusCode: number;
  message: string;
  error?: string;
}
