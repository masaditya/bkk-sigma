import { PageProps } from "@/types";
import Header from "@/Components/Header";
import { Footer } from "@/Components/Footer";
import { Pagination } from "antd";
import { Link } from "@inertiajs/react";
import {
    BankOutlined,
    FileSyncOutlined,
    LeftOutlined,
} from "@ant-design/icons";

export default function JobDetail(props: PageProps) {
    return (
        <div>
            <Header user={props.auth.user} />
            <main>
                <section className="gj ki xn hj rp hr">
                    <div className="container mx-auto">
                        <Link
                            href="/job"
                            className="text-blue-500 hover:text-blue-700 hover:underline flex gap-2 text-xs md:text-sm items-center"
                        >
                            <LeftOutlined />
                            Kembali ke daftar lowongan
                        </Link>

                        <div className="mt-6 grid grid-cols-4 gap-6">
                            <div className="flex gap-6 lg:gap-10 col-span-4 lg:col-span-3 px-4 ">
                                <img
                                    src="/images/brand-light-01.svg"
                                    alt="company-logo"
                                    className="w-20 h-20 lg:w-32 lg:h-32 object-contain shadow-lg p-2"
                                />
                                <div className="col-span-3 flex flex-col justify-center">
                                    <p className="text-gray-500">PT. ABC</p>
                                    <p className="text-lg font-bold">
                                        Software Developer
                                    </p>
                                    <p className="text-gray-500">
                                        Jakarta, Indonesia
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <span className="text-xs md:text-sm bg-blue-400 w-fit px-3 py-1 rounded-lg text-white flex gap-1   ">
                                            <FileSyncOutlined />
                                            Full-time
                                        </span>
                                        <span className="text-xs md:text-sm bg-blue-400 w-fit px-3 py-1 rounded-lg text-white flex gap-1">
                                            <BankOutlined />
                                            Manufaktur
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 shadow rounded-xl col-span-4 lg:col-span-1">
                                <p className="text-lg font-bold mb-3">
                                    Lamar Posisi ini?
                                </p>
                                <button className="bg-blue-500 text-white px-4 py-2 w-full rounded-lg hover:bg-blue-600 active:bg-blue-700">
                                    Lamar
                                </button>
                                <p className="text-gray-500 text-sm mt-3">
                                    Batas Lamar : 3 Januari 2024
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 p-4">
                            <p className="text-lg font-bold mb-3">
                                Deskripsi Pekerjaan
                            </p>

                            <div className="max-w-xl text-sm md:text-base">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolor sunt soluta, eaque,
                                commodi quas officia ullam perferendis maiores
                                alias nihil a eveniet accusamus distinctio
                                dolores placeat maxime exercitationem deleniti
                                sed.
                            </div>
                        </div>
                    </div>
                </section>
                {/* ===== Clients Start ===== */}

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
