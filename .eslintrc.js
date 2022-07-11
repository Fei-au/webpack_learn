module.exports = {
    extends: ["eslint:recommended"],
    env: {
        node: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        "no-var": 1,
    }
    // rules: {
    //     semi: "error",
    //     'array-callback-return': 'warn',
    //     'default-case': [
    //         'warn',
    //         {commentPattern: '^no deafult$'},
    //     ],
    //     eqeqeq: [
    //         'warn',
    //         'smart'
    //     ],
    // },
}