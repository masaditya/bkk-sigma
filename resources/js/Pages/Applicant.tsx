import Modal from "@/Components/Modal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { BankOutlined, FileSyncOutlined } from "@ant-design/icons";
import { Head, Link } from "@inertiajs/react";
import { Carousel } from "antd";
import { useState } from "react";
import { useWindowSize } from "usehooks-ts";

export default function Dashboard(props: any) {
    const { user } = props;
    const { width = 0 } = useWindowSize();

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Riwayat Lamaran Pekerjaan Anda
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 px-3">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid gap-6">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 ">
                            <div className="flex justify-between items-start flex-wrap gap-4 border-b pb-4 border-b-gray-400">
                                <div>
                                    <h3 className="text-lg font-bold max-w-md leading-6 text-gray-900 dark:text-gray-100">
                                        Riwayat Lamaran Pekerjaan
                                    </h3>
                                    <p className="mt-4 text-xs lg:text-sm max-w-lg">
                                        Berikut adalah daftar lamaran pekerjaan
                                        yang telah Anda kirimkan. Pantau status
                                        lamaran Anda dan tetap terhubung dengan
                                        pemberi kerja untuk langkah selanjutnya.
                                    </p>
                                </div>
                                <Link
                                    href="/tracer-form"
                                    className="bg-blue-500 text-sm text-center text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                >
                                    Cari Pekerjaan
                                </Link>
                            </div>
                            {Array.from({ length: 3 }).map((_, index) => (
                                <Link
                                    href={`/job/${index}`}
                                    key={index}
                                    className="mt-6 grid grid-cols-4 gap-6 border hover:border-blue-500 rounded-lg p-4 border-neutral-300"
                                >
                                    <div className="flex gap-6 lg:gap-10 col-span-4 lg:col-span-3 px-4 ">
                                        <img
                                            src="/images/brand-light-01.svg"
                                            alt="company-logo"
                                            className="w-20 h-20 lg:w-32 lg:h-32 object-contain shadow-lg p-2"
                                        />
                                        <div className="col-span-3 flex flex-col justify-center">
                                            <p className="text-gray-500">
                                                PT. ABC
                                            </p>
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
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
