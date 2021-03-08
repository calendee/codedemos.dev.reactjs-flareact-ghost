import Head from "flareact/head";

import { getJson } from "../utils/utils";

// NOTES : The Next.js `getStaticProps` is mapped to `getEdgeProps`
// for easier conversion
// See : https://flareact.com/docs/data-fetching
export async function getEdgeProps() {
  // NOTES : Secrets are available as global variables
  const posts = await getJson(
    `${GHOST_API_URL}/ghost/api/v3/content/posts/?key=${GHOST_API_KEY}`,
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

export default function Index({ ghostApiKey, ghostApiUrl, posts = [] }) {
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
      <h1 className="text-5xl">You're running React on the Edge!</h1>
      <pre className="code">Number of Posts: {posts.length}</pre>
      <pre className="code">{JSON.stringify(posts, null, 4)}</pre>
    </>
  );
}
