import { DeployButton } from "@/components/deploy";
import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

import { CycleText } from "./cycletext";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>brihadeesh r k</h1>
            <CycleText />
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
          im a developer from bangalore, india. i'm currently pursuing my post
          grad in business information technology at rmit, melbourne.
        </p>
        <p>
          im passionate about learning trying and learning new things (mostly
          within tech), i often write about what i learn, and paste those notes
          here
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="guides" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="examples" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
      <DeployButton />
    </FadeIn.Container>
  );
}
