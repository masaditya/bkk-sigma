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

export default function Job(props: PageProps) {
    return (
        <div>
            <Header user={props.auth.user} />
            <main>
                <section className="gj qp gr ki">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold mb-4">
                            Temukan Karier Impianmu
                        </h1>
                        <p className="text-gray-500 mb-8 max-w-2xl text-center">
                            Jelajahi ribuan lowongan kerja di berbagai bidang
                            dan industri. Dapatkan pekerjaan yang sesuai dengan
                            minat dan keahlianmu dengan pencarian yang mudah dan
                            cepat
                        </p>
                        <form
                            className="grid grid-cols-2 gap-6 mt-8 w-full container"
                            action="/job"
                            method="GET"
                        >
                            <div className="col-span-2 md:col-span-1">
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
                            <div className="col-span-2 md:col-span-1">
                                <label className="rc ac" htmlFor="location">
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
                                    <button className="vc rg lk gh ml il hi gi _l wf xf dd i">
                                        Cari Pekerjaan
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                {/* ===== Clients Start ===== */}

                <section className="flex flex-col items-center justify-center hj rp hr ki">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full container">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <Link
                                href={`/job/${index}`}
                                key={index}
                                className="p-6 rounded-lg hover:border-blue-500 hover:shadow-lg cursor-pointer bg-white border border-neutral-200"
                            >
                                <div className="grid gap-6 grid-cols-4 ">
                                    <img
                                        src="/images/brand-light-01.svg"
                                        alt="company-logo"
                                        className="w-20 h-20 object-contain"
                                    />
                                    <div className="col-span-3 flex flex-col justify-center">
                                        <p className="text-gray-500">PT. ABC</p>
                                        <p className="text-lg font-bold">
                                            Software Developer
                                        </p>
                                        <p className="text-gray-500">
                                            Jakarta, Indonesia
                                        </p>
                                        <div className="flex gap-2 mt-4">
                                            <span className="text-sm bg-blue-400 w-fit px-3 py-1 rounded-lg text-white flex gap-1   ">
                                                <FileSyncOutlined />
                                                Full-time
                                            </span>
                                            <span className="text-sm bg-blue-400 w-fit px-3 py-1 rounded-lg text-white flex gap-1">
                                                <BankOutlined />
                                                Manufaktur
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="col-span-2 text-sm font-bold mt-4 border-t border-neutral-200 pt-3">
                                    Batas lamar : 31 Desember 2024
                                </p>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8">
                        <Pagination
                            current={1}
                            pageSize={10}
                            total={50}
                            showSizeChanger={false}
                        />
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
