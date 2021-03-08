export async function getJson(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Unexpected HTTP Response");
  }
  return await response.json();
}
