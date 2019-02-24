type MutationVariables = { id: string } & {
  [key: string]: any;
};
type MutationBody = { variables: MutationVariables };
// MutationBody is { variables: { id: string, ...rest?: any } }
// typeof variables.id === string
// typeof variables.whatever === any
