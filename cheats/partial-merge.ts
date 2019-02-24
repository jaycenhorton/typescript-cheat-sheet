import { Request } from 'apollo-server-env';

type MutationBody = { id: string };

type MutationRequestBody = Partial<express.Request['body']> & MutationBody;

export default interface Request extends express.Request {
  log: Bunyan;
  cookies: { [key: string]: string };
  user?: EntUser;
  adminUser?: EntUser;
  session: any;
  web3: Web3;
}
export interface Mutation extends Request {
  body: MutationRequestBody;
}
