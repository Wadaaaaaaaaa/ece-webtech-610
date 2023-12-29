
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/homepage');
  }, []);
}


function Article({titre, children}){

  return(

    <article>
      <h2>{titre}</h2>
      {children}
    </article>
  )

}