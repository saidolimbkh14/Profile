import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { TbNumber } from "react-icons/tb";



const Nav = () => {
    return (
        <>
            <Head>
                <title>Saidolim Bakhodirov</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/profile.png" />
            </Head>
            <div className="nav_parent">
                <nav>
                    <div className="nav_left">
                        <Link href={"/"} ><h1>Saidolim Bakhodirov</h1></Link>
                    </div>
                    <div className="nav_right">
                        <Link href={"/Hobbi"} ><p className='nav_p1'>Hobbies</p></Link>
                        <Link href={"/About"} ><p>About </p></Link>
                        <Link href={"/Skill"} ><p>My skills</p></Link>
                    </div>
                </nav>
                <div className="nav_bottom">
                    <h1>Hi! It is my   official <br /> profile</h1>
                    <p>Here you can find all  <br /> of my skills and knowlages, go to next page below  </p>
                    <a className='aref' href="#me">about me</a>
                </div>
            </div>




            <div className="card_parent2">
                <div className="card">
                    <Link href={"https://www.instagram.com/sbs.ma1n?igsh=MWhmcHV5M2xObTFo&utm_source=qr"} ><FaSquareInstagram className='tg'  size={"35"} /></Link>
                    <Link href={"https://www.instagram.com/sbs.ma1n?igsh=MWhmcHV5M2xObTFo&utm_source=qr"} > <h1>Instagram</h1></Link>
                    <Link href={"https://www.instagram.com/sbs.ma1n?igsh=MWhmcHV5M2xObTFo&utm_source=qr"} ><p>this is my instagram  <br /> profile </p></Link>
                </div>
                <div className="card">
                    <Link className='tg' href={"https://web.telegram.org/k/"}><FaTelegram  size={"35"} /></Link>
                    <Link className='tg' href={"https://web.telegram.org/k/"}><h1>Telegram</h1></Link>
                    <Link className='tg' href={"https://web.telegram.org/k/"}><p>this is my  telegram<br /> profile </p></Link>
                </div>
                <div className="card">
                    <Link href={"mailto:saidolimbkh1@gmail.com"} ><AiOutlineMail className='tg'   size={"35"} /></Link>
                    <Link href={"mailto:saidolimbkh1@gmail.com"} > <h1>email.address</h1></Link>
                    <Link href={"mailto:saidolimbkh1@gmail.com"} ><p>this is my email <br /> adres </p></Link>
                </div>
                <div className="card">
                <TbNumber className='tg'   size={"35"} />
                    <h1>Number</h1>
                    <p>+998 (91) 001 90 06 <br />
                    this is extra  !!</p>
                </div>
            </div>











            <div className="about_p">

                <div className="about">
                    <div className="about_top">
                        <h1>
                            What about me ?
                        </h1>
                    </div>

                    <div className="about_bottom">
                        <h3>My name is Saidolim i`m 14 <br />
                            i`m from Uzbekistan, now i live in Tashkent <br />
                            the capital of Uzbekistan.I`m frontend developer,
                            <br /> My english level is C1 <br />
                            i want to be buissnesman and own a number of <br />
                            companies.I`m muslim!! <br />
                            I have big experience of p2p and cripto mining
                            <br /> I know how to work on dropshipping
                            <br /> i don`t waste my time on watching reels or <br />
                            shorts on websites <br />
                            i want work and become a billonere</h3>
                        <h3>So that`s all</h3>
                    </div>
                </div>
                <div id='me' className="about_right">
                    <img src="https://e0.pxfuel.com/wallpapers/261/55/desktop-wallpaper-earth-at-night-view-from-space-3840%C3%972160.jpg" alt="" />
                </div>
            </div>

        </>
    );
}

export default Nav;
