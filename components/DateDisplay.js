export function DateDisplay({ time }) {
	const datetime = new Date(time);
	const options = {
		year: "numeric",
		month: "short",
		day: "numeric",
	};
	const formatted = datetime.toLocaleDateString("en-US", options);
	return <time dateTime={time}>{formatted}</time>;
}
