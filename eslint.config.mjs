import { FlatCompat } from '@eslint/eslintrc'
import mochaPlugin from 'eslint-plugin-mocha'
import babelParser from "@babel/eslint-parser";
const compat = new FlatCompat()
export default [
  mochaPlugin.configs.flat.recommended, {
    rules: {
      'mocha/no-exclusive-tests': 'error',
      'mocha/no-skipped-tests': 'off',
      'mocha/no-mocha-arrows': 'off',
      'mocha/no-setup-in-describe': 'off',
      'mocha/no-sibling-hooks': 'off'
    }
  },
  ...compat.config(
  {
    extends: ['plugin:cypress/recommended'],
    rules: {
      'cypress/no-unnecessary-waiting': 'off',
      'cypress/unsafe-to-chain-command': 'off',
      "comma-spacing":
      [
        "error",
        {
          "after": true
        }
      ],
      "camelcase":
      [
        "error",
        {
          "properties": "always"
        }
      ],
      "semi": [
        "error",
        "always"
      ],
      "indent": [
        "error",
        "tab"
      ],
      "space-before-function-paren": [
        "error",
        "never"
      ],
      "strict": [
        "error",
        "global"
      ],
      "no-lonely-if": [
        "error"
      ],
      "curly": [
        "error"
      ],
      "no-var": [
        "error"
      ],
      "no-const-assign": [
        "error"
      ],
      "no-duplicate-imports": [
        "error"
      ],
      "no-trailing-spaces": [
        "error",
        {
          "ignoreComments": true
        }
      ],
      "prefer-const": [
        "warn",
        {
          "destructuring": "all"
        }
      ],
      "spaced-comment": [
        "error",
        "always",
        {
          "exceptions": [
            "/"
          ]
        }
      ],
      "no-multiple-empty-lines": [
        "error",
        {
          "max": 1,
          "maxEOF": 0,
          "maxBOF": 0
        }
      ],
      "quotes": [
        "error",
        "single"
      ],
      "consistent-return": "warn",
      "lines-between-class-members": [
        "error",
        "always",
        {
          "exceptAfterSingleLine": true
        }
      ],
      "comma-dangle": ["error", {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "never"
      }
    ],
      "max-len": [
        "error",
        {
          "code": 160,
          "ignoreStrings": true,
          "ignoreTemplateLiterals": true,
          "ignoreUrls": true,
          "ignoreRegExpLiterals": true
        }
      ]
    },

  }),
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
        },
      },
    },
  },
];