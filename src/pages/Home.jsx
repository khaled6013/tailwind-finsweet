import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import Work from "../components/Work"
import Project from "../components/Project"
import Features from "../components/Features"
import Clients from "../components/Clients"

const Home = () => {
  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Work></Work>
     <Project></Project>
     <Features></Features>
     <Clients></Clients>
    </>
  )
}

export default Home