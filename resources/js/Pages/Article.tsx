import { Article as ArticleType } from "@/types";
import Header from "@/Components/Header";
import { Footer } from "@/Components/Footer";
import { Pagination } from "antd";
import { Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Article(props: any) {
    const { url } = usePage();
    const currentQueryParams = new URLSearchParams(url.split("?")[1]);

    const [name, setName] = useState(currentQueryParams.get("name"));
    const [category, setCategory] = useState(
        currentQueryParams.get("category")
    );

    const handleReset = () => {
        setName("");
        setCategory("");
        router.get(
            "/article",
            {},
            {
                replace: true,
                preserveState: true,
            }
        );
    };

    const handlePageChange = (page: number) => {
        router.get(
            "/article",
            {
                name: currentQueryParams.get("name"),
                category: currentQueryParams.get("category"),
                page: page,
            },
            {
                replace: true,
                preserveState: true,
            }
        );
    };
    return (
        <div>
            <Header user={props.auth.user} />
            <main>
                <section className="gj qp gr ki">
                    <div className="flex flex-col items-center justify-center ">
                        <h1 className="text-4xl font-bold mb-4">
                            Berita Terbaru
                        </h1>
                        <p className="text-gray-500 mb-8 max-w-2xl text-center">
                            Tetap terinformasi dengan update terbaru dari dunia
                            kerja. Temukan berita seputar lowongan pekerjaan,
                            acara sekolah, serta perkembangan kerjasama industri
                            dengan BKK SMKN 1 Bojonegoro.
                        </p>
                        <form
                            className="grid grid-cols-2 gap-6 mt-8 w-full container"
                            action="/article"
                            method="GET"
                        >
                            <div className="col-span-2 md:col-span-1">
                                <label className="rc ac" htmlFor="name">
                                    Judul
                                </label>
                                <input
                                    value={name || ""}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Cari berdasarkan judul"
                                    className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label className="rc ac" htmlFor="category">
                                    Kategori
                                </label>
                                <select
                                    name="category"
                                    id="category"
                                    className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                                    value={category || ""}
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                >
                                    <option value="" disabled>
                                        Cari berdasarkan kategori
                                    </option>
                                    {props.categories.map(
                                        (item: {
                                            name: string;
                                            id: string;
                                        }) => (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.name}
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>
                            <div className="col-span-2">
                                <div className="tc xf gap-8">
                                    <button
                                        type="submit"
                                        className="vc rg lk gh ml il hi gi _l wf xf dd i"
                                    >
                                        Cari Berita
                                    </button>
                                    {(name || category) && (
                                        <button
                                            type="reset"
                                            onClick={handleReset}
                                        >
                                            Reset Filter
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="bb ye ki xn vq jb jo">
                        <div className="wc qf pn xo zf iq">
                            {/* Blog Item */}
                            {props.articles.data.map(
                                (item: ArticleType, index: number) => (
                                    <div
                                        className="animate_top sg vk rm xm"
                                        key={index}
                                    >
                                        <div className="c rc i z-1 pg">
                                            <img
                                                className="w-full h-[250px] object-cover"
                                                src={item.thumbnail}
                                                alt="Blog"
                                            />
                                            <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                                                <Link
                                                    href={`/article/${item.id}`}
                                                    className="vc ek rg lk gh sl ml il gi hi"
                                                >
                                                    Baca Selengkapnya
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="yh">
                                            <div className="tc uf wf ag jq">
                                                <div className="tc wf ag">
                                                    <img
                                                        src="/images/icon-man.svg"
                                                        alt="User"
                                                    />
                                                    <p>{item.category?.name}</p>
                                                </div>
                                                <div className="tc wf ag">
                                                    <img
                                                        src="/images/icon-calender.svg"
                                                        alt="Calender"
                                                    />
                                                    <p>
                                                        {Intl.DateTimeFormat(
                                                            "id-ID",
                                                            {
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                            }
                                                        ).format(
                                                            new Date(
                                                                item.created_at
                                                            )
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                            <h4 className="ek tj ml il kk wm xl eq lb">
                                                <Link
                                                    href={`/article/${item.id}`}
                                                >
                                                    {item.title}
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>

                        <div className="mt-8 mx-auto w-full flex justify-center i ji">
                            <Pagination
                                onChange={handlePageChange}
                                current={props.articles.current_page}
                                pageSize={10}
                                total={props.articles.total}
                                showSizeChanger={false}
                            />
                        </div>
                        {/* Pagination */}
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
                                    href="#"
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
