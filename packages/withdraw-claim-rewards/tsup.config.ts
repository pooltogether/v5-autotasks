import { defineConfig } from 'tsup';

import Configstore from 'configstore';
import pkg from './package.json';

const config = new Configstore(pkg.name);

export default defineConfig((opt) => {
  return {
    esbuildOptions: (options, context) => {
      const CHAIN_ID = config.get('CHAIN_ID');
      if (!CHAIN_ID || !(`${CHAIN_ID}` in config.all))
        throw new Error(
          'Missing chain configuration! Try running `yarn start` first to set the config.',
        );
      options.define = {
        ...(options.define ?? {}),
        BUILD_CHAIN_ID: `'${CHAIN_ID}'`,
        BUILD_JSON_RPC_URI: `'${config.get(`${CHAIN_ID}.JSON_RPC_URI`)}'`,
        BUILD_USE_FLASHBOTS: `'${config.get(`${CHAIN_ID}.USE_FLASHBOTS`)}'`,
        BUILD_REWARDS_RECIPIENT: `'${config.get(`${CHAIN_ID}.REWARDS_RECIPIENT`)}'`,
      };
    },
    noExternal: [
      'inquirer',
      '@pooltogether/v5-autotasks-library',
      '@pooltogether/v5-utils-js',
      'ethereum-multicall',
      'configstore',
    ],
    format: 'cjs',
    entry: ['src/handler.ts'],
    splitting: false,
    clean: true,
    minify: true,
  };
});
