import InputGroup from "@/components/InputGroup"
import Axios from "axios";
import Link from "next/link"
import { useRouter } from "next/router";
import React, {FormEvent, useState} from "react"
export default function login() {
    return (
        <article className="login_wrap">
            <h1>
             
            </h1>
            <h2>로그인</h2>
            <form className="input_wrap">
               
            </form>
            <Link>네이버 로그인</Link>
            <Link>카카오 로그인</Link>
            <Link>구글 로그인</Link>
        </article>
    )
  }