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
import { GraduateChart } from "@/Components/charts/GraduateChart";
import JobSectorChart from "@/Components/charts/JobSectorChart";
import EmploymentStatusChart from "@/Components/charts/EmploymentStatusChart";
import FurtherEducationEntrepreneurshipChart from "@/Components/charts/FurtherEducationEntrepreneurshipChart";
import PartnerCompaniesChart from "@/Components/charts/PartnerCompaniesChart";

export default function Alumni(props: PageProps) {
    return (
        <div>
            <Header user={props.auth.user} />
            <main>
                <section className="gj qp gr ki">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold mb-4">
                            Tracer Study Alumni
                        </h1>
                        <p className="text-gray-500 mb-8 max-w-2xl text-center">
                            Data yang kami himpun membantu kami mengevaluasi
                            efektivitas kurikulum dan meningkatkan kerjasama
                            dengan dunia industri demi mempersiapkan lulusan
                            yang lebih siap bersaing di dunia kerja.
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-3 mx-auto container gap-8 rp mt-8">
                        <div className="col-span-2 bg-white border border-gray-200 rounded-lg hover:shadow-lg p-6">
                            <GraduateChart />
                            <p className="text-sm text-gray-500 text-center mt-4">
                                Untuk menunjukkan pertumbuhan atau fluktuasi
                                lulusan tiap tahun.
                            </p>
                        </div>
                        <div className="col-span-1 bg-white border border-gray-200 rounded-lg hover:shadow-lg p-6">
                            <JobSectorChart />
                            <p className="text-sm text-gray-500 text-center mt-4">
                                Untuk menunjukkan diversifikasi bidang pekerjaan
                                lulusan.
                            </p>
                        </div>
                        <div className="col-span-1 bg-white border border-gray-200 rounded-lg hover:shadow-lg p-6">
                            <EmploymentStatusChart />
                            <p className="text-sm text-gray-500 text-center mt-4">
                                Untuk memberikan gambaran cepat mengenai tingkat
                                keberhasilan penyaluran kerja.
                            </p>
                        </div>

                        <div className="col-span-2 bg-white border border-gray-200 rounded-lg hover:shadow-lg p-6">
                            <PartnerCompaniesChart />
                            <p className="text-sm text-gray-500 text-center mt-4">
                                Data statistik yang menunjukkan berapa banyak
                                perusahaan yang bermitra dengan sekolah setiap
                                tahun.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="hj rp hr">
                    {/* Section Title Start */}
                    <div x-data="{ sectionTitle: `Client’s Testimonials`, sectionTitleText: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.`}">
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
                    <div className="bb ze ki xn ar">
                        <div className="animate_top jb cq">
                            {/* Slider main container */}
                            <div className="swiper testimonial-01">
                                {/* Additional required wrapper */}
                                <div className="swiper-wrapper">
                                    {/* Slides */}
                                    <div className="swiper-slide">
                                        <div className="i hh rm sg vk xm bi qj">
                                            {/* Border Shape */}
                                            <span className="rc je md/2 gh xg h q r" />
                                            <span className="rc je md/2 mh yg h q p" />
                                            <div className="tc sf rn tn un zf dp">
                                                <img
                                                    className="bf"
                                                    src="/images/testimonial.png"
                                                    alt="User"
                                                />
                                                <div>
                                                    <img
                                                        src="/images/icon-quote.svg"
                                                        alt="Quote"
                                                    />
                                                    <p className="ek ik xj _p kc fb">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit. In
                                                        dolor diam, feugiat quis
                                                        enim sed, ullamcorper
                                                        semper ligula. Mauris
                                                        consequat justo
                                                        volutpat.
                                                    </p>
                                                    <div className="tc yf vf">
                                                        <div>
                                                            <span className="rc ek xj kk wm zb">
                                                                Devid Smith
                                                            </span>
                                                            <span className="rc">
                                                                Founter
                                                                @democompany
                                                            </span>
                                                        </div>
                                                        <img
                                                            className="rk"
                                                            src="/images/brand-light-02.svg"
                                                            alt="Brand"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* If we need navigation */}
                                <div className="tc wf xf fg jb">
                                    <div className="swiper-button-prev c tc wf xf ie ld rg _g dh pf ml vr hh rm tl zm rl ym">
                                        <svg
                                            className="th lm"
                                            width={14}
                                            height={14}
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3.52366 7.83336L7.99366 12.3034L6.81533 13.4817L0.333663 7.00002L6.81533 0.518357L7.99366 1.69669L3.52366 6.16669L13.667 6.16669L13.667 7.83336L3.52366 7.83336Z"
                                                fill=""
                                            />
                                        </svg>
                                    </div>
                                    <div className="swiper-button-next c tc wf xf ie ld rg _g dh pf ml vr hh rm tl zm rl ym">
                                        <svg
                                            className="th lm"
                                            width={14}
                                            height={14}
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z"
                                                fill=""
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
