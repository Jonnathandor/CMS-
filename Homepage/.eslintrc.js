module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "unicorn/filename-case": "off",
        "no-unused-vars": [ "warn", {
          "caughtErrors": "all",
          "caughtErrorsIgnorePattern": "^unused($|[A-Z].*$)",
          "argsIgnorePattern": "^unused($|[A-Z].*$)",
          "varsIgnorePattern": "^unused($|[A-Z].*$)"
          }
        ],
        "no-use-before-define":         ["error", {"functions":false}],
        "one-var":                      ["warn", "never"],
        "prefer-arrow-callback":        ["warn", {"allowNamedFunctions":true}],
        "quotes":                       ["warn", "single", {"avoidEscape":false, "allowTemplateLiterals":true}],
        "semi":                         ["warn", "always"],
        "semi-spacing":                 ["warn", {"before":false, "after":true}],
        "semi-style":                   ["warn", "last"],
        "block-scoped-var":             ["error"],
        "callback-return":              ["error", ["done", "proceed", "next", "onwards", "callback", "cb"]],
        "camelcase":                    ["warn", { "properties":"always" }],
        "comma-style":                  ["warn", "last"],
        "curly":                        ["warn"],
        "eqeqeq":                       ["warn"],
        "eol-last":                     ["warn"],
        "handle-callback-err":          ["error"],
        "linebreak-style":              ["error", "unix"],
        "no-dupe-keys":                 ["error"],
        "no-duplicate-case":            ["error"],
        "no-extra-semi":                ["warn"],
        "no-labels":                    ["error"],
        "no-mixed-spaces-and-tabs":     [2, "smart-tabs"],
        "no-redeclare":                 ["warn"],
        "no-return-assign":             "off",
        "no-sequences":                 ["error"],
        "no-trailing-spaces":           ["warn"],
        "no-undef":                     ["error"],
        "no-unexpected-multiline":      ["warn"],
        "no-unreachable":               ["warn"],
        "indent": ["warn", 2],
        "@typescript-eslint/no-unused-vars": "off",
        "comma-dangle": "off",
        "new-parens": "off",
        "lines-between-class-members": "off",
        "object-curly-spacing": ["warn", "always"],
        "array-bracket-spacing": "off",
        "no-console": "off",
        "max-params": "off",
        "no-process-exit": "off",
        "unicorn/no-process-exit": "off",
        "@typescript-eslint/camelcase": "off"
    },
    "overrides": [
        {
          "files": ["*.ts"],
          "rules": {
            "camelcase": "off",
            "@typescript-eslint/camelcase": "error",
            "unicorn/no-abusive-eslint-disable": "off",
            "@typescript-eslint/no-unused-vars": [ "warn", {
              "caughtErrors": "all",
              "caughtErrorsIgnorePattern": "^unused($|[A-Z].*$)",
              "argsIgnorePattern": "^unused($|[A-Z].*$)",
              "varsIgnorePattern": "^unused($|[A-Z].*$)"
              }
            ],
            "no-unused-vars": "off"
          }
        }
      ]
};
