module.exports = {
  name: 'inventory',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/inventory',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
