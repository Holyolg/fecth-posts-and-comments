import Link from "next/link";
import styles from "./post.module.scss";
import { usePathname } from "next/navigation";

const Post = ({data} : {data: {userId: string, id: string, title: string, body:string}}) => {

	return (
		<div className={styles.post}>
		<div className={styles.user}><p>{data.userId}</p></div>

          <div key={data.id} className={styles.item}>
            <h3 className={styles.title}>{data.title}</h3>
            <p className={styles.body}>{data.body}</p>
          </div>
		</div>
	);
}
export default Post