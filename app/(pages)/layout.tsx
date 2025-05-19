import { Breadcrumbs } from "./components"

type Props = {
    children:React.ReactNode
}
   
function PagesLayout({children}: Props) {
   return (
       <div className="w-full px-4 lg:px-24"><hr/><Breadcrumbs />{ children}</div>
   )
}
   
export default PagesLayout