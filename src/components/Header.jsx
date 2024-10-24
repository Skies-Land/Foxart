import { logoApp } from "../assets/index";
import { Button } from "./Button";
import { Container } from "./Container";
import { ElispeBlueBlur } from "./theme/Header";

export const Header = () => {
  return (
    <div className="border-b border-stroke-1">
      <Container className={"relative bg-n-9"}>
        <div className="relative z-10 flex items-center justify-between py-4 lg:py-6">
          <img src={logoApp} width={104} heigh={32} alt="logo" />
          <Button theme="primary" href="/#">Login</Button>
        </div>
        <ElispeBlueBlur />
      </Container>
    </div>
  )
}
