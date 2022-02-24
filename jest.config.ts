const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	moduleDirectories: ['node_modules', '<rootDir>/'],
	clearMocks: true,
	moduleNameMapper: {
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
		'^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.ts',
		'^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': '<rootDir>/__mocks__/fileMock.ts',

		'#hooks/(.*)': '<rootDir>/hooks/$1',
		'#components/(.*)': '<rootDir>/components/$1',
		'#pages/(.*)': '<rootDir>/pages/$1',
		'#utils/(.*)': '<rootDir>/utils/$1',
		'#stores/(.*)': '<rootDir>/stores/$1',
		'#constants/(.*)': '<rootDir>/constants/$1',
		'#apis/(.*)': '<rootDir>/apis/$1',
		'#types/(.*)': '<rootDir>/types/$1',
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
};

module.exports = createJestConfig(customJestConfig);

export {};
