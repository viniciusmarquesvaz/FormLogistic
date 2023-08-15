import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { questrialFont } from "@/utils";
import { MainContent, ProgressBar } from "@/components";
import classNames from "classnames";
import logo from "../assets/logo.png";
import { SharedStatesProvider, useQuestions } from "@/contexts";

export default function Home() {
  const { percent } = useQuestions();

  return (
    <>
      <Head>
        <title>Typeform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Typeform built for a take home assignment."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <ProgressBar width={percent} />
        <Image src={logo} alt="GrowthX logo" width={60} height={60} />
      </header>
      <main className={classNames(styles.main, questrialFont.className)}>
        <SharedStatesProvider>
          <MainContent />
        </SharedStatesProvider>
      </main>
    </>
  );
}
