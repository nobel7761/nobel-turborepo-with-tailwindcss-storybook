import Head from "next/head";
import { Button } from "ui";

export default function Docs() {
  return (
    <div>
      <Head>
        <title>Docs</title>
      </Head>
      <h1 className="text-red-500 text-3xl">Docs</h1>
      <Button />
    </div>
  );
}
