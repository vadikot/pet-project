module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        indent: [
            'error',
            4,
            { SwitchCase: 1, ignoredNodes: ['PropertyDefinition'] },
        ],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [0],
        'import/extensions': [0],
        'import/no-unresolved': [
            2,
            { caseSensitive: false },
        ],
        'react/jsx-props-no-spreading': [0],
        'no-shadow': [0],
        '@typescript-eslint/no-shadow': [1],
        'no-unused-vars': [0],
        'react/function-component-definition': [
            2,
            { namedComponents: 'arrow-function' },
        ],
        'import/no-import-module-exports': [0],
        'import/no-extraneous-dependencies': [
            'error', {
                devDependencies: true,
            },
        ],
        'import/prefer-default-export': [0],
        'react/require-default-props': [0],
        'i18next/no-literal-string': 2,
        'max-len': [
            1,
            {
                code: 100,
                ignoreComments: true,
            },
        ],
    },
    globals: {
        _: 'readonly',
        React: true,
    // __IS_DEV__: true,
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './',
            },
        },
    },
};
