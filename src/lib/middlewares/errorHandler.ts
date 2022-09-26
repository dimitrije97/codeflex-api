import { NextFunction, Request, Response } from 'express';
import { CelebrateError } from 'celebrate';
import { BadCredentialsException, MissingInventoryException, UnauthorizedException } from '../exceptions';
import {
    BAD_REQUEST,
    INTERNAL_SERVER_ERROR,
    NOT_FOUND,
    UNAUTHORIZED,
    UNKNOWN_ERROR
} from '../utils/constants/ErrorMessages';

// @ts-ignore
const isBadRequest = (exception): boolean =>
  exception instanceof MissingInventoryException ||
  exception instanceof BadCredentialsException ||
  exception instanceof CelebrateError;

// @ts-ignore
const isNotFount = (exception): boolean => exception instanceof ResourceNotFoundException;

const isUnauthorized = (exception): boolean => exception instanceof UnauthorizedException;

// @ts-ignore
const createBadRequestError = (exception): ErrorResponse => ({
  httpStatus: BAD_REQUEST,
  message: exception?.message,
});

// @ts-ignore
const createNotFoundError = (exception): ErrorResponse => ({
  httpStatus: NOT_FOUND,
  message: exception?.message,
});

// @ts-ignore
const createInternalServerError = (exception): ErrorResponse => ({
  httpStatus: INTERNAL_SERVER_ERROR,
  message: UNKNOWN_ERROR,
});

// @ts-ignore
const createUnauthorizedError = (exception): ErrorResponse => ({
  httpStatus: UNAUTHORIZED,
  message: exception?.message,
});

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
  if (isBadRequest(err)) {
    res.status(400).send(createBadRequestError(err));
    return;
  }

  if (isUnauthorized(err)) {
    res.status(401).send(createUnauthorizedError(err));
    return;
  }

  if (isNotFount(err)) {
    res.status(404).send(createNotFoundError(err));
    return;
  }

  console.log('Unknown error', err); // TODO: add logger
  res.status(500).send(createInternalServerError(err));
};
