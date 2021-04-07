import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-ut-shade--t20">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row justify-between items-center">

            <img src="/assets/logos/utexas-primary-horizontal-logo.svg"/>

          <div className="flex flex-col lg:flex-row justify-between items-center lg:w-1/3">
            <ul>
              <li><a href="https://utexas.edu/" className="hover:underline">UT Home</a></li>
              <li><a href="https://www.utexas.edu/site-policies" className="hover:underline">Site Policies</a></li>
              <li><a href="https://cio.utexas.edu/policies/web-privacy" className="hover:underline">Web Privacy Policy</a></li>
            </ul>
            <ul>
              <li><a href="https://emergency.utexas.edu/" className="hover:underline">Emergency Information</a></li>
              <li><a href="http://www.utexas.edu/web-accessibility-policy" className="hover:underline">Web Accessibility Policy</a></li>
              <li><a href="https://get.adobe.com/reader/" className="hover:underline">Adobe Reader</a></li>
            </ul>
          </div>
        </div>
        <div className="py-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm italic">© The University of Texas at Austin {(new Date().getFullYear())}</p>
        </div>
      </Container>
    </footer>
  )
}
