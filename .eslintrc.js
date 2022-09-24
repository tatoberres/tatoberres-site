module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        indent: ['error', 4],
        quotes: [ 'error',
            'single',
            {
                'avoidEscape': true,
                'allowTemplateLiterals': true
            }],
        semi: ['error', 'always'],
        'no-empty': 'warn',
        'no-cond-assign': ['error', 'always'],
    },
    overrides: [
    ],
    'ignorePatterns': ['src/**/*.njk', 'src/**/*.md', 'src/assets/images/*']
};
