import { PostSummary } from "./PostSummary";

export function PostsList({ posts }) {
	return (
		<div className="mt-4 grid gap-16 pt-8 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-16">
			{posts.map((post) => (
				<PostSummary post={post} key={post.id} />
			))}
		</div>
	);
}
