/**
 * Created by Liu.Jun on 2018/10/26.
 */

// https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/user-handbook.md#making-your-own-preset

/* eslint-disable */

module.exports = () => ({
    presets: [
        [require('@babel/preset-env'), {
            targets: {
                browsers: ['last 2 versions', 'ie >=9']
            },
            modules: false
        }]
    ],
    plugins: [
        require("@babel/plugin-syntax-dynamic-import"),
        [require("@babel/plugin-proposal-decorators"), { legacy: true }],
        [require("@babel/plugin-proposal-class-properties"), { loose: true }],  // 松散模式
        require("@babel/plugin-proposal-object-rest-spread")
    ]
});
