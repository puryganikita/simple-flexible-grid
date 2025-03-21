/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        ignore: [
          'first-nested',
          'inside-block',
          'blockless-after-blockless',
          'after-comment',
        ],
      },
    ],
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-dollar-variable'],
      },
    ]
  },
};
