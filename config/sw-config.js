module.exports = {
  cache: {
    cacheId: "elCello",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "elCello",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
