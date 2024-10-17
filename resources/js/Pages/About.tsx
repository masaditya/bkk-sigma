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
                                dan karakter positif yang tinggi
                            </li>
                            <li>
                                - Menerapkan manajemen pengelolaan yang mengacu
                                pada standar ISO 9001;2008 dengan melibatkan
                                semua komponen sekolah dan pihak-pihak terkait
                            </li>
                            <li>
                                - Meningkatkan kerjasama dan menjalin komunikasi
                                yang baik dengan pihak-pihak terkait, terutama
                                Dunia Usaha/ Dunia Industri/ Instansi (DU/DI)
                            </li>
                            <li>
                                - Memberikan pelayanan bagi tamatan dalam
                                mencari lowongan kerja dan rekruitmen tenaga
                                kerja dari DU/DI baik di dalam negeri maupun di
                                luar negeri.
                            </li>
                        </ul>
                        <h4 className="font-semibold text-xl mb-3 mt-5">
                            TUJUAN
                        </h4>
                        <ul>
                            <li>
                                - Sebagai wadah dalam mempertemukan tamatan
                                dengan pencari kerja
                            </li>
                            <li>
                                - Memberikan layanan kepada tamatan sesuai
                                dengan tugas dan fungsi masing-masing seksi yang
                                ada dalam BKK.
                            </li>
                            <li>
                                - Sebagai wadah dalam pelatihan tamatan yang
                                sesuai dengan permintaan pencari kerja
                            </li>
                            <li>
                                - Sebagai wadah untuk menanamkan jiwa wirausaha
                                bagi tamatan melalui pelatihan.
                            </li>
                            <li>
                                - Memperoleh Link and Match antar sekolah dengan
                                dunia kerja
                            </li>
                            <li>
                                - Memfasilitasi lulusan baik dari SMK Negeri 1
                                Bojonegoro yang siap latih untuk mendapatkan
                                kerja yang layak dan sesuai dengan bidang
                                kejuruannya
                            </li>
                        </ul>
                        <h4 className="font-semibold text-xl mb-3 mt-5">
                            RUANG LINGKUP KEGIATAN
                        </h4>
                        <ul>
                            <li>
                                1. Penyusunan data base siswa lulusan SMK
                                pencari kerja dan perusahaan pencari tenaga
                                kerja dan penelusuran tamatan siswa SMK
                            </li>
                            <li>
                                2. Menjaring informasi tentang pasar kerja
                                melalui iklan di media massa, internet,
                                kunjungan ke dunia usaha (industri) maupun
                                kerjasama dengan lembaga penyalur tenaga kerja
                                dan Depnakertrans.
                            </li>
                            <li>
                                3. Membuat leaflet informasi dan pemasaran
                                lulusan SMK yang dikirim ke dunia usaha/industri
                                yang terkait Depnakertrans.
                            </li>
                            <li>
                                4. Penyaluran calon tenaga kerja lulusan SMK ke
                                dunia usaha dan industry
                            </li>
                            <li>
                                5. Melakukan proses tindak lanjut hasil
                                pengiriman dan penempatan tenaga kerja melalui
                                kegiatan penjajakan dan verifikasi
                            </li>
                            <li>
                                6. Mengadakan program pelatihan ketrampilan
                                tambahan/khusus bagi siswa dan lulusan SMK
                                disesuaikan dengan bidang keahlian yang
                                diperlukan.
                            </li>
                            <li>
                                7. Mengadakan program bimbingan menghadapi
                                tahapan proses penerimaan siswa dalam suatu
                                pekerjaan ( wawancara, psikotest )
                            </li>
                            <li>
                                8. Memberikan informasi kepada para ALUMNI
                                ataupun para lulusan yang membutuhkan informasi
                                tentang lowongan kerja.
                            </li>
                        </ul>
                        <h4 className="font-semibold text-xl mb-3 mt-5">
                            PENYALURAN DAN PENEMPATAN TAMATAN
                        </h4>
                        <ul>
                            <li>
                                Adapun pelaksanaan penyaluran dan penempatan
                                tamatan yang dapat dilakukan BKK SMK adalah
                                sebagai berikut:
                            </li>
                            <li>
                                1. Menindak lanjuti kerjasama dengan industri
                                pasangan yang telah menjadi mitra kerja dengan
                                BKK sekolah.
                            </li>
                            <li>
                                2. Melakukan penelusuran alumni dan dimasukkan
                                ke dalam database sekolah.
                            </li>
                            <li>
                                3. Merangkul pengurus dan pengelola Sekolah yang
                                peduli dengan penempatan tenaga kerja dari
                                alumni.
                            </li>
                            <li>
                                4. Membuat website khusus BKK yang selalu up to
                                date yang dapat di Link dengan situs-situs JOB
                                CARRIER.
                            </li>
                            <li>
                                5. Menanamkan jiwa enterpreunership kepada siswa
                                melalui pelatihan ketrampilan untuk menjadi
                                seorang wirausaha (enterpreuneur).
                            </li>
                        </ul>
                        <h4 className="font-semibold text-xl mb-3 mt-5">
                            KEGIATAN BURSA KERJA KHUSUS
                        </h4>
                        <ol>
                            <li>
                                1. Merencanakan program kerja hubungan industri
                                setiap program studi
                                <ul className="ml-3">
                                    <li>
                                        • Mengadakan pertemuan dengan Kajur
                                        tentang penempatan siswa-siswi prakrin
                                    </li>
                                    <li>
                                        • Mengadakan koordinasi dengan Ketua
                                        Program studi tentang penempatan
                                        siswa-siswi prakrin
                                    </li>
                                    <li>
                                        • Mengadakan koordinasi dengan Ketua
                                        Program Studi tentang guru monitoring.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                2. Melakukan proses negosiasi dengan DU/DI dan
                                pemerintah sebagai mitra dalam penempatan
                                siswa-siswi prakrin.
                            </li>
                            <li>
                                3. Menjalin kerjasama (MOU) dengan DU/DI dalam :
                                <ul className="ml-3">
                                    <li>• Singkronisasi Kurikulum</li>
                                    <li>• Pelatihan</li>
                                    <li>• Penempatan tamatan</li>
                                </ul>
                            </li>
                            <li>4. Pemetaan DU/DI</li>
                            <li>
                                5. Menjalin kerjasama dengan Depnakertrans
                                tentang pelatihan (Magang) dan penempatan
                                tamatan.
                            </li>
                            <li>6. Membentuk Majelis Sekolah</li>
                            <li>
                                7. Membuat database penelusuran tamatan baik
                                yang sudah bekerja maupun belum bekerja.
                            </li>
                            <li>8. Membentuk Ikatan alumni.</li>
                            <li>9. Membuat mading informasi lowongan kerja.</li>
                            <li>10. Membuat website khusus BKK</li>
                            <li>11. Membuat Laporan Kegiatan</li>
                            <li>12. Monitoring dan Evaluasi</li>
                        </ol>
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
