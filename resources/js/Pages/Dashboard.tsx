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

    const isCompletedProfile = Object.values(user).some(
        (value) => value === null || value === ""
    );

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
                                    {Array.from({ length: 6 }).map(
                                        (_, index) => (
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
                                                        <p className="text-gray-500">
                                                            PT. ABC
                                                        </p>
                                                        <p className="text-lg font-bold">
                                                            Software Developer
                                                        </p>
                                                        <p className="text-gray-500">
                                                            Jakarta, Indonesia
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
                                                <p className="col-span-2 text-sm font-bold mt-4 border-t border-neutral-200 pt-3">
                                                    Batas lamar : 31 Desember
                                                    2024
                                                </p>
                                            </Link>
                                        )
                                    )}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
