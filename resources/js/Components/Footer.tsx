import {
    HomeOutlined,
    InstagramOutlined,
    YoutubeOutlined,
} from "@ant-design/icons";
import { Link } from "@inertiajs/react";

export const Footer = () => {
    return (
        <footer>
            <div className="bb ze ki xn 2xl:ud-px-0">
                {/* Footer Bottom */}
                <div className="bh ch pm tc uf sf yo wf xf ap cg fp bj">
                    <div className="animate_top">
                        <ul className="tc wf gg">
                            <li>
                                <Link
                                    href="https://www.instagram.com/bkk.smkn1bojonegoro"
                                    className="xl text-xs lg:text-base"
                                >
                                    <InstagramOutlined />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://youtube.com/@bkksmkn1bojonegoro169"
                                    className="xl text-xs lg:text-base"
                                >
                                    <YoutubeOutlined />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="http://www.smkn1bojongoro.sch.id"
                                    className="xl text-xs lg:text-base"
                                >
                                    <HomeOutlined />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="animate_top">
                        <ul className="tc wf gg">
                            <li>
                                <Link
                                    href="https://partner-bkk.dexotic.io"
                                    className="xl text-xs lg:text-base"
                                >
                                    Kemitraan Industri
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/article"
                                    className="xl text-xs lg:text-base"
                                >
                                    Artikel dan Berita
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://wa.me/628993872173"
                                    className="xl text-xs lg:text-base"
                                >
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="animate_top">
                        <p className="text-xs lg:text-base">
                            © 2024 BKK SMKN 1 Bojonegoro, Semua hak dilindungi.
                        </p>
                    </div>
                </div>
                {/* Footer Bottom */}
            </div>
        </footer>
    );
};
