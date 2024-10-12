import { PageProps } from "@/types";
import Header from "@/Components/Header";
import { Footer } from "@/Components/Footer";
import { Link } from "@inertiajs/react";

export default function Welcome(props: PageProps) {
    return (
        <div>
            <Header user={props.auth.user} page="home" />
            <main>
                <section className="gj do ir hj sp jr i pg">
                    <div className="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r">
                        <img
                            src="/images/shape-01.svg"
                            alt="shape"
                            className="xc 2xl:ud-block h t -ud-left-[10%] ua"
                        />
                        <img
                            src="/images/shape-02.svg"
                            alt="shape"
                            className="xc 2xl:ud-block h u p va"
                        />
                        <img
                            src="/images/shape-03.svg"
                            alt="shape"
                            className="xc 2xl:ud-block h v w va"
                        />
                        <img
                            src="/images/shape-04.svg"
                            alt="shape"
                            className="h q r"
                        />
                        <img
                            src="/images/hero.png"
                            alt="Woman"
                            className="h q r ua"
                        />
                    </div>

                    <div className="bb ze ki xn 2xl:ud-px-0">
                        <div className="tc _o">
                            <div className="animate_left jn/2">
                                <h1 className="fk vj zp or kk wm wb">
                                    Menghubungkan Talenta dengan Industri
                                </h1>
                                <p className="fq font-semibold text-lg">
                                    BKK SMKN 1 Bojonegoro siap membantu siswa
                                    terhubung dengan perusahaan terkemuka dan
                                    meraih karier impian.
                                </p>

                                <div className="tc tf yo zf mb">
                                    <Link
                                        href="/job"
                                        className="ek jk lk gh gi hi rg ml il vc _d _l !font-semibold"
                                    >
                                        Cari Lowongan
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features">
                    <div className="bb ze ki yn 2xl:ud-px-12.5">
                        <div className="tc uf zo xf ap zf bp mq">
                            {/* Small Features Item */}
                            <div className="animate_top text-center">
                                <div className="tc wf xf cf ae cd rg mh mx-auto mb-4">
                                    <img src="/images/icon-01.svg" alt="Icon" />
                                </div>
                                <div>
                                    <h4 className="ek yj go kk wm xb">
                                        Layanan Karier 24/7
                                    </h4>
                                    <p>
                                        Dapatkan dukungan karier kapan saja,
                                        dengan akses mudah ke informasi lowongan
                                        pekerjaan dan bimbingan karier yang siap
                                        membantu.
                                    </p>
                                </div>
                            </div>
                            {/* Small Features Item */}
                            <div className="animate_top text-center">
                                <div className="tc wf xf cf ae cd rg nh mx-auto mb-4">
                                    <img src="/images/icon-02.svg" alt="Icon" />
                                </div>
                                <div>
                                    <h4 className="ek yj go kk wm xb">
                                        Kemitraan Industri
                                    </h4>
                                    <p>
                                        Terhubung langsung dengan perusahaan dan
                                        industri terkemuka yang mencari talenta
                                        muda berbakat dari SMKN 1 Bojonegoro.
                                    </p>
                                </div>
                            </div>
                            {/* Small Features Item */}
                            <div className="animate_top text-center">
                                <div className="tc wf xf cf ae cd rg oh mx-auto mb-4">
                                    <img src="/images/icon-03.svg" alt="Icon" />
                                </div>
                                <div>
                                    <h4 className="ek yj go kk wm xb">
                                        Kolaborasi Tim
                                    </h4>
                                    <p>
                                        Kami bekerja sama dengan guru, siswa,
                                        dan perusahaan untuk menciptakan
                                        pengalaman kerja yang relevan dan
                                        mendukung masa depan karier siswa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ji gp uq 2xl:ud-py-35 pg">
                    <div className="bb ze ki xn wq">
                        <div className="tc wf gg qq">
                            {/* About Images */}
                            <div className="animate_left xc gn gg jn/2 i">
                                <div>
                                    <img
                                        src="/images/shape-05.svg"
                                        alt="Shape"
                                        className="h -ud-left-5 x"
                                    />
                                    <img
                                        src="/images/about-01.png"
                                        alt="About"
                                        className="ib"
                                    />
                                    <img
                                        src="/images/about-02.png"
                                        alt="About"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/images/shape-06.svg"
                                        alt="Shape"
                                    />
                                    <img
                                        src="/images/about-03.png"
                                        alt="About"
                                        className="ob gb"
                                    />
                                    <img
                                        src="/images/shape-07.svg"
                                        alt="Shape"
                                        className="bb"
                                    />
                                </div>
                            </div>
                            {/* About Content */}
                            <div className="animate_right jn/2 mx-auto">
                                <h2 className="fk vj zp pr kk wm qb">
                                    Cari Pekerjaan Impian Sekarang
                                </h2>
                                <form
                                    className="grid grid-cols-2 gap-6 mt-8"
                                    action="/job"
                                    method="GET"
                                >
                                    <div className="col-span-2">
                                        <label className="rc ac" htmlFor="name">
                                            Posisi Pekerjaan
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Akuntan, Teknisi, Programmer, dll"
                                            className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            className="rc ac"
                                            htmlFor="location"
                                        >
                                            Lokasi
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            id="location"
                                            placeholder="Jakarta, Bandung, Surabaya, dll"
                                            className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <div className="tc xf">
                                            <button className="vc rg lk gh ml il hi gi _l animate-pulse tc wf xf dd i">
                                                <span className="nf h vc yc vd rg gh qk -ud-z-1" />
                                                Cari Pekerjaan
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== Counter Start ===== */}
                <section className="i pg qh rm ji hp">
                    <img
                        src="/images/shape-11.svg"
                        alt="Shape"
                        className="of h ga ha ke"
                    />
                    <img
                        src="/images/shape-07.svg"
                        alt="Shape"
                        className="h ia o ae jf"
                    />
                    <img
                        src="/images/shape-14.svg"
                        alt="Shape"
                        className="h ja ka"
                    />
                    <img
                        src="/images/shape-15.svg"
                        alt="Shape"
                        className="h q p"
                    />
                    <div className="bb ze i va ki xn br">
                        <div className="tc uf sn tn xf un gg">
                            <div className="animate_top me/5 ln rj">
                                <h2 className="gk vj zp or kk wm hc">500+</h2>
                                <p className="ek bk aq">
                                    Alumni Telah Ditempatkan di Berbagai
                                    Perusahaan
                                </p>
                            </div>
                            <div className="animate_top me/5 ln rj">
                                <h2 className="gk vj zp or kk wm hc">150+ </h2>
                                <p className="ek bk aq">
                                    Perusahaan Mitra yang Bekerja Sama dengan
                                    BKK SMKN 1 Bojonegoro
                                </p>
                            </div>
                            <div className="animate_top me/5 ln rj">
                                <h2 className="gk vj zp or kk wm hc">80%</h2>
                                <p className="ek bk aq">
                                    Alumni Mendapatkan Pekerjaan Dalam 6 Bulan
                                    Setelah Lulus
                                </p>
                            </div>
                            <div className="animate_top me/5 ln rj">
                                <h2 className="gk vj zp or kk wm hc">1000+</h2>
                                <p className="ek bk aq">
                                    Lowongan Pekerjaan Dibuka Setiap Tahun
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ===== Counter End ===== */}
                {/* ===== Clients Start ===== */}
                <section className="pj vp mr">
                    {/* Section Title Start */}
                    <div x-data="{ sectionTitle: `Trusted by Global Brands`, sectionTitleText: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.`}">
                        <div className="animate_top bb ze rj ki xn vq">
                            <h2
                                x-text="sectionTitle"
                                className="fk vj pr kk wm on/5 gq/2 bb _b"
                            ></h2>
                            <p
                                className="bb on/5 wo/5 hq"
                                x-text="sectionTitleText"
                            />
                        </div>
                    </div>
                    {/* Section Title End */}
                    <div className="bb ze ah ch pm hj xp ki xn 2xl:ud-px-49 bc">
                        <div className="wc rf qn zf cp kq xf wf">
                            <a href="#" className="rc animate_top">
                                <img
                                    className="th wl ml il zl om"
                                    src="/images/brand-light-01.svg"
                                    alt="Clients"
                                />
                                <img
                                    className="xc sk ml il zl nm"
                                    src="/images/brand-dark-01.svg"
                                    alt="Clients"
                                />
                            </a>
                            <a href="#" className="rc animate_top">
                                <img
                                    className="tk ml il zl om"
                                    src="/images/brand-light-02.svg"
                                    alt="Clients"
                                />
                                <img
                                    className="xc sk ml il zl nm"
                                    src="/images/brand-dark-02.svg"
                                    alt="Clients"
                                />
                            </a>
                            <a href="#" className="rc animate_top">
                                <img
                                    className="tk ml il zl om"
                                    src="/images/brand-light-03.svg"
                                    alt="Clients"
                                />
                                <img
                                    className="xc sk ml il zl nm"
                                    src="/images/brand-dark-03.svg"
                                    alt="Clients"
                                />
                            </a>
                            <a href="#" className="rc animate_top">
                                <img
                                    className="tk ml il zl om"
                                    src="/images/brand-light-04.svg"
                                    alt="Clients"
                                />
                                <img
                                    className="xc sk ml il zl nm"
                                    src="/images/brand-dark-04.svg"
                                    alt="Clients"
                                />
                            </a>
                            <a href="#" className="rc animate_top">
                                <img
                                    className="tk ml il zl om"
                                    src="/images/brand-light-05.svg"
                                    alt="Clients"
                                />
                                <img
                                    className="xc sk ml il zl nm"
                                    src="/images/brand-dark-05.svg"
                                    alt="Clients"
                                />
                            </a>
                            <a href="#" className="rc animate_top">
                                <img
                                    className="tk ml il zl om"
                                    src="/images/brand-light-06.svg"
                                    alt="Clients"
                                />
                                <img
                                    className="xc sk ml il zl nm"
                                    src="/images/brand-dark-06.svg"
                                    alt="Clients"
                                />
                            </a>
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
                                    href="#"
                                    className="vc ek kk hh rg ol il cm gi hi"
                                >
                                    Gabung Mitra Industri
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ===== Clients End ===== */}
                {/* ===== Blog Start ===== */}
                <section className="ji gp uq">
                    {/* Section Title Start */}
                    <div>
                        <div className="animate_top bb ze rj ki xn vq">
                            <h2
                                x-text="sectionTitle"
                                className="fk vj pr kk wm on/5 gq/2 bb _b"
                            >
                                Berita Terbaru
                            </h2>
                            <p
                                className="bb on/5 wo/5 hq"
                                x-text="sectionTitleText"
                            >
                                Tetap terinformasi dengan update terbaru dari
                                dunia kerja. Temukan berita seputar lowongan
                                pekerjaan, acara sekolah, serta perkembangan
                                kerjasama industri dengan BKK SMKN 1 Bojonegoro.
                            </p>
                        </div>
                    </div>
                    {/* Section Title End */}
                    <div className="bb ye ki xn vq jb jo">
                        <div className="wc qf pn xo zf iq">
                            {/* Blog Item */}
                            <div className="animate_top sg vk rm xm">
                                <div className="c rc i z-1 pg">
                                    <img
                                        className="w-full"
                                        src="/images/blog-01.png"
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
                                                src="/images/icon-man.svg"
                                                alt="User"
                                            />
                                            <p>Musharof Chy</p>
                                        </div>
                                        <div className="tc wf ag">
                                            <img
                                                src="/images/icon-calender.svg"
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
                                        src="/images/blog-02.png"
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
                                                src="/images/icon-man.svg"
                                                alt="User"
                                            />
                                            <p>Musharof Chy</p>
                                        </div>
                                        <div className="tc wf ag">
                                            <img
                                                src="/images/icon-calender.svg"
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
                                        src="/images/blog-03.png"
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
                                                src="/images/icon-man.svg"
                                                alt="User"
                                            />
                                            <p>Musharof Chy</p>
                                        </div>
                                        <div className="tc wf ag">
                                            <img
                                                src="/images/icon-calender.svg"
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
                    </div>
                </section>
                {/* ===== Blog End ===== */}
            </main>
            <Footer />
        </div>
    );
}
