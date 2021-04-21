module.exports = {
  build: {
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_local',
      },
    },
    tailwind: {
      css: 'src/assets/css/main.css',
    },
  },
}
