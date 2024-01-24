import ServiceCard from "@/components/service/service-card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-teal-400 to-emerald-900 pl-[120px] dark:to-black-950 dark:from-blue-900 dark:bg-gradient-to-tr">
      <div className="flex flex-col p-4">
          
        <h6 className='p-4 my-3 text-base font-medium text-justify text-opacity-100 bg-teal-200 opacity-100 rounded-xl dark:bg-blue-400'>
        Hello, I am <b>Sheikh Mahmudul Hasan Shium</b>. I have recently graduated from the CSE Department at <b>American International University-Bangladesh</b>. I completed my internship at Petspital as a <b>Software Engineer (Intern)</b>. Currently, I am learning Shadcn-ui and API for front-end development. I hope to enrich my knowledge and skills here.
        </h6>
        <h4 className='my-3 text-xl font-semibold tracking-wide'> What I Offer </h4>
        {/**Service Cards */}
        <div className='grid gap-6 overflow-y-scroll lg:grid-cols-2'style={{height:'60vh'}}>
        
          <ServiceCard/>
          <ServiceCard/>
          <Button size="icon" variant="outline">
              <Plus className="w-6 h-6"/>
        </Button>
        </div>
        
      </div>
    </div>
  );
}