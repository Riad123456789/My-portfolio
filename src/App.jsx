
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import Project from './MYPROJECT/Project'
import Navbar1 from './Navbar/Navbar1'
import Services from './Services/Services'
import Skills from './Skills/Skills'
import ContactForm from './contact/ContactForm'



function App() {
  return (
    <div className='bg-[#212428]' >
      <Navbar1></Navbar1>
      <Banner></Banner>
      <Services></Services>
      <Skills></Skills>
      <Project></Project>
      <ContactForm> </ContactForm>
      <Footer></Footer>
    </div>
  )
}

export default App