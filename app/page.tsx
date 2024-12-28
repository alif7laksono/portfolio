import { fonts } from "@/app/fonts/fonts";

export default function Home() {
  return (
    <section className={` ${fonts.montserrat}`}>
      <div className="prose prose-neutral">
        <p className="animate-slideDown">
          A Bachelor's Degree in Information Systems from Amikom University and
          expertise in front-end development using{" "}
          <span className="font-bold">HTML, CSS, JavaScript,Tailwind CSS</span>{" "}
          and <span className="font-bold">TypeScript</span> , along with
          frameworks like <span className="font-bold">React.Js</span> and{" "}
          <span className="font-bold">Next.Js</span>. I'm skilled in{" "}
          <span className="font-bold"> WordPress</span>, utilizing{" "}
          <span className="font-bold">Elementor Pro </span>
          and <span className="font-bold">WooCommerce</span> to create
          responsive websites.
        </p>
        <p className="mt-10 animate-slideUp">
          With experience as a{" "}
          <span className="font-bold">Contact Center Officer</span> for{" "}
          <span className="font-bold">1.5 years</span>, I bring strong
          communication and problem-solving skills to my work. I'm currently
          seeking an entry-level front-end developer position to further grow my
          career, whether through full-time roles, freelance opportunities, or
          other impactful web projects.
        </p>
      </div>
    </section>
  );
}
