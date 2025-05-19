import { getCategoryName } from '@/app/orm'
import { Metadata } from 'next'

// Define the type of the function params
type MetaProps = {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
  const name = await getCategoryName(params.category) // fetch readable name

  return {
    title: name,
  }
}
   
function Category() {
   return (
       <div>Category Page</div>
   )
}
   
export default Category