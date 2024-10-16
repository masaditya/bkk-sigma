import { JobType, PageProps } from "@/types";
import Header from "@/Components/Header";
import { Footer } from "@/Components/Footer";
import { Pagination } from "antd";
import { Link, router, usePage } from "@inertiajs/react";
import { BankOutlined, FileSyncOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Job(props: any) {
    const { url } = usePage();
    const currentQueryParams = new URLSearchParams(url.split("?")[1]);

    const [name, setName] = useState(currentQueryParams.get("name"));
    const [location, setLocation] = useState(
        currentQueryParams.get("location")
    );

    const handleReset = () => {
        setName("");
        setLocation("");
        router.get(
            "/job",
            {},
            {
                replace: true,
                preserveState: true,
            }
        );
    };

    const handlePageChange = (page: number) => {
        router.get(
            "/job",
            {
                name: currentQueryParams.get("name"),
                location: currentQueryParams.get("location"),
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
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold mb-4 text-center">
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
                                    value={name ?? ""}
                                    onChange={(e) => setName(e.target.value)}
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
                                    value={location ?? ""}
                                    onChange={(e) =>
                                        setLocation(e.target.value)
                                    }
                                    type="text"
                                    name="location"
                                    id="location"
                                    placeholder="Jakarta, Bandung, Surabaya, dll"
                                    className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                                />
                            </div>
                            <div className="col-span-2">
                                <div className="tc xf gap-8">
                                    <button className="vc rg lk gh ml il hi gi _l wf xf dd i">
                                        Cari Pekerjaan
                                    </button>
                                    {(name || location) && (
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
                </section>
                {/* ===== Clients Start ===== */}

                <section className="flex flex-col items-center justify-center hj rp hr ki">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full container">
                        {props.jobs.data.map((item: JobType, index: number) => (
                            <Link
                                href={`/job/${item.id}`}
                                key={index}
                                className="p-6 rounded-lg hover:border-blue-500 hover:shadow-lg cursor-pointer bg-white border border-neutral-200"
                            >
                                <div className="grid gap-6 grid-cols-4 ">
                                    <img
                                        src={item.thumbnail}
                                        alt="company-logo"
                                        className="w-20 h-20 object-contain"
                                    />
                                    <div className="col-span-3 flex flex-col justify-center">
                                        <p className="text-gray-500">
                                            {item.company}
                                        </p>
                                        <p className="text-lg font-bold">
                                            {item.title}
                                        </p>
                                        <p className="text-gray-500">
                                            {item.location}
                                        </p>
                                    </div>
                                    <div className="flex gap-3 col-span-4 lg:col-span-4 justify-end">
                                        <span className="text-xs bg-blue-400 w-fit px-3 py-1 rounded-lg text-white flex gap-1 items-center   ">
                                            <FileSyncOutlined />
                                            {item?.job_type}
                                        </span>
                                        <span className="text-xs bg-blue-400 w-fit px-3 py-1 rounded-lg text-white flex gap-1 items-center">
                                            <BankOutlined />
                                            {item?.company_industry?.name}
                                        </span>
                                    </div>
                                </div>

                                <p className="col-span-2 text-sm font-bold mt-4 border-t border-neutral-200 pt-3">
                                    Batas lamar :{" "}
                                    {new Intl.DateTimeFormat("id-ID", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                    }).format(new Date(item.deadline))}
                                </p>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8">
                        <Pagination
                            onChange={handlePageChange}
                            current={props.jobs.current_page}
                            pageSize={10}
                            total={props.jobs.total}
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
