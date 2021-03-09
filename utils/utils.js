export async function getJson(url, options) {
	const response = await fetch(url, options);

	if (!response.ok) {
		console.log(`getJSON response.status = ${response.status}`);
		console.log(`getJSON response.statusText = ${response.statusText}`);
		throw new Error("Unexpected HTTP Response");
	}

	return await response.json();
}
