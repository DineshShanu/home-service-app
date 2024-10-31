import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer>
            <hr />
                <div className="footer_container">
                    <div className="footer_column">
                        <h3 className="font-bold">HOME SERVICE</h3>
                        <Link href="/">Home</Link>
                        <Link href="/mybooking">My Booking</Link>
                    </div>

                    <div className="footer_column">
                        {/* <h3>ONLINE SHOPPING</h3>
                        <a href="#">Men</a>
                        <a href="#">Women</a>
                        <a href="#">Kids</a>
                        <a href="#">Home & Living</a>
                        <a href="#">Beauty</a>
                        <a href="#">Gift Card</a>
                        <a href="#">Myntra Insider</a> */}
                    </div>

                    <div className="footer_column flex">
                        <h3 className="font-bold">CONTACT</h3>
                        <a href="https://dineshshanu.github.io/reactdhtechwebsite/" target="_blank" className="flex gap-1"><FaUserTie className="mt-0.5 text-[15px]" /> About me</a>
                        <a href="#" className="flex gap-1"><FaLocationDot className="mt-0.5 text-[15px]" /> Prakash Nagar, Begumpet, <br />
                            Hyderabad, Telangana  <br />
                            500016, India.</a>
                        <a href="mailto:dineshkumar9890@gmail.com" target="_blank" className="flex gap-1"><MdEmail className="mt-1 text-[15px]" /> dineshkumar9890@gmail.com</a>
                        <a href="#" className="flex gap-1"><BsFillTelephoneFill className="mt-1 text-[15px]" /> +91 7488326935</a>
                    </div>
                </div>
                <hr />

                <center className="copyright flex gap-1 justify-center">
                    <a href="mailto:dineshkumar9890@gmail.com" target="_blank"><BiLogoGmail /></a>
                    <a href="https://www.linkedin.com/in/dineshkumar9890" target="_blank"><FaLinkedin /></a>
                    <a href="https://github.com/DineshShanu" target="_blank"><FaGithub /></a>
                    <a href="https://www.facebook.com/profile.php?id=100002657756592" target="_blank"><FaFacebook /></a>
                    <a href="https://www.instagram.com/dineshkumar98902020/" target="_blank"><PiInstagramLogoFill /></a>
                </center>
            </footer>
        </>
    )
}

export default Footer;