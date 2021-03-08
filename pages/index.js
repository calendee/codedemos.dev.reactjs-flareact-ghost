import Head from "flareact/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Flareact Demo</title>
        <meta
          name="description"
          content="Demo project for ReactJS Meetup. Shows using Flareact to create a blog powered by the Ghost API."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1 className="text-5xl">You're running React on the Edge!</h1>
    </>
  );
}
