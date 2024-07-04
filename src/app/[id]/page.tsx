import Post from "../components/post/post";
import Comment from "../components/comment/comment";
import getData from "../servises/getData";
import styles from "./page.module.scss";
import Link from "next/link";

export default async function Details({params}: {
 params: {id: string};
}) {
const pageId = params.id

const postData = await getData(`https://jsonplaceholder.typicode.com/posts/${pageId}`)
const comments = await getData(`https://jsonplaceholder.typicode.com/comments/`)
console.log(comments)

	return (
		<main className={styles.main}>
			<Link className={styles.button} href={'/'}>Назад</Link>
		<Post data={postData}/>
		{comments.map((comment: any) =>(
		<Comment key={comment.id} data={comment}/>
		))}
		</main>
	);
}




// export async function generateStaticParams() {
// 	const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/`).then((res) => res.json())
// 	if (!posts) {
// 		throw new Error("not found");
// 	}
// 	return posts.map((post:any) =>  ({
// 	  id: post.id.toString()
// 	}))
//   }
