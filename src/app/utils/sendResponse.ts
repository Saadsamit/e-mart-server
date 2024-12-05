import { Response } from 'express';

type TResponse<T> = {
  success: boolean;
  status: number;
  message: string;
  data?: T;
  token?: string;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  let response = {
    success: data.success,
    status: data.status,
    message: data.message,
    data: data.data,
    token: data.token
  };

  res.status(data?.status).json(response);
};

export default sendResponse;
