import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { saveAs } from "file-saver";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>짤 생성기</title>
				<meta name="description" content="짤 생성기" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<button onClick={() => console.log("짤 생성")}></button>
		</div>
	);
};

export default Home;
