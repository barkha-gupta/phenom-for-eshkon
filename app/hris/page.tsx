import Hero from "@/components/Hero";
import { roles } from "@/data/data";
const HRIS = () => {
    return (
      <>
      <Hero role={roles[1]} />
    </>
    )
  }
  
  export default HRIS;