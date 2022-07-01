import Link from 'next/link'
import Image from 'next/image';


const Navbar = () => {
    return ( <nav>

        <div className="logo">
            <Image src="/me.jpg" width={180} height={200} alt="Tharu"/>
            <h1> Tharushi Jayawardena </h1>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/new"><a>Qualifications List</a></Link>
        <Link href="/Exams"><a>Exam Results</a></Link>
    </nav> );
}
 
export default Navbar;
