import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Roboto } from "next/font/google";
import DataWrapper from "./components/DataWrapper";

export const RobotoFont = Roboto({
	subsets: ["latin"],
	weight: ["400", "500"],
	display: "swap",
});

export default function Home() {
	return (
		<div className={styles.page}>
			<Header />
			<Nav className={RobotoFont.className} />
			<main className={styles.main}>
				<DataWrapper />
			</main>
		</div>
	);
}
