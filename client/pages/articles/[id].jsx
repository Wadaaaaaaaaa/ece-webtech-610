import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return <p>Article #{router.query.id}</p>
}