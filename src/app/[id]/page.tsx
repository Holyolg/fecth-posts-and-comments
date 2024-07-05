import Post from "../components/post/post";
import Comment from "../components/comment/comment";
import getData from "../servises/getData";
import styles from "./page.module.scss";
import Link from "next/link";
import AuthButton from "../components/authButton/authButton";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pageId = params.id;

  const postData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${pageId}`
  ).then((res) => res.json());

  return {
    title: postData.title,
    description: postData.body,
  };
}

export default async function Details({ params }: Props) {
  const pageId = params.id;

  const postData = await getData(
    `https://jsonplaceholder.typicode.com/posts/${pageId}`
  );
  const comments = await getData(
    `https://jsonplaceholder.typicode.com/comments/`
  );
  console.log(comments);

  return (
    <main className={styles.main}>
      <div className={styles.wrapper_buttons}>
        <AuthButton />
        <Link className={styles.button} href={"/"}>
          Назад
        </Link>
      </div>
      <Post data={postData} />
      {comments.map((comment: any) => (
        <Comment key={comment.id} data={comment} />
      ))}
    </main>
  );
}
