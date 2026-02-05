/** @type {import('stylelint').Config} */

export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    "stylistic/number-leading-zero": "always",
    'media-feature-range-notation': 'prefix',
    "selector-class-pattern": null
  },
};
