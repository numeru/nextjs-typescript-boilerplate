module.exports = {
	reactStrictMode: process.env.NODE_ENV === 'development',
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
};
