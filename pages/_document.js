import Document, { Html, Head, Main, FlareactScript } from "flareact/document";

class MyDocument extends Document {
	static async getEdgeProps(ctx) {
		const props = await Document.getEdgeProps(ctx);
		return { ...props };
	}

	render() {
		return (
			<Html hidden lang="en">
				<Head />
				<body>
					<Main />
					<FlareactScript />
					<script
						type="module"
						src="https://cdn.skypack.dev/twind/shim"
					></script>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
