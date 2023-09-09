import Navbar from "@/components/Navbar"
import Dash from "@/components/Dash"
export default function Dashboard() {
    return (

        <div className={`flex min-h-full flex-col gap-6 items-start justify-center px-6  lg:px-8 dash`}>
            <Navbar/>
            <Dash/>
        </div>
    )
}
