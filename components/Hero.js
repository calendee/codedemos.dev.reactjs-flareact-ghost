import Link from "flareact/link";

export function Hero() {
	return (
		<header className="relative bg-gray-50 overflow-hidden">
			<div
				className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
				aria-hidden="true"
			>
				<div className="relative h-full max-w-7xl mx-auto">
					<svg
						className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
						width="404"
						height="784"
						fill="none"
						viewBox="0 0 404 784"
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
							height="784"
							fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
						/>
					</svg>
					<svg
						className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
						width="404"
						height="784"
						fill="none"
						viewBox="0 0 404 784"
					>
						<defs>
							<pattern
								id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
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
							height="784"
							fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
						/>
					</svg>
				</div>
			</div>

			<div className="relative pt-6 pb-4 sm:pb-4">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<nav className="relative flex items-center justify-start sm:h-10 md:justify-start">
						{/* <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"> */}
						<div className="flex items-center flex">
							<div className="flex items-center justify-between w-full md:w-auto">
								<a href="#">
									<img
										className="h-8 w-auto sm:h-10"
										src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
										alt=""
									/>
								</a>
							</div>
						</div>
						<div className="hidden md:flex ml-10">
							<Link
								href="/"
								className="font-medium text-gray-500 hover:text-gray-900"
							>
								<a className="text-xl font-medium text-gray-500 hover:text-gray-900">
									Home
								</a>
							</Link>
						</div>
					</nav>
				</div>

				<div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
					<div className="flex rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden items-center p-4">
						<div className="px-5 flex items-center justify-between">
							<div>
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
									alt=""
								/>
							</div>
						</div>
						<Link href="/">
							<a className="text-xl font-medium text-gray-500 hover:text-gray-900">
								Home
							</a>
						</Link>
					</div>
				</div>

				<main className="mt-12 mx-auto max-w-7xl px-4 sm:mt-8">
					<div className="text-center">
						<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
							<span className="block xl:inline">Justin Noel</span>
							<span className="block text-indigo-600 text-2xl font-normal">
								Code and ramblings of a mobile app developer
							</span>
						</h1>
					</div>
				</main>
			</div>
		</header>
	);
}
