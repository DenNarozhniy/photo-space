module.exports = {
  name: 'photo-client',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/photo-client',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
