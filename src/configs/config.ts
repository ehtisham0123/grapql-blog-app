import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 5000,
  },
  cors: {
    enabled: true,
  },
  security: {
    // expiresIn: '2m',
    expiresIn: '7d',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  }, 
   graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
};

export default (): Config => config;
