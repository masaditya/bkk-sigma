import { JobType, PageProps, User } from "@/types";
import Header from "@/Components/Header";
import { Footer } from "@/Components/Footer";
import { Carousel, notification, Pagination } from "antd";
import { Link, router } from "@inertiajs/react";
import {
    BankOutlined,
    FileSyncOutlined,
    LeftOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { useWindowSize } from "usehooks-ts";

export default function JobDetail(props: {
    job: JobType;
    relatedJobs: JobType[];
    auth: {
        user: User;
    };
    isApplied: boolean;
}) {
    const { job, relatedJobs } = props;
    const { width = 0 } = useWindowSize();

    const handleApply = () => {
        if (props.auth.user) {
            router.post(
                `/job/${job.id}/apply`,
                { id: job.id },
                {
                    onSuccess: () => {
                        notification.success({
                            message: "Success",
                            description: "Berhasil melamar lowongan ini!",
                        });
                    },
                    onError: () => {
                        notification.error({
                            message: "Ups!",
                            description: "Gagal melamar lowongan ini!",
                        });
                    },
                }
            );
        } else {
            router.get("/login");
        }
    };

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
                                    src={job.thumbnail}
                                    alt="company-logo"
                                    className="w-20 h-20 lg:w-32 lg:h-32 object-contain shadow-lg p-2"
                                />
                                <div className="col-span-3 flex flex-col justify-center">
                                    <p className="text-gray-500">
                                        {job.company}
                                    </p>
                                    <p className="text-lg font-bold">
                                        {job.title}
                                    </p>
                                    <p className="text-gray-500">
                                        {job.location}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <span className="text-xs md:text-sm bg-blue-400 w-fit px-3 py-1 rounded-lg text-white flex gap-1   ">
                                            <FileSyncOutlined />
                                            {job?.job_type}
                                        </span>
                                        <span className="text-xs md:text-sm bg-blue-400 w-fit px-3 py-1 rounded-lg text-white flex gap-1">
                                            <BankOutlined />
                                            {job.company_industry?.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 shadow rounded-xl col-span-4 lg:col-span-1">
                                <p className="text-lg font-bold mb-3">
                                    Lamar Posisi ini?
                                </p>
                                <button
                                    disabled={props.isApplied}
                                    onClick={handleApply}
                                    className="bg-blue-500 disabled:bg-neutral-300 text-white px-4 py-2 w-full rounded-lg hover:bg-blue-600 active:bg-blue-700"
                                >
                                    {props.isApplied
                                        ? "Sudah Dilamar"
                                        : "Lamar Sekarang"}
                                </button>
                                <p className="text-gray-500 text-sm mt-3">
                                    Batas Lamar :{" "}
                                    {new Intl.DateTimeFormat("id-ID", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                    }).format(new Date(job.deadline))}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 p-4">
                            <p className="text-lg font-bold mb-3">
                                Deskripsi Pekerjaan
                            </p>

                            <div
                                className="max-w-xl text-sm md:text-base"
                                dangerouslySetInnerHTML={{
                                    __html: job.description,
                                }}
                            ></div>
                        </div>
                    </div>
                </section>

                <section className="gj ki xn hj rp hr">
                    <div className="container mx-auto">
                        <p className="text-lg font-bold mb-3">
                            Lowongan Terkait
                        </p>

                        <Carousel
                            className="my-8"
                            autoplay
                            autoplaySpeed={2000}
                            slidesToShow={
                                width > 1024 ? 3 : width > 768 ? 2 : 1
                            }
                            infinite
                            slidesToScroll={1}
                            dots
                            draggable
                        >
                            {relatedJobs.map((item, index) => (
                                <Link
                                    href={`/job/${index}`}
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
                                            <p className="text-lg font-bold text-gray-600">
                                                {item.title}
                                            </p>
                                            <p className="text-gray-500">
                                                {item.location}
                                            </p>
                                        </div>
                                        <div className="col-span-1 hidden lg:block"></div>
                                        <div className="flex gap-2 col-span-4 lg:col-span-3">
                                            <span className="text-sm bg-blue-400 w-fit px-3 py-1 rounded-lg text-white flex gap-1 items-center   ">
                                                <FileSyncOutlined />
                                                Full-time
                                            </span>
                                            <span className="text-sm bg-blue-400 w-fit px-3 py-1 rounded-lg text-white flex gap-1 items-center">
                                                <BankOutlined />
                                                Manufaktur
                                            </span>
                                        </div>
                                    </div>
                                    <p className="col-span-2 text-sm font-bold mt-4 border-t border-neutral-200 pt-3 text-gray-500">
                                        Batas lamar :{" "}
                                        {Intl.DateTimeFormat("id-ID", {
                                            day: "2-digit",
                                            month: "long",
                                            year: "numeric",
                                        }).format(new Date(item.deadline))}
                                    </p>
                                </Link>
                            ))}
                        </Carousel>
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
