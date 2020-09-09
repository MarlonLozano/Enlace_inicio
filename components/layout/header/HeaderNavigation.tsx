import { Component } from "react";
import Link from "next/link";

export default function HeaderNavigation({ children }: any) {

    return (
        <nav>
            <input type="checkbox" id="check"></input>
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <Link href="/">
                <a className="logo">
                    <img src="/logo.png" alt="Logo" />
                </a>
            </Link>
            <ul>
                {children}
            </ul>
        </nav>
    )
}