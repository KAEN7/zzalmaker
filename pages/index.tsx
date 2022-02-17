// 메인화면

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

// image
import malddaggu from "../public/image/malddaggu.png";

// css
import styles from "../styles/Home.module.scss";
import "../styles/sungmo.scss";

const Home: NextPage = () => {
	const [first, setFirst] = useState("모코코가..");
	const [last, setLast] = useState("말대꾸?");

	const zzalRef = useRef<any>();

	// 컴포넌트 다운로드 핸들러
	const onDownloadHandler = () => {
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
			<section ref={zzalRef} className="zzal">
				<Image src={malddaggu} alt="말대꾸" className="zzalImg" />
				<span className="firstSpan">{first}</span>
				<span className="secondSpan">{last}</span>
			</section>

			{/*  생성 버튼 */}
			<button className="downBtn" onClick={onDownloadHandler}>
				다운로드 받기
			</button>
		</div>
	);
};

export default Home;
