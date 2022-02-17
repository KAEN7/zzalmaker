import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import styles from "../styles/Home.module.css";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import malddaggu from "../public/image/malddaggu.png";

const Home: NextPage = () => {
	const zzalRef = useRef();

	// 컴포넌트 다운로드 함수
	const onDownloadBtn = () => {
		const zRef = zzalRef.current;

		domtoimage.toBlob(zRef).then((blob) => {
			saveAs(blob, "zzal.png");
		});
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>짤 생성기</title>
				<meta name="description" content="짤 생성기" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/*  이미지 영역 */}
			<section ref={zzalRef}>
				<Image src={malddaggu} alt="말대꾸" />
				<span>모코코가..</span>
				<span>말대꾸?</span>
			</section>

			{/*  생성 버튼 */}
			<button onClick={() => onDownloadBtn()}></button>
		</div>
	);
};

export default Home;
