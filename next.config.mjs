/** @type {import('next').NextConfig} */
// const API_URL = process.env.API_URL;

// const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: 'export',
	// async rewrites() {
	// 	if(isProduction) return [];
	// 	return [
	// 		{
	// 			source: '/api/:path*',
	// 			destination: `${API_URL}/:path*`,
	// 		},
	// 	]
	// },
}

export default nextConfig