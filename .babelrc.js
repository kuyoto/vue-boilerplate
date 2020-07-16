module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: 'entry'
      }
    ]
  ],
  plugins: [
    [
      'transform-imports', 
      {
        transform: 'vuetify/es5/components/${member}',
        preventFullImport: true,
      }
    ]
  ]
};
