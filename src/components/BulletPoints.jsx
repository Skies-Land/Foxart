import { bulletPoints } from "../constants"
import { Container } from "./Container"
import { Headings } from "./Headings"

export const BulletPoints = () => {
  return (
    <>
    <Headings title="Foxart" subtitle="How does it work?" />
    <Container>
        <div className="w-full max-w-6xl mx-auto py-5 lg:py-10 space-y-10 lg:space-y-24">
            {bulletPoints.map((bulletPoint) => (
                <div 
                    key={bulletPoint.id} 
                    className={`
                        flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-28
                        ${bulletPoint.id % 2 === 0 ? "flex-row" : "lg:flex-row-reverse"}
                    `}>
                    {/* IMAGES */}
                    <div className="w-full flex justify-center lg:w-7/12">
                        <img 
                            src={bulletPoint.image} 
                            alt={bulletPoint.alt} 
                            width={bulletPoint.width}
                            height={bulletPoint.height}
                            className="px-20 lg:px-0"
                        />
                    </div>
                    {/* TEXT */}
                    <div className=" w-full lg:w-5/12 space-y-5 text-center lg:text-left">
                        <h3 className="h3">{bulletPoint.title}</h3>
                        <p className="body-1 text-n-5">{bulletPoint.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </Container>
    </>
  )
}
