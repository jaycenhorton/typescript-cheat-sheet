import express = require('express');

type MutationBody = { id: string };
// MutationRequestBody is {...express.Request['body'], id:string}
type MutationRequestBody = express.Request['body'] & MutationBody;

// Request is {...express.Request, cookies, session}
export default interface Request extends express.Request {
  cookies: { [key: string]: string };
  session: any;
}
// Request is {...Request, body: {...express.Request['body'], id:string}}
export interface Mutation extends Request {
  body: MutationRequestBody;
}
