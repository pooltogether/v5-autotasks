import chalk from 'chalk';
import inquirer, { DistinctQuestion } from 'inquirer';

import { populateConfig } from '@pooltogether/v5-autotasks-library';
import Configstore from 'configstore';

interface PACKAGE_CONFIG {
  RESERVE_RECIPIENT: string;
}

const PACKAGE_QUESTIONS: { [key in keyof PACKAGE_CONFIG]: DistinctQuestion & { name: key } } = {
  RESERVE_RECIPIENT: {
    name: 'RESERVE_RECIPIENT',
    type: 'input',
    message: chalk.green('Enter the reserve recipient address:'),
    validate: function (value) {
      if (value.length) {
        return true;
      } else {
        return "Please enter the reserve recipient's address (where the rewards should be sent):";
      }
    },
  },
};

export const askQuestions = (config: Configstore, { askFlashbots }) => {
  return populateConfig<{}, PACKAGE_CONFIG>(config, {
    askFlashbots,
    extraConfig: {
      network: [PACKAGE_QUESTIONS.RESERVE_RECIPIENT],
    },
  });
};
