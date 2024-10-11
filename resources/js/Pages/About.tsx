import { PageProps } from "@/types";
import Header from "@/Components/Header";
import { Footer } from "@/Components/Footer";

export default function About(props: PageProps) {
    return (
        <div>
            <Header user={props.auth.user} />
            <main>
                <section className="gj qp gr ki">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold mb-4">
                            Tentang Kami
                        </h1>
                        <p className="text-gray-500 mb-8 max-w-3xl text-center">
                            BKK SMKN 1 Bojonegoro adalah platform yang
                            didedikasikan untuk menghubungkan siswa, alumni, dan
                            perusahaan dengan tujuan mempercepat dan mempermudah
                            proses pencarian kerja.
                        </p>
                    </div>
                </section>
                {/* ===== Clients Start ===== */}

                <section className="flex flex-col items-center justify-center hj rp hr ki">
                    <div className="mt-8 w-full container text-justify">
                        <h3 className="text-2xl font-bold">Profil BKK</h3>
                        <div className="w-full h-1 bg-blue-400 my-4"></div>
                        <h4 className="font-semibold text-xl mb-3 mt-5">
                            Latar Belakang
                        </h4>
                        <p>
                            Sekolah Menengah Kejuruan (SMK) sebagai sub sistem
                            pendidikan nasional yang bertanggung jawab dalam
                            penyiapan SDM tingkat menengah yang handal,
                            berorientasi kepada kebutuhan pasar, harus mampu
                            mengembangkan inovasi untuk mempengaruhi perubahan
                            kebutuhan pasar sehingga dapat mewujudkan kepuasan
                            pencari kerja. BKK SMK merupakan salah satu komponen
                            penting dalam mengukur keberhasilan pendidikan di
                            SMK, karena BKK menjadi lembaga yang berperan
                            mengoptimalkan penyaluran tamatan SMK dan sumber
                            informasi untuk pencari kerja. Pemberdayaan BKK SMK
                            merupakan salah satu fungsi dalam manajemen sekolah
                            yaitu sebagai bagian pembinaan terhadap proses
                            pelaksanaan kegiatan BKK SMK yang telah direncanakan
                            dalam upaya mencapai tujuan pendidikan SMK. BKK SMK
                            merupakan salah satu komponen pelaksanaan pendidikan
                            sistem ganda, karena tidak mungkin bisa dilaksanakan
                            proses pembelajaran yang mengarah kepada kompetensi
                            jika tidak ada pasangan industri/usaha kerja,
                            sebagai lingkungan kerja dimana siswa belajar
                            keahlian dan professional serta etos kerja sesuai
                            dengan tuntutan dunia kerja. Bursa Kerja Khusus
                            dibentuk berdasarkan Keputusan Direktur Jendral
                            Pembinaan dan Penempatan Tenaga Kerja dalam Negeri
                            No. KEP.49/D.PPTKDN/VI/2013, Tentang Petunjuk Teknis
                            Bursa Kerja Khusus (BKK). BKK adalah Bursa Kerja di
                            Satuan Pendidikan Menengah yang melakukan kegiatan
                            memberikan informasi pasar kerja, pendaftaran
                            pencari kerja, memberi penyuluhan dan bimbingan
                            jabatan, serta penyaluran dan penempatan pencari
                            kerja.
                        </p>
                        <h4 className="font-semibold text-xl mb-3 mt-5">
                            Nama
                        </h4>
                        <p>
                            Bursa Kerja Khusus (BKK) SIGMA SMK Negeri 1
                            Bojonegoro adalah sebuah lembaga yang dibentuk di
                            Sekolah Menengah Kejuruan Negeri 1 Bojonegoro,
                            sebagai unit pelaksana yang memberikan pelayanan dan
                            informasi lowongan kerja, pelaksana pemasaran,
                            penyaluran dan penempatan tenaga kerja, yang
                            merupakan mitra Dinas Tenaga Kerja dan Transmigrasi.
                        </p>
                        <h4 className="font-semibold text-xl mb-3 mt-5">
                            Logo
                        </h4>
                        <img
                            className="w-1/2 max-w-md"
                            src="/images/bkk-sigma.png"
                            alt="logo-bkk"
                        />
                        <h4 className="font-semibold text-xl mb-3 mt-5">
                            Sekretariat
                        </h4>
                        <p>
                            Bursa Kerja Khusus ini menempati salah satu ruangan
                            yang berukuran 4 x 5 m di SMK Negeri 1 Bojonegoro
                            Jalan Panglima Polim, yang dilengkapi dengan meja
                            kerja, kursi kerja, kursi tamu, almari arsip,
                            Telpon, Komputer, jaringan internet, ruang
                            bimbingan/konsultasi, ruang rapat.
                        </p>
                        <h3 className="text-2xl font-bold mt-8">VISI & MISI</h3>
                        <div className="w-full h-1 bg-blue-400 my-4"></div>
                        <h4 className="font-semibold text-xl mb-3 mt-5">
                            VISI
                        </h4>
                        <p>
                            Terwujudnya penyalur tamatan yang mempunyai
                            kemampuan keahlian professional, berkarakter, dan
                            beretos kerja tinggi, serta mampu berkompetensi
                            kerja di era globalisasi.
                        </p>
                        <h4 className="font-semibold text-xl mb-3 mt-5">
                            MISI
                        </h4>
                        <ul>
                            <li>
                                - Menghasilkan tamatan tingkat menengah yang
                                berkualitas dengan berlandaskan agama, disiplin,
                                dan karakter positif yang tinggi;
                            </li>
                            <li>
                                - Menerapkan manajemen pengelolaan yang mengacu
                                pada standar ISO 9001;2008 dengan melibatkan
                                semua komponen sekolah dan pihak-pihak terkait;
                            </li>
                            <li>
                                - Meningkatkan kerjasama dan menjalin komunikasi
                                yang baik dengan pihak-pihak terkait, terutama
                                Dunia Usaha/ Dunia Industri/ Instansi (DU/DI);
                            </li>
                            <li>
                                - Memberikan pelayanan bagi tamatan dalam
                                mencari lowongan kerja dan rekruitmen tenaga
                                kerja dari DU/DI baik di dalam negeri maupun di
                                luar negeri.
                            </li>
                        </ul>
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
