module.exports = {
  name: 'dynamic-mat-table',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/dynamic-mat-table',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
