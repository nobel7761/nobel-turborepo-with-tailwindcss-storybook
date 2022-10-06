import Head from "next/head";
import { Alert, Button } from "ui";

export default function Web() {
  return (
    <div>
      <Head>
        <title>Web</title>
      </Head>
      <h1 className="text-yellow-400">Web</h1>
      <Button />
      <Alert text="hi" />
    </div>
  );
}
