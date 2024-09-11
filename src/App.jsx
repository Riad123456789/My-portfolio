
import Banner from './Banner/Banner'
import Education from './Education/Education'
import Footer from './Footer/Footer'
import Project from './MYPROJECT/Project'
import Navbar1 from './Navbar/Navbar1'
import Services from './Services/Services'
import Skills from './Skills/Skills'
import ContactForm from './contact/ContactForm'



function App() {
  return (
    <div className='bg-[#212428] overflow-hidden' >
      <Navbar1></Navbar1>
      <Banner></Banner>
      <Services></Services>
      <Skills></Skills>
      <Project></Project>
      {/* <Education></Education> */}
      <ContactForm> </ContactForm>
      <Footer></Footer>
    </div>
  )
}

export default App