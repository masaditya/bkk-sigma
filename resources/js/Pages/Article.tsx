import { PageProps } from "@/types";
import Header from "@/Components/Header";
import { Footer } from "@/Components/Footer";
import { Pagination } from "antd";
import { Link } from "@inertiajs/react";
import {
    BankOutlined,
    FileSyncOutlined,
    NodeCollapseOutlined,
} from "@ant-design/icons";

export default function Alumni(props: PageProps) {
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
                    </div>
                    <div className="bb ye ki xn vq jb jo">
                        <div className="wc qf pn xo zf iq">
                            {/* Blog Item */}
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div className="animate_top sg vk rm xm">
                                    <div className="c rc i z-1 pg">
                                        <img
                                            className="w-full"
                                            src="images/blog-01.png"
                                            alt="Blog"
                                        />
                                        <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                                            <Link
                                                href={`/article/${index}`}
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
                                                    src="images/icon-man.svg"
                                                    alt="User"
                                                />
                                                <p>Musharof Chy</p>
                                            </div>
                                            <div className="tc wf ag">
                                                <img
                                                    src="images/icon-calender.svg"
                                                    alt="Calender"
                                                />
                                                <p>25 Dec, 2025</p>
                                            </div>
                                        </div>
                                        <h4 className="ek tj ml il kk wm xl eq lb">
                                            <a href="blog-single.html">
                                                Free advertising for your online
                                                business
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            ))}
                            {/* Blog Item */}
                            <div className="animate_top sg vk rm xm">
                                <div className="c rc i z-1 pg">
                                    <img
                                        className="w-full"
                                        src="images/blog-02.png"
                                        alt="Blog"
                                    />
                                    <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                                        <a
                                            href="./blog-single.html"
                                            className="vc ek rg lk gh sl ml il gi hi"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <div className="yh">
                                    <div className="tc uf wf ag jq">
                                        <div className="tc wf ag">
                                            <img
                                                src="images/icon-man.svg"
                                                alt="User"
                                            />
                                            <p>Musharof Chy</p>
                                        </div>
                                        <div className="tc wf ag">
                                            <img
                                                src="images/icon-calender.svg"
                                                alt="Calender"
                                            />
                                            <p>25 Dec, 2025</p>
                                        </div>
                                    </div>
                                    <h4 className="ek tj ml il kk wm xl eq lb">
                                        <a href="blog-single.html">
                                            9 simple ways to improve your design
                                            skills
                                        </a>
                                    </h4>
                                </div>
                            </div>
                            {/* Blog Item */}
                            <div className="animate_top sg vk rm xm">
                                <div className="c rc i z-1 pg">
                                    <img
                                        className="w-full"
                                        src="images/blog-03.png"
                                        alt="Blog"
                                    />
                                    <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                                        <a
                                            href="./blog-single.html"
                                            className="vc ek rg lk gh sl ml il gi hi"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <div className="yh">
                                    <div className="tc uf wf ag jq">
                                        <div className="tc wf ag">
                                            <img
                                                src="images/icon-man.svg"
                                                alt="User"
                                            />
                                            <p>Musharof Chy</p>
                                        </div>
                                        <div className="tc wf ag">
                                            <img
                                                src="images/icon-calender.svg"
                                                alt="Calender"
                                            />
                                            <p>25 Dec, 2025</p>
                                        </div>
                                    </div>
                                    <h4 className="ek tj ml il kk wm xl eq lb">
                                        <a href="blog-single.html">
                                            Tips to quickly improve your coding
                                            speed.
                                        </a>
                                    </h4>
                                </div>
                            </div>
                            {/* Blog Item */}
                            <div className="animate_top sg vk rm xm">
                                <div className="c rc i z-1 pg">
                                    <img
                                        className="w-full"
                                        src="images/blog-01.png"
                                        alt="Blog"
                                    />
                                    <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                                        <a
                                            href="./blog-single.html"
                                            className="vc ek rg lk gh sl ml il gi hi"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <div className="yh">
                                    <div className="tc uf wf ag jq">
                                        <div className="tc wf ag">
                                            <img
                                                src="images/icon-man.svg"
                                                alt="User"
                                            />
                                            <p>Musharof Chy</p>
                                        </div>
                                        <div className="tc wf ag">
                                            <img
                                                src="images/icon-calender.svg"
                                                alt="Calender"
                                            />
                                            <p>25 Dec, 2025</p>
                                        </div>
                                    </div>
                                    <h4 className="ek tj ml il kk wm xl eq lb">
                                        <a href="blog-single.html">
                                            Free advertising for your online
                                            business
                                        </a>
                                    </h4>
                                </div>
                            </div>
                            {/* Blog Item */}
                            <div className="animate_top sg vk rm xm">
                                <div className="c rc i z-1 pg">
                                    <img
                                        className="w-full"
                                        src="images/blog-02.png"
                                        alt="Blog"
                                    />
                                    <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                                        <a
                                            href="./blog-single.html"
                                            className="vc ek rg lk gh sl ml il gi hi"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <div className="yh">
                                    <div className="tc uf wf ag jq">
                                        <div className="tc wf ag">
                                            <img
                                                src="images/icon-man.svg"
                                                alt="User"
                                            />
                                            <p>Musharof Chy</p>
                                        </div>
                                        <div className="tc wf ag">
                                            <img
                                                src="images/icon-calender.svg"
                                                alt="Calender"
                                            />
                                            <p>25 Dec, 2025</p>
                                        </div>
                                    </div>
                                    <h4 className="ek tj ml il kk wm xl eq lb">
                                        <a href="blog-single.html">
                                            9 simple ways to improve your design
                                            skills
                                        </a>
                                    </h4>
                                </div>
                            </div>
                            {/* Blog Item */}
                            <div className="animate_top sg vk rm xm">
                                <div className="c rc i z-1 pg">
                                    <img
                                        className="w-full"
                                        src="images/blog-03.png"
                                        alt="Blog"
                                    />
                                    <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                                        <a
                                            href="./blog-single.html"
                                            className="vc ek rg lk gh sl ml il gi hi"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <div className="yh">
                                    <div className="tc uf wf ag jq">
                                        <div className="tc wf ag">
                                            <img
                                                src="images/icon-man.svg"
                                                alt="User"
                                            />
                                            <p>Musharof Chy</p>
                                        </div>
                                        <div className="tc wf ag">
                                            <img
                                                src="images/icon-calender.svg"
                                                alt="Calender"
                                            />
                                            <p>25 Dec, 2025</p>
                                        </div>
                                    </div>
                                    <h4 className="ek tj ml il kk wm xl eq lb">
                                        <a href="blog-single.html">
                                            Tips to quickly improve your coding
                                            speed.
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 mx-auto w-full flex justify-center i ji">
                            <Pagination
                                current={1}
                                pageSize={10}
                                total={50}
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
