// export
// nodejs환경에서 무조건 사용할수있는 모듈
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
    // parcel index.html (pacel은 이줄과 같이 cli 구성으로 한다) (main.js)
    // 파일을 읽어들이기 시작하는 진입점 설정 (js 로 진입점을 설정한다)
    entry: './js/main.js',
    
    // 결과물(번들)을 반환하는 설정
    output: {
        // __dirname 은 nodejs에서 전역적으로 사용할수 있는 변수 뜻은 현재 파일이 있는 그 경로를 말한다 즉 
        // webpackconfig파일이 있는 경로를 말한다는 뜻
        // 기본은 dist라서 이렇게 설정안해도 괜찮다.
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        clean: true // 이전에 빌드시켰던 것들은 삭제한다 그리고 새로만들어낸다 (default는 false)
    },

    module:{
        rules: [
            {
                test: /\.s?css$/, // .css라는 확장자를 찾는다 test라는 속성이름으로 매칭해준다
                // 패키지 두개를 사용한다고 명시해준다
                // 순서가 중요하다
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }

        ]

    },

    // 여기에 명시되어있는 것을 활용(빌드할때)
    // 번들링 후 결과물의 처리방식등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html' // root경로에서 index.html 지칭함
        }),

        new CopyPlugin({
            patterns: [
                {
                    from: 'static'
                }
            ]
        })

    ],
    devServer: {
        host: 'localhost'
    }
    
}