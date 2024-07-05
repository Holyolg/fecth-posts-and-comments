import styles from "./post.module.scss";

const Post = ({
	data,
}: {
	data: { userId: string; id: string; title: string; body: string };
}) => {
	return (
		<div className={styles.post}>
			<div className={styles.user}>
				<p>{data.userId}</p>
			</div>

			<div key={data.id} className={styles.item}>
				<h2 className={styles.title}>{data.title}</h2>
				<p className={styles.body}>{data.body}</p>
			</div>
		</div>
	);
};
export default Post;
