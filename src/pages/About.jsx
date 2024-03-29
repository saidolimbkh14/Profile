import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
     <Head>
        <title>My hobbies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profile.png" />
      </Head>
    <div className="about2">
    <div className="nav_parent">
                <nav>
                    <div className="nav_left">
                        <Link href={"/"} ><h1>Saidolim Bakhodirov</h1></Link>
                    </div>
                    <div className="nav_right">
                        <Link href={"/Hobbi"} ><p className='nav_p1'>Hobbies</p></Link>
                        <Link href={"/Skill"} ><p>My skills</p></Link>
                    </div>
                </nav>
                <div className="nav_bottom">
                    <h1>Here are all info <br /> about me</h1>
                    <p>Click on the button below</p>
                    <Link href={"https://myresume.ru/resume/qEizXgPe2jG/"} ><button  className='bbb'>All abut me</button></Link>
                </div>
            </div>
    </div>
    </>
  )
}

export default About