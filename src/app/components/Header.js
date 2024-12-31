import Image from "next/image";
import styles from "./Header.module.css";

import { Inknut_Antiqua, Hedvig_Letters_Serif } from "next/font/google";

export const InknutAntiqua = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["400"],
	display: "swap",
});

export const HedvigLettersSerif = Hedvig_Letters_Serif({
	subsets: ["latin"],
	weight: ["400"],
	display: "swap",
});

export default function Header(props) {
	return (
		<header className={styles.header}>
			<div className={styles["header-title"]}>
				<Image
					src="/img/UniversityofPennsylvania_Insignia_RGB.png"
					alt="Penn Insignia"
					width={31}
					height={36}
					priority
				/>
				<h1 className={InknutAntiqua.className}>Penn Perks</h1>
			</div>
			<div className="header-subtitle">
				<h2 className={HedvigLettersSerif.className}>
					Freebees, Discounts, and Perks for Penn Online Students
				</h2>
			</div>
		</header>
	);
}
