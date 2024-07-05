import Link from "next/link";
import Pagination from "./components/pagination/pagination";
import Post from "./components/post/post";
import styles from "./page.module.scss";
import getData from "./servises/getData";
import AuthButton from "./components/authButton/authButton";

interface IData {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const API_URL = `https://jsonplaceholder.typicode.com/posts`;
  const posts = await getData(API_URL);

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "5";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = posts.slice(start, end);

  return (
    <main className={styles.main}>
      <AuthButton />
      {entries.map((data: IData) => (
        <section key={data.id} className={styles.hover}>
          <Link href={`/${data.id}`}>
            <Post data={data} />
          </Link>
        </section>
      ))}
      <Pagination nextPage={start < posts.length} prevPage={start > 0} />
    </main>
  );
}
