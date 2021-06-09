module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "./src/assets/styles/main.scss";`,
        },
      },
    },
    chainWebpack: config => {
      config.module
          .rule('graphql')
          .test(/\.(graphql|gql)$/)
          .use('graphql-tag/loader')
          .loader('graphql-tag/loader')
          .end()
  }
  };