import styles from "./Nav.module.css";

export default function Nav(props) {
	return (
		<nav className={styles.nav}>
			<div className={styles["link-container"]}>
				<a
					className={styles.link}
					href="mailto:bamorris@seas.upenn.edu"
				>
					Request an update
				</a>
			</div>
		</nav>
	);
}
