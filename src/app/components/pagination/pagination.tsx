'use client'
import styles from "./pagination.module.scss";
import { useSearchParams,useRouter } from "next/navigation";



const Pagination = ({nextPage, prevPage} :  {nextPage: boolean, prevPage:boolean}) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? '1'

	return (
		<section className={styles.wrapper}>
      <button className={styles.button} disabled={!prevPage} onClick={() => router.push(`/?page=${Number(page) - 1}`)}>Предыдущая страница</button>
      <button className={styles.button} disabled={!nextPage} onClick={() => router.push(`/?page=${Number(page) + 1}`)}>Следующая страница</button>
		</section>
	);
}
export default Pagination