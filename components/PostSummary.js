import Link from "flareact/link";

import { DateDisplay } from "./DateDisplay";

export function PostSummary({ post }) {
	const tag = (post?.tags[0]?.name ?? "").toUpperCase();
	return (
		<article className="flex justify-between flex-col">
			<a href="#" className="inline-block">
				<span
					className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${
						tag ? "bg-indigo-100" : ""
					} text-indigo-800`}
				>
					{tag}
				</span>
			</a>
			<Link
				// href="/about"
				href="/posts/[postId]"
				as={`/posts/${post.id}`}
				className="block mt-4"
			>
				<a>
					<p className="text-xl font-semibold text-gray-900">{post.title}</p>
					<p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
				</a>
			</Link>
			<div className="mt-6 flex items-center">
				<div className="flex-shrink-0">
					<a href="#">
						<span className="sr-only">Paul York</span>
						<img
							className="h-10 w-10 rounded-full"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=pqVIDUxojI&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
					</a>
				</div>
				<div className="ml-3">
					<p className="text-sm font-medium text-gray-900">
						<a href="#">{post.primary_author?.name}</a>
					</p>
					<div className="flex space-x-1 text-sm text-gray-500">
						<DateDisplay time={post.published_at} />
						<span aria-hidden="true">&middot;</span>
						<span>{Math.floor(post.html.length / 500)} min read</span>
					</div>
				</div>
			</div>
		</article>
	);
}
