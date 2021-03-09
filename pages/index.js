import Head from "flareact/head";

import { Hero } from "../components/Hero";
import { getJson } from "../utils/utils";
import { PostsList } from "../components/PostsList";

// NOTES : The Next.js `getStaticProps` is mapped to `getEdgeProps`
// for easier conversion
// See : https://flareact.com/docs/data-fetching
export async function getEdgeProps() {
	// NOTES : Secrets are available as global variables
	const posts = await getJson(
		`${GHOST_API_URL}/ghost/api/v3/content/posts/?key=${GHOST_API_KEY}&include=authors,tags`,
	);

	return {
		props: {
			posts: posts?.posts || [],
		},

		// NOTE: All edge props & pages are cached by default for the life of the
		// current deployment Use `revalidate` to force them to be reloaded
		// at some interval
		// For 100% dynamic routes, can avoid all caching with { revalidate: 0 }
		// See Also : https://flareact.com/docs/data-fetching#additional-notes
		revalidate: 60 * 60 * 8,
	};
}

export default function Index({ posts = [] }) {
	return (
		<>
			<Head>
				<title>Flareact Ghost Demo</title>
				<meta
					name="description"
					content="Demo project for ReactJS Meetup. Shows using Flareact to create a blog powered by the Ghost API."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<Hero />

			<main className="bg-white pt-2 pb-20 px-4 sm:px-6 lg:pt-4 lg:pb-28 lg:px-8">
				<section className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
					<PostsList posts={posts} />
				</section>
			</main>
		</>
	);
}
