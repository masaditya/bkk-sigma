import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { JobType } from "@/types";
import { BankOutlined, FileSyncOutlined } from "@ant-design/icons";
import { Head, Link, useForm } from "@inertiajs/react";
import { Carousel, notification } from "antd";
import { useWindowSize } from "usehooks-ts";

export default function Dashboard(props: any) {
    const { user, jobs } = props;
    const { width = 0 } = useWindowSize();

    const isCompletedProfile = Object.values(user).some(
        (value) => value === null || value === ""
    );

    const { setData, post, processing } = useForm<{ document: File | null }>({
        document: null,
    });

    const handleFileChange = (e: any) => {
        setData("document", e.target.files[0]);
        const formData = new FormData();
        formData.append("document", e.target.files[0]);
        post(route("dashboard.update-resume"), {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            data: formData,
            onFinish: () => {
                notification.success({
                    message: "Berhasil!",
                    description: "Resume/CV berhasil diperbarui!",
                });
                setData("document", null);
            },
            onError: () => {
                notification.error({
                    message: "Ups!",
                    description:
                        "Resume/CV gagal diperbarui!, silahkan coba lagi.",
                });
                setData("document", null);
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Selamat Datang di Dashboard Alumni BKK Sigma SMKN 1
                    Bojonegoro!
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 px-3">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid gap-6">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        {isCompletedProfile && (
                            <div className="p-6 text-gray-900 dark:text-gray-100 flex justify-between items-start flex-wrap gap-4">
                                <div>
                                    <h3 className="text-lg font-bold max-w-md leading-6 text-gray-900 dark:text-gray-100">
                                        Lengkapi Profil Anda
                                    </h3>
                                    <p className="mt-4 text-xs lg:text-sm max-w-lg">
                                        Profil yang lengkap memudahkan kami
                                        menghubungkan Anda dengan lowongan
                                        pekerjaan yang sesuai. Klik di sini
                                        untuk melengkapi data alumni Anda.
                                    </p>
                                </div>
                                <Link
                                    href="/tracer-form"
                                    className="bg-blue-500 text-sm text-center text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                >
                                    Lengkapi Data
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        {
                            <div className="p-6 text-gray-900 dark:text-gray-100 flex justify-between items-start flex-wrap gap-4">
                                <div>
                                    <h3 className="text-lg font-bold max-w-md leading-6 text-gray-900 dark:text-gray-100">
                                        Unggah Curriculum Vitae / Resume Anda
                                    </h3>
                                    <p className="mt-4 text-xs lg:text-sm max-w-lg">
                                        Perbarui Dokumen Lamaran Pekerjaan Anda
                                        dengan mengunggah Curriculum Vitae /
                                        Resume Anda.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    {props.user.document && (
                                        <a className="bg-blue-500 text-sm text-center text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                            Lihat Resume / CV
                                        </a>
                                    )}
                                    <input
                                        type="file"
                                        id="select-file"
                                        className="hidden"
                                        accept="application/pdf"
                                        onChange={handleFileChange}
                                    />
                                    <label
                                        htmlFor="select-file"
                                        className="bg-blue-500 text-sm text-center text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
                                    >
                                        Unggah
                                    </label>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 ">
                            <h3 className="text-lg font-bold max-w-md leading-6 text-gray-900 dark:text-gray-100">
                                Lowongan Kerja Terkini
                            </h3>
                            <p className="mt-4 text-xs lg:text-sm max-w-lg">
                                Jelajahi berbagai kesempatan karier yang kami
                                sediakan khusus untuk alumni SMKN 1 Bojonegoro.
                                Temukan pekerjaan impian Anda sekarang.
                            </p>
                            <div className="mt-8 ">
                                <Carousel
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
                                    {jobs.map((job: JobType, index: number) => (
                                        <Link
                                            href={`/job/${job.id}`}
                                            key={index}
                                            className="p-6 rounded-lg hover:border-blue-500 hover:shadow-lg cursor-pointer bg-white border border-neutral-200"
                                        >
                                            <div className="grid gap-6 grid-cols-4 ">
                                                <img
                                                    src={job.thumbnail}
                                                    alt="company-logo"
                                                    className="w-20 h-20 object-contain"
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
                                                </div>
                                                <div className="col-span-1 hidden lg:block"></div>
                                                <div className="flex gap-2 col-span-4 lg:col-span-3">
                                                    <span className="text-sm bg-blue-400 w-fit px-3 py-1 rounded-lg text-white flex gap-1 items-center   ">
                                                        <FileSyncOutlined />
                                                        {job.job_type}
                                                    </span>
                                                    <span className="text-sm bg-blue-400 w-fit px-3 py-1 rounded-lg text-white flex gap-1 items-center">
                                                        <BankOutlined />
                                                        {
                                                            job
                                                                ?.company_industry
                                                                ?.name
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="col-span-2 text-sm font-bold mt-4 border-t border-neutral-200 pt-3">
                                                Batas lamar :{" "}
                                                {Intl.DateTimeFormat("id-ID", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                }).format(
                                                    new Date(job.deadline)
                                                )}
                                            </p>
                                        </Link>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
