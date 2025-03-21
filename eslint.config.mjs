import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  prettierPluginRecommended,
  {
    'no-undef': 'off',
    ignores: ['node_modules', 'dist'],
  },
);
