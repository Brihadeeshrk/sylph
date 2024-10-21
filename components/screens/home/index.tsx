import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>brihadeesh</h1>
            <h2>full stack web and mobile developer</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />

      <FadeIn.Item>
        <p>
          I&apos;m brihadeesh, a passionate developer with experience building
          full stack web applications, mobile apps and backend services from
          Bangalore, India. I spend my free-time learning new concepts, watching
          movies, cycling and on certain weekends, I&apos;m glued to the TV
          watching Formula 1.
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
    </FadeIn.Container>
  );
}
