exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /lightgallery/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}