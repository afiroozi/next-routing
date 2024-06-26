import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsPage() {
    return (
        <main>
            <ul className="news-list">
                {DUMMY_NEWS.map(newsItem => (
                    <li key={newsItem.id}>
                        <Link href={`/news/${newsItem.slug}`}>
                            <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={'100'} height={'100'} />
                            <span>
                                {newsItem.title}
                            </span>
                        </Link >
                    </li>
                ))}

                <li><Link href='/news/Second-news'>  Second news 2 </Link ></li>
                <li><Link href='/news/Third-news '>  Third news 3 </Link ></li>
            </ul>
        </main>
    )
}
