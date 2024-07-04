import Link from "next/link";
import styles from "./comment.module.scss";

const Comment = ({data} : {data: {postId: string, email:string, id: string, title: string, body:string}}) => {
    
	return (
		<div className={styles.post}>
      <div className={styles.user_wrapper}>
		<div className={styles.postId}><p>{data.postId}</p></div>
    <div>
      <a href={`mailto:${data.email}`}>{data.email}</a>
    </div>
    </div>
          <div key={data.id} className={styles.item}>
            <h3 className={styles.title}>{data.title}</h3>
            <p className={styles.body}>{data.body}</p>
          </div>
		</div>
	);
}
export default Comment