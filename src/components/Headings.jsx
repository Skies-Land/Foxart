import { Container } from "./Container"

export const Headings = ({ title, subtitle }) => {
  return (
    <Container className={"py-5 lg:py-10"}>
        <div className="caption-1 text-n-5 text-center uppercase">
            {title}
        </div>
        <h2 className="h2 text-center">
            {subtitle}
        </h2>
    </Container>
  )
}
