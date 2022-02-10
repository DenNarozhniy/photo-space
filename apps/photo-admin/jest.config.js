module.exports = {
  name: 'photo-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/photo-admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
