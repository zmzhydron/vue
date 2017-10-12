// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    "new-cap": [
      2,
      {
        "capIsNewExceptions": [
          "List",
          "Map",
          "Set"
        ]
      }
    ],
    "react/no-multi-comp": 0,
    "import/default": 0,
    "import/no-duplicates": 0,
    "import/named": 0,
    "import/namespace": 0,
    "import/no-unresolved": 0,
    "comma-dangle": 0,
    // not sure why airbnb turned this on. gross!
    "indent": 0,
    "no-console": 0,
    "no-alert": 0,
    "id-length": 0,
    "no-debugger": 0,
    "eol-last": 0,
    "semi": [2, "always"],
    "space-before-function-paren": [0, "always"],
    "new-parens": 0,
    "no-return-assign": 0,
    "no-undef": 0// 不能有未定义的变量
  }
}
