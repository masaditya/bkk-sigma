import { Link } from "@inertiajs/react";
import React from "react";

export const Footer = () => {
    return (
        <footer>
            <div className="bb ze ki xn 2xl:ud-px-0">
                {/* Footer Bottom */}
                <div className="bh ch pm tc uf sf yo wf xf ap cg fp bj">
                    <div className="animate_top">
                        <ul className="tc wf gg">
                            <li>
                                <Link href="/" className="xl">
                                    Kemitraan Industri
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="xl">
                                    Artikel dan Berita
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="xl">
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="animate_top">
                        <p>
                            © 2024 BKK SMKN 1 Bojonegoro, Semua hak dilindungi.
                        </p>
                    </div>
                </div>
                {/* Footer Bottom */}
            </div>
        </footer>
    );
};
