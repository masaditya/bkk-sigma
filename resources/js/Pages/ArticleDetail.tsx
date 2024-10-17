import { Article, Category } from "@/types";
import Header from "@/Components/Header";
import { Footer } from "@/Components/Footer";
import { Link } from "@inertiajs/react";
import { LeftOutlined } from "@ant-design/icons";

export default function ArticleDetail(props: any) {
    return (
        <div>
            <Header user={props.auth.user} />
            <main>
                <section className="gj ki xn hj rp hr">
                    <div className="container mx-auto">
                        <Link
                            href="/article"
                            className="text-blue-500 hover:text-blue-700 hover:underline flex gap-2 text-xs md:text-sm items-center"
                        >
                            <LeftOutlined />
                            Kembali ke daftar berita
                        </Link>

                        <div className="bb ze 2xl:ud-px-0 mt-6">
                            <div className="tc sf yo zf kq">
                                <div className="ro">
                                    <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection w-full p-7.5 md:p-10">
                                        <img
                                            className="w-full h-[450px] object-cover rounded-md"
                                            src={props.article.thumbnail}
                                            alt="Blog"
                                        />
                                        <h2 className="ek vj 2xl:ud-text-title-lg kk wm nb gb">
                                            {props.article.title}
                                        </h2>
                                        <ul className="tc uf cg 2xl:ud-gap-15 fb">
                                            <li>
                                                <span className="rc kk wm">
                                                    Author:{" "}
                                                </span>{" "}
                                                Admin
                                            </li>
                                            <li>
                                                <span className="rc kk wm">
                                                    Published On:{" "}
                                                </span>{" "}
                                                {new Intl.DateTimeFormat(
                                                    "en-GB",
                                                    {
                                                        day: "2-digit",
                                                        month: "long",
                                                        year: "numeric",
                                                    }
                                                ).format(
                                                    new Date(
                                                        props.article.created_at
                                                    )
                                                )}
                                            </li>
                                            <li>
                                                <span className="rc kk wm">
                                                    Category:{" "}
                                                </span>{" "}
                                                {props.article.category.name}
                                            </li>
                                        </ul>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: props.article.content,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="jn/2 so">
                                    <div className="animate_top fb">
                                        <h4 className="tj kk wm qb">
                                            Categories
                                        </h4>
                                        <ul>
                                            {props.categories.map(
                                                (category: Category) => (
                                                    <li
                                                        key={category.id}
                                                        className="ql vb du-ease-in-out il xl"
                                                    >
                                                        <Link
                                                            href="/article"
                                                            data={{
                                                                category:
                                                                    category.id,
                                                            }}
                                                        >
                                                            {category.name}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    {props.relatedArticles.length > 0 && (
                                        <div className="animate_top">
                                            <h4 className="tj kk wm qb">
                                                Related Posts
                                            </h4>
                                            <div>
                                                {props.relatedArticles.map(
                                                    (article: Article) => (
                                                        <div
                                                            key={article.id}
                                                            className="tc fg 2xl:ud-gap-6 qb"
                                                        >
                                                            <img
                                                                className="w-[90px] h-[70px] object-cover rounded"
                                                                src={
                                                                    article.thumbnail
                                                                }
                                                                alt="Blog"
                                                            />
                                                            <Link
                                                                href={`/article/${article.id}`}
                                                                className="truncate_2_lines"
                                                            >
                                                                {article.title
                                                                    .length > 40
                                                                    ? `${article.title.slice(
                                                                          0,
                                                                          40
                                                                      )}...`
                                                                    : article.title}
                                                            </Link>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="i pg gh ji">
                    {/* Bg Shape */}
                    <img
                        className="h p q"
                        src="/images/shape-16.svg"
                        alt="Bg Shape"
                    />
                    <div className="bb ye i z-10 ki xn dr">
                        <div className="tc uf sn tn un gg">
                            <div className="animate_left to/2">
                                <h2 className="fk vj zp pr lk ac">
                                    Bergabung Menjadi Mitra Industri
                                </h2>
                                <p className="lk">
                                    Sebagai mitra Bursa Kerja Khusus (BKK) SMKN
                                    1 Bojonegoro, Anda akan mendapatkan akses
                                    langsung ke talenta muda yang siap memasuki
                                    dunia kerja. Kami bekerja sama dengan
                                    berbagai perusahaan dari berbagai industri
                                    untuk menyediakan kesempatan kerja terbaik
                                    bagi lulusan kami.
                                </p>
                            </div>
                            <div className="animate_right bf">
                                <a
                                    href="https://partner-bkk-sigma.dexotic.io/"
                                    className="vc ek kk hh rg ol il cm gi hi"
                                >
                                    Gabung Mitra Industri
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
