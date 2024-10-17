import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Divider, notification } from "antd";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function Dashboard(pageProps: any) {
    const { user, majors, companies, statuses, errors } = pageProps;

    const { data, setData, post } = useForm<
        {
            photo: File | null | string;
            document: File | null | string;
        } & Record<string, any>
    >({
        name: user.name || "",
        email: user.email || "",
        major_id: user.major_id || "",
        position: user.position || "",
        graduation_year: user.graduation_year || "",
        university: user.university || "",
        faculty: user.faculty || "",
        latest_degree: user.latest_degree || "",
        NIS: user.NIS || "",
        company: user.company || "",
        status_id: user.status_id || "",
        company_industry_id: user.company_industry_id || "",
        phone: user.phone || "",
        address: user.address || "",
        photo: user.photo || null,
        document: user.document || null,
        gender: user.gender || "",
    });

    const handleSubmit = useCallback(
        (e: any) => {
            e.preventDefault();

            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("major_id", data.major_id);
            formData.append("position", data.position);
            formData.append("graduation_year", data.graduation_year);
            formData.append("university", data.university);
            formData.append("faculty", data.faculty);
            formData.append("latest_degree", data.latest_degree);
            formData.append("NIS", data.NIS);
            formData.append("company", data.company);
            formData.append("status_id", data.status_id);
            formData.append("company_industry_id", data.company_industry_id);
            formData.append("phone", data.phone);
            formData.append("address", data.address);
            formData.append("photo", data.photo || "");
            formData.append("document", data.document || "");
            formData.append("gender", data.gender);

            post(route("dashboard.tracer-form-submit"), {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                data: formData,
                onSuccess: () => {
                    notification.success({
                        message: "Berhasil!",
                        description: "Data berhasil disimpan!",
                    });
                },
                onError: () => {
                    notification.error({
                        message: "Ups!",
                        description: "Data gagal disimpan!",
                    });
                },
            });
        },
        [data, post]
    );

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Tracer Form
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="p-6">
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold mb-4">
                                        Tracer Study Alumni
                                    </h2>
                                    <p className="text-gray-500 mb-8 max-w-2xl mx-auto text-center">
                                        Data yang kami himpun membantu kami
                                        mengevaluasi efektivitas kurikulum dan
                                        meningkatkan kerjasama dengan dunia
                                        industri demi mempersiapkan lulusan yang
                                        lebih siap bersaing di dunia kerja.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-6 mt-4">
                                    <div className="col-span-2 lg:col-span-1">
                                        <InputLabel
                                            htmlFor="name"
                                            value="Nama"
                                        />
                                        <TextInput
                                            className="w-full"
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            autoComplete="name"
                                            placeholder="Isi dengan nama lengkap anda"
                                            disabled
                                            value={user.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <InputLabel
                                            htmlFor="email"
                                            value="Email"
                                        />
                                        <TextInput
                                            className="w-full"
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            placeholder="Isi dengan email anda"
                                            disabled
                                            value={user.email}
                                            onChange={(e) => {
                                                setData(
                                                    "email",
                                                    e.target.value
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <InputLabel
                                            htmlFor="address"
                                            value="Alamat"
                                        />
                                        <TextInput
                                            value={data.address}
                                            onChange={(e) =>
                                                setData(
                                                    "address",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full"
                                            id="address"
                                            name="address"
                                            type="text"
                                            required
                                            autoComplete="off"
                                            placeholder="Isi dengan alamat"
                                        />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <InputLabel
                                            htmlFor="phone"
                                            value="Nomor Telepon"
                                        />
                                        <TextInput
                                            value={data.phone}
                                            onChange={(e) =>
                                                setData("phone", e.target.value)
                                            }
                                            className="w-full"
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            required
                                            autoComplete="off"
                                            placeholder="Isi dengan nomor telepon"
                                        />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1 flex justify-between flex-wrap">
                                        <div>
                                            <InputLabel
                                                htmlFor="photo"
                                                value="Foto"
                                            />
                                            <input
                                                onChange={(e) => {
                                                    setData(
                                                        "photo",
                                                        e.target.files?.[0] ||
                                                            null
                                                    );
                                                }}
                                                type="file"
                                                id="photo"
                                                name="photo"
                                                accept="image/*"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            />
                                        </div>
                                        {data.photo && (
                                            <img
                                                className="w-32 h-32 mt-4 rounded-lg object-cover"
                                                src={
                                                    typeof data.photo ===
                                                    "string"
                                                        ? data.photo
                                                        : URL.createObjectURL(
                                                              data.photo
                                                          )
                                                }
                                                alt="photo-preview"
                                            />
                                        )}
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <InputLabel
                                            htmlFor="gender"
                                            value="Jenis Kelamin"
                                        />
                                        <div className="flex items-center mt-2">
                                            <div className="flex items-center mr-4">
                                                <input
                                                    checked={
                                                        data.gender === "male"
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "gender",
                                                            e.target.value
                                                        )
                                                    }
                                                    type="radio"
                                                    id="male"
                                                    name="gender"
                                                    value="male"
                                                    className="mr-2"
                                                />
                                                <label
                                                    htmlFor="male"
                                                    className="text-gray-500"
                                                >
                                                    Laki-laki
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    checked={
                                                        data.gender === "female"
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "gender",
                                                            e.target.value
                                                        )
                                                    }
                                                    type="radio"
                                                    id="female"
                                                    name="gender"
                                                    value="female"
                                                    className="mr-2"
                                                />
                                                <label
                                                    htmlFor="female"
                                                    className="text-gray-500"
                                                >
                                                    Perempuan
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <Divider
                                        orientation="left"
                                        className="col-span-2"
                                    >
                                        <span className="text-gray-500">
                                            Data Alumni
                                        </span>
                                    </Divider>

                                    <div className="col-span-2 lg:col-span-1">
                                        <InputLabel
                                            htmlFor="NIS"
                                            value="Nomor Induk Siswa"
                                        />
                                        <TextInput
                                            value={data.NIS}
                                            onChange={(e) =>
                                                setData("NIS", e.target.value)
                                            }
                                            className="w-full"
                                            id="NIS"
                                            name="NIS"
                                            type="text"
                                            required
                                            autoComplete="off"
                                            placeholder="Isi dengan Nomor Induk Siswa anda"
                                        />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <InputLabel
                                            htmlFor="graduation_year"
                                            value="Tahun Lulus"
                                        />
                                        <TextInput
                                            value={data.graduation_year}
                                            onChange={(e) =>
                                                setData(
                                                    "graduation_year",
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-full"
                                            id="graduation_year"
                                            name="graduation_year"
                                            type="number"
                                            required
                                            min={2020}
                                            max={2024}
                                            autoComplete="off"
                                            placeholder="Isi dengan tahun lulus"
                                        />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <InputLabel
                                            htmlFor="major_id"
                                            value="Jurusan"
                                        />
                                        <select
                                            value={data.major_id}
                                            onChange={(e) =>
                                                setData(
                                                    "major_id",
                                                    e.target.value
                                                )
                                            }
                                            id="major_id"
                                            name="major_id"
                                            required
                                            className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        >
                                            <option value="" disabled>
                                                Pilih Program Studi
                                            </option>
                                            {majors.map(
                                                (major: {
                                                    id: number;
                                                    name: string;
                                                }) => (
                                                    <option
                                                        key={major.id}
                                                        value={major.id}
                                                    >
                                                        {major.name}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <InputLabel
                                            htmlFor="status_id"
                                            value="Status Saat Ini"
                                        />
                                        <select
                                            value={data.status_id}
                                            onChange={(e) =>
                                                setData(
                                                    "status_id",
                                                    e.target.value
                                                )
                                            }
                                            id="status_id"
                                            name="status_id"
                                            className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        >
                                            <option value="" disabled>
                                                Status
                                            </option>
                                            {statuses.map(
                                                (status: {
                                                    id: number;
                                                    name: string;
                                                }) => (
                                                    <option
                                                        key={status.id}
                                                        value={status.id}
                                                    >
                                                        {status.name}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1 flex justify-between flex-wrap items-center">
                                        <div>
                                            <InputLabel
                                                htmlFor="document"
                                                value="Curriculum Vitae / Resume"
                                            />
                                            <input
                                                onChange={(e) => {
                                                    setData(
                                                        "document",
                                                        e.target.files?.[0] ||
                                                            null
                                                    );
                                                }}
                                                type="file"
                                                id="document"
                                                name="document"
                                                accept="application/pdf"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            />
                                        </div>
                                        {data.document && (
                                            <a
                                                className="px-2 py-1 rounded bg-blue-500 text-white h-fit"
                                                target="_blank"
                                                href={
                                                    typeof data.document ===
                                                    "string"
                                                        ? data.document
                                                        : URL.createObjectURL(
                                                              data.document
                                                          )
                                                }
                                                rel="noopener noreferrer"
                                            >
                                                Preview
                                            </a>
                                        )}
                                    </div>

                                    <Divider
                                        orientation="left"
                                        className="col-span-2"
                                    >
                                        <span className="text-gray-500">
                                            Data Pekerjaan
                                        </span>
                                    </Divider>

                                    <div className="col-span-2 lg:col-span-1">
                                        <InputLabel
                                            htmlFor="company"
                                            value="Perusahaan / Instansi"
                                        />
                                        <TextInput
                                            value={data.company}
                                            onChange={(e) =>
                                                setData(
                                                    "company",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full"
                                            id="company"
                                            name="company"
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Isi dengan instansi"
                                        />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <InputLabel
                                            htmlFor="company_industry_id"
                                            value="Industri"
                                        />
                                        <select
                                            value={data.company_industry_id}
                                            onChange={(e) =>
                                                setData(
                                                    "company_industry_id",
                                                    e.target.value
                                                )
                                            }
                                            id="company_industry_id"
                                            name="company_industry_id"
                                            className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        >
                                            <option value="" disabled>
                                                Pilih Industri
                                            </option>
                                            {companies.map(
                                                (companyIndustry: {
                                                    id: number;
                                                    name: string;
                                                }) => (
                                                    <option
                                                        key={companyIndustry.id}
                                                        value={
                                                            companyIndustry.id
                                                        }
                                                    >
                                                        {companyIndustry.name}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <InputLabel
                                            htmlFor="position"
                                            value="Jabatan"
                                        />
                                        <TextInput
                                            value={data.position}
                                            onChange={(e) =>
                                                setData(
                                                    "position",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full"
                                            id="position"
                                            name="position"
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Isi dengan jabatan"
                                        />
                                    </div>

                                    <Divider
                                        orientation="left"
                                        className="col-span-2"
                                    >
                                        <span className="text-gray-500">
                                            Data Pendidikan
                                        </span>
                                    </Divider>

                                    <div className="col-span-2 lg:col-span-1">
                                        <InputLabel
                                            htmlFor="university"
                                            value="Universitas"
                                        />
                                        <TextInput
                                            value={data.university}
                                            onChange={(e) =>
                                                setData(
                                                    "university",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full"
                                            id="university"
                                            name="university"
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Isi dengan universitas"
                                        />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <InputLabel
                                            htmlFor="faculty"
                                            value="Fakultas"
                                        />
                                        <TextInput
                                            value={data.faculty}
                                            onChange={(e) =>
                                                setData(
                                                    "faculty",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full"
                                            id="faculty"
                                            name="faculty"
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Isi dengan fakultas"
                                        />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <InputLabel
                                            htmlFor="latest_degree"
                                            value="Gelar Terakhir"
                                        />
                                        <TextInput
                                            value={data.latest_degree}
                                            onChange={(e) =>
                                                setData(
                                                    "latest_degree",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full"
                                            id="latest_degree"
                                            name="latest_degree"
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Isi dengan gelar terakhir"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 flex justify-end">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white !bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
