module.exports = {
  name: 'pipes',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/pipes',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
