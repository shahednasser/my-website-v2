import Link from "./Link";
import SocialLinks from "./SocialLinks";

function Footer () {
  return (
    <div className="blue-gradient-background gradient-background-animated text-white py-20 text-center">
      <h2 className="text-3xl lg:text-5xl mb-3">Want to connect?</h2>
      <div className="my-5">
        <p>
          Drop me an email at <Link href="mailto:shahednasser@gmail.com" label="shahednasser@gmail.com" color="green" intensity="200" /> and let's talk some more!
        </p>
        <p>
          You can also find me on social media, where we can talk and discuss development some more!
        </p>
      </div>
      <SocialLinks alignment="center" />
    </div>
  );
}

export default Footer