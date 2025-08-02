import { Card} from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMapSharp } from "react-icons/io5";
import LogoEmpresa from "@/assets/logo_branca_azul.jpg"



function Footer(){
    const texto = `Oi! Tudo bem? Tenho interesse em saber mais sobre automação. Você poderia me passar mais detalhes?`
    return <>

    <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 flex gap-10">
        <div id="Horario">
            <h4 className="text-xl font-semibold text-foreground  tracking-[2px] mb-4">
                Horário de Atendimento
            </h4>
            <div className="space-y-2 text-muted-foreground">
                <p>Segunda à Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 12h</p>
                <p>Domingo: Fechado</p>
            </div>
        </div>

        <div id="redes" className="flex flex-col gap-5">
            <div>
                <h4 className="text-xl font-semibold text-foreground tracking-[2px]">Redes Sociais</h4>
            </div>
            <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-4 hover:cursor-pointer hover:text-zinc-50 tracking-[1px]" ><FaInstagram></FaInstagram><a href="https://www.instagram.com/pybot.oficial/" target="_blank">Instagram</a></li>
                <li className="flex items-center gap-4 hover:cursor-pointer hover:text-zinc-50 tracking-[1px]" ><FaFacebook></FaFacebook> <a href="#">Facebook</a></li>
                <li className="flex items-center gap-4 hover:cursor-pointer hover:text-zinc-50 tracking-[1px]" ><FaLinkedin></FaLinkedin><a href="#">Linkedin</a></li>
                <li className="flex items-center gap-4 hover:cursor-pointer hover:text-zinc-50 tracking-[1px]" ><MdEmail></MdEmail><a href="mailto:pybot.rpa@gmail.com" target="_blank">Email</a></li>
                <li className="flex items-center gap-4 hover:cursor-pointer hover:text-zinc-50 tracking-[1px]" ><FaWhatsapp /><a href={`https://wa.me/+5585985301701?text=${encodeURIComponent(texto)}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
        </div>
        <div id="Endereços" className="flex flex-col gap-5">
            <div id="titulo" className="text-xl font-semibold text-foreground tracking-[2px]">
                Endereços
            </div>
            <div className="space-y-2 text-muted-foreground">
                <a className="flex justify-center items-center gap-4 over:cursor-pointer hover:text-zinc-50" href="https://www.google.com/maps/place/Silicontech/@-3.7354156,-38.5106929,723m/data=!3m2!1e3!5s0x7c748f57dbf9f35:0xc0efa95d85d84ef8!4m6!3m5!1s0x7c748f57d6b0051:0x9683ad5befcbab8a!8m2!3d-3.735421!4d-38.508118!16s%2Fg%2F1wcxd9f8?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D">
                <IoMapSharp></IoMapSharp> R. Dr. José Lourenço, 1300 - Aldeota, Fortaleza - CE, 60115-281
                </a>
              
            </div>
        </div>
        <div id="lOGO EMPRESA" className="w-[300px]">
             <img src={LogoEmpresa} alt="Logo empresa" />

        </div>
   
    </Card>
     <div id="Direito autorais" className="flex justify-center items-center p-5">
        
        <div className="space-y-2 text-muted-foreground flex flex-col justify-center items-center">
        <p>© 2025 Empresa Pybot. Esta imagem é propriedade intelectual da Pybot.
Reprodução, redistribuição ou uso comercial não autorizados são proibidos.</p>
        <p>Desenvolvido por 💙 Pybot · © 2025 Todos os direitos reservados.</p>
       </div>
    </div>
    </>
}


export default Footer