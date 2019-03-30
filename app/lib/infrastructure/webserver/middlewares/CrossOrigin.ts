import { NextFunction, Request, Response } from "express";

// Backward compatible - strip off /v2
// tslint:disable-next-line: export-name
export function crossOrigin(_: Request, response: Response, next: NextFunction): void {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Methods', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  next()
}