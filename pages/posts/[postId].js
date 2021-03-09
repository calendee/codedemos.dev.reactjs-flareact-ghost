import Head from "flareact/head";

import { getJson } from "../../utils/utils";
import { Hero } from "../../components/Hero";

// NOTES : getStaticProps is from Nextjs but is aliased to `getEdgeProps` in Flareact
export async function getStaticProps({ params }) {
	const { postId } = params;
	const apiUrl = `${GHOST_API_URL}/ghost/api/v3/content/posts/${postId}/?key=${GHOST_API_KEY}`;
	const response = await getJson(apiUrl);

	return {
		props: {
			post: response?.posts[0] || {},
		},
		// Revalidate every 8 hours
		revalidate: 60 * 60 * 8,
	};
}

export default function Post({ post }) {
	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta name="description" content={`${post.meta_description}`} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<Hero />
			<main className="bg-white pt-4 pb-20 px-4 sm:px-6 lg:pt-4 lg:pb-28 lg:px-8">
				<div className="relative py-16 bg-white overflow-hidden">
					<div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
						<div
							className="relative h-full text-lg max-w-prose mx-auto"
							aria-hidden="true"
						>
							<svg
								className="absolute top-12 left-full transform translate-x-32"
								width="404"
								height="384"
								fill="none"
								viewBox="0 0 404 384"
							>
								<defs>
									<pattern
										id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
										x="0"
										y="0"
										width="20"
										height="20"
										patternUnits="userSpaceOnUse"
									>
										<rect
											x="0"
											y="0"
											width="4"
											height="4"
											className="text-gray-200"
											fill="currentColor"
										/>
									</pattern>
								</defs>
								<rect
									width="404"
									height="384"
									fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
								/>
							</svg>
							<svg
								className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
								width="404"
								height="384"
								fill="none"
								viewBox="0 0 404 384"
							>
								<defs>
									<pattern
										id="f210dbf6-a58d-4871-961e-36d5016a0f49"
										x="0"
										y="0"
										width="20"
										height="20"
										patternUnits="userSpaceOnUse"
									>
										<rect
											x="0"
											y="0"
											width="4"
											height="4"
											className="text-gray-200"
											fill="currentColor"
										/>
									</pattern>
								</defs>
								<rect
									width="404"
									height="384"
									fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
								/>
							</svg>
							<svg
								className="absolute bottom-12 left-full transform translate-x-32"
								width="404"
								height="384"
								fill="none"
								viewBox="0 0 404 384"
							>
								<defs>
									<pattern
										id="d3eb07ae-5182-43e6-857d-35c643af9034"
										x="0"
										y="0"
										width="20"
										height="20"
										patternUnits="userSpaceOnUse"
									>
										<rect
											x="0"
											y="0"
											width="4"
											height="4"
											className="text-gray-200"
											fill="currentColor"
										/>
									</pattern>
								</defs>
								<rect
									width="404"
									height="384"
									fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
								/>
							</svg>
						</div>
					</div>
					<div className="relative px-4 sm:px-6 lg:px-8">
						<div className="text-lg max-w-prose mx-auto">
							<h1>
								<span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
									{post.title}
								</span>
							</h1>
							<p
								className="mt-8 text-xl text-gray-500 leading-8"
								dangerouslySetInnerHTML={{ __html: post.html }}
							></p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
