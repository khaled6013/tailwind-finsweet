import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import Work from "../components/Work"
import Project from "../components/Project"
import Features from "../components/Features"
import Clients from "../components/Clients"
import Faq from "../components/Faq"

const Home = () => {
  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Work></Work>
     <Project></Project>
     <Features></Features>
     <Clients></Clients>
     <Faq></Faq>
    </>
  )
}

export default Home