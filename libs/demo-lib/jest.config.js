module.exports = {
  name: 'demo-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/demo-lib',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
