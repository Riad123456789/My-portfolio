import Banner from './Banner/Banner'
import Education from './Education/Education'
import Footer from './Footer/Footer'
import Project from './MYPROJECT/Project'
import Navber2 from './Navbar/Navber2'
import Services from './Services/Services'
import Skills from './Skills/Skills'
import ContactForm from './contact/ContactForm'


function App() {
  return (
    <div id='home' className='bg-[#212428] ' >
      <Navber2>
        <Banner></Banner>
        <Services></Services>
        <Skills></Skills>
        <Project></Project>
        <Education></Education>
        <ContactForm> </ContactForm>
        <Footer></Footer>
      </Navber2>
    </div>
  )
}

export default App