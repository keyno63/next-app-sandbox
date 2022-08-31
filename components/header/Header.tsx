import React from "react";
import {NextPage} from "next";
import Link from "next/link";

const Header: NextPage = () => {
    return (
        <header>
            <div className="logo">
                <h3>名前迷子について</h3>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link href="/">ホーム</Link>
                    </li>
                    <li>
                        <a href="https://keyno63.hatenablog.com/" target="_blank">ブログ</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/maigo_name" target="_blank">Twitter</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default  Header;
