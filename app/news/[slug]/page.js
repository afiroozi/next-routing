import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function NewsDetails({ params }) {
    const newsSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <article className='news-artcle'>
            <header>
                <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={100} height={100} />
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    )
}
