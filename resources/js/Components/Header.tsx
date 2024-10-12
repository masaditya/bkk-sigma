import { User } from "@/types";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Header = (props: { user?: User; page?: string }) => {
    const [stickyMenu, setStickyMenu] = useState(false);
    const [navigationOpen, setNavigationOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setStickyMenu(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={` hh sm _k dj bl ll g s r vd ya cj`}>
            <div className="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
                <div className="vd to/4 tc wf yf">
                    <Link href="/">
                        <img
                            className="om h-10"
                            src="/images/bkk-sigma.png"
                            alt="Logo Light"
                        />
                    </Link>

                    <button
                        className="po rc"
                        onClick={() => setNavigationOpen(!navigationOpen)}
                    >
                        <span className="rc i pf re pd">
                            <span className="rc i pf re pd">
                                <span className="du-block h q vd yc">
                                    <span
                                        className={`${
                                            !navigationOpen && "ue el"
                                        } rc i r s eh um tg te rd eb ml jl dl`}
                                    ></span>
                                    <span
                                        className={
                                            !navigationOpen
                                                ? "ue qr rc i r s eh um tg te rd eb ml jl fl"
                                                : "rc i r s eh um tg te rd eb ml jl fl"
                                        }
                                    ></span>
                                    <span
                                        className={
                                            !navigationOpen
                                                ? "ue hl rc i r s eh um tg te rd eb ml jl gl"
                                                : "rc i r s eh um tg te rd eb ml jl gl"
                                        }
                                    ></span>
                                </span>
                                <span className="du-block h q vd yc lf">
                                    <span
                                        className={
                                            !navigationOpen
                                                ? "sd dl rc eh um tg ml jl el h na r ve yc"
                                                : "rc eh um tg ml jl el h na r ve yc"
                                        }
                                    ></span>
                                    <span
                                        className={
                                            !navigationOpen
                                                ? "sd rr rc eh um tg ml jl qr h s pa vd rd"
                                                : "rc eh um tg ml jl qr h s pa vd rd"
                                        }
                                    ></span>
                                </span>
                            </span>
                        </span>
                    </button>
                </div>

                <div
                    className={
                        navigationOpen
                            ? "vd wo/4 sd qo f ho oo wf yf d hh rm sr td ud qg ug jc yh"
                            : "vd wo/4 sd qo f ho oo wf yf"
                    }
                >
                    <nav>
                        <ul className="tc _o sf yo cg ep">
                            <li>
                                <Link href="/job" className="xl">
                                    Lowongan
                                </Link>
                            </li>
                            <li>
                                <Link href="/tracer-study" className="xl">
                                    Tracer Study
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="xl">
                                    Tentang BKK
                                </Link>
                            </li>
                            <li>
                                <Link href="/article" className="xl">
                                    Berita
                                </Link>
                            </li>
                            <li>
                                <Link href="/alumni" className="xl">
                                    Alumni
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="tc wf ig pb no">
                        <div
                            className={`${
                                navigationOpen ? "!-ud-visible" : "d"
                            } pc h io pa ra`}
                        ></div>

                        {!props.user ? (
                            <>
                                <Link
                                    href="/login"
                                    className={`${
                                        stickyMenu && ""
                                    } ek pk xl rg dk xf _l gi hi ok ${
                                        props.page === "home" && "hh/[0.15]"
                                    } ${
                                        !navigationOpen &&
                                        "nk hover:!text-gray-700  yl"
                                    }`}
                                >
                                    Masuk
                                </Link>
                                <Link
                                    href="/register"
                                    className={`${
                                        !navigationOpen &&
                                        "lk hover:!text-gray-700"
                                    } gh dk rg tc wf xf _l gi hi sh !text-white ${
                                        props.page === "home" && "hh/[0.15]"
                                    }`}
                                >
                                    Daftar
                                </Link>
                            </>
                        ) : (
                            <Link
                                href="/dashboard"
                                className={`${
                                    !navigationOpen && "lk hover:!text-gray-700"
                                } gh dk rg tc wf xf _l gi hi sh !text-white ${
                                    props.page === "home" && "hh/[0.15]"
                                }`}
                            >
                                Dashboard
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
