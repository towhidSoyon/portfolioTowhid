
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 flex flex-row items-center justify-center space-y-6">
      

      <div className="flex space-x-6">
        <a
          href="https://www.linkedin.com/in/towhid-soyon/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:opacity-80 transition-opacity"
        >
          <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/CodeVinayak/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:opacity-80 transition-opacity"
        >
          <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak+I+found+your+contact+through+portfolio+site.%0A%0A"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="hover:opacity-80 transition-opacity"
        >
          <img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
        </a>
      </div>
    </footer>
  )
}
