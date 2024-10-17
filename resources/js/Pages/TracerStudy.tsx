import { PageProps, TestimonialType } from "@/types";
import Header from "@/Components/Header";
import { Footer } from "@/Components/Footer";
import { Carousel, Pagination } from "antd";
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

export default function Alumni(props: any) {
    console.log(props);
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
                        <div className="col-span-3 lg:col-span-2 bg-white border border-gray-200 rounded-lg hover:shadow-lg p-6">
                            <GraduateChart />
                            <p className="text-sm text-gray-500 text-center mt-4">
                                Untuk menunjukkan pertumbuhan atau fluktuasi
                                lulusan tiap tahun.
                            </p>
                        </div>
                        <div className="col-span-3 lg:col-span-1 bg-white border border-gray-200 rounded-lg hover:shadow-lg p-6">
                            <JobSectorChart />
                            <p className="text-sm text-gray-500 text-center mt-4">
                                Untuk menunjukkan diversifikasi jurusan lulusan.
                            </p>
                        </div>
                        <div className="col-span-3 lg:col-span-1 bg-white border border-gray-200 rounded-lg hover:shadow-lg p-6">
                            <EmploymentStatusChart />
                            <p className="text-sm text-gray-500 text-center mt-4">
                                Untuk memberikan gambaran cepat mengenai tingkat
                                keberhasilan penyaluran kerja.
                            </p>
                        </div>

                        <div className="col-span-3 lg:col-span-2 bg-white border border-gray-200 rounded-lg hover:shadow-lg p-6">
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
                    <div>
                        <div className="animate_top bb ze rj ki xn vq">
                            <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
                                Apa Kata Alumni?
                            </h2>
                            <p className="bb on/5 wo/5 hq">
                                Dengarkan pengalaman inspiratif dari para alumni
                                yang telah berhasil meraih karier impian mereka
                                melalui BKK Sigma SMKN 1 Bojonegoro. Testimoni
                                mereka membuktikan bahwa dukungan dan bimbingan
                                yang tepat dapat membuka jalan menuju
                                kesuksesan.
                            </p>
                        </div>
                    </div>
                    {/* Section Title End */}
                    <div className="bb ze ki xn ar">
                        <div className="animate_top jb cq">
                            {/* Slider main container */}
                            <Carousel
                                autoplay
                                infinite
                                autoplaySpeed={2000}
                                slidesToShow={1}
                                slidesToScroll={1}
                            >
                                {props.testimonials.map(
                                    (item: TestimonialType, index: number) => (
                                        <div
                                            className="swiper testimonial-01"
                                            key={index}
                                        >
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
                                                                className="bf w-[300px] h-[300px] rounded-full object-cover"
                                                                src={
                                                                    item.user
                                                                        ?.photo
                                                                }
                                                                alt="User"
                                                            />
                                                            <div>
                                                                <img
                                                                    src="/images/icon-quote.svg"
                                                                    alt="Quote"
                                                                />
                                                                <p className="ek ik xj _p kc fb">
                                                                    {item.quote}
                                                                </p>
                                                                <div className="tc yf vf">
                                                                    <div>
                                                                        <span className="rc ek xj kk wm zb">
                                                                            {
                                                                                item
                                                                                    .user
                                                                                    ?.name
                                                                            }
                                                                        </span>
                                                                        <span className="rc">
                                                                            {item
                                                                                .user
                                                                                ?.position ||
                                                                                "-"}
                                                                            @
                                                                            {item
                                                                                .user
                                                                                ?.company ||
                                                                                "-"}
                                                                        </span>
                                                                    </div>
                                                                    <img
                                                                        className="rk h-12"
                                                                        src={
                                                                            item?.company_logo ||
                                                                            "https://alumni.southernleytestateu.edu.ph/wp-content/uploads/2024/04/placeholder-company-30f7247c043cac59226403f669f2afea709784b1f52cc405c90672c3d9ec428a-Jimson-Olaybar.jpg"
                                                                        }
                                                                        alt="Brand"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}
                            </Carousel>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
