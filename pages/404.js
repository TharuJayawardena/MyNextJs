import Link from 'next/Link';
import { useEffect } from 'react';
import { useRouter} from 'next/router';

const NotFound = () => {

     const router = useRouter();

//when type the wrong url, after few seconds redirect to the Homepage
    useEffect(() => {
      setTimeout(() => {
        //   router.go(1)
        router.push('/')
      }, 3000)
    }, [])
    return ( <div className="not-found">
        <h1> Ooooops.......</h1>
        <h2> You cannot found anything from this page</h2>

        <p>Go back to the<Link href="/"><a>Homepage</a></Link></p>
    </div> );
}
 
export default NotFound;