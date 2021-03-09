import { getJson } from "../../../utils/utils";

export default async (event) => {
	const url = new URL(event.request.url);
	const postId = url.pathname.replace("/api/posts/", "");
	const apiUrl = `${GHOST_API_URL}/ghost/api/v3/content/posts/${postId}/?key=${GHOST_API_KEY}`;
	const response = await getJson(apiUrl);
	return new Response(JSON.stringify(response));
};
