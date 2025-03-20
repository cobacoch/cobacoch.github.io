/**
 * @see https://www.npmjs.com/package/lint-staged#configuration
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*': [
    'cspell --show-context --no-must-find-files',
    'prettier --write --ignore-unknown --no-error-on-unmatched-pattern',
  ],
};
