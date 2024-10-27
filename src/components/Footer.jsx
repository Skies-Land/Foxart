import { Container } from "./Container"
import { social } from "../constants"

export const Footer = () => {
  return (
    <div className="bg-n-7 py-6 lg:-12 mt-5 lg:mt-16">
        <Container className="flex flex-col gap-3 lg:flex-row lg:gap-1 items-center justify-between body-3 text-n-3">

            {/* SOCIAL */}
            <div className="flex items-center gap-4">
                {social.map((link) => (
                    <a key={link.id} href={link.link} title={link.alt} target="_blank" rel="noreferrer">
                        <img src={link.ico} alt={link.alt} width={20} height={20} />
                    </a>
                ))}
            </div>

            {/* LEGAL */}
            <div className="space-x-4">
                <a href="#/" target="_blank" rel="noreferrer">
                    Terms of conditions
                </a>
                <a href="#/" target="_blank" rel="noreferrer">
                    Privacy policy
                </a>
            </div>

            {/* COPYRIGHT */}
            <div>© 20xx All right reserved{" "}
                <a href="#/" target="_blank" rel="noreferrer">
                    Jonathan Araldi
                </a>
            </div>
        </Container>
    </div>
  )
}
