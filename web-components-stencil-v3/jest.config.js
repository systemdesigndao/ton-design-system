module.exports = {
    preset: '@stencil/core/testing',
    testPathIgnorePatterns: ['/node_modules/', '/test/'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};