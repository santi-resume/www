import { Section } from "../Section";
export function Hobbies() {
  return (
    <Section title={"Hobbies"} classNames={["hobbies", "foldable"]}>
      <ul>
        <li>
          <p>
            <strong>Gap Year</strong>
          </p>
          <p>
            During part of 2020 (lockdown) I volunteered at remote places like farms. In my spare time, I learnt Javascript.
            As a learning exercise during this process, I {" "}
            <a href="https://misterybodon.github.io/web/">coded a blog</a>.
            Later on, this experience helped me land my first job as a Typescript Developer.
          </p>
        </li>
        <li>
          <p>
            <strong>Time in Nature</strong>
          </p>
          <p>
            I enjoy jogging or walking outdoors.
          </p>
          <p>
            To start the day, I do meditation and breathing exercises, sometimes at home, and sometimes in Nature, depending on the weather.
          </p>
        </li>
        <li>
          <p>
            <strong>Writing</strong>
          </p>
          <p>
            During 2025 I learnt Rust and experimented with ESP32s, and wrote a brief book for beginners about how to set microcontrollers up for programming with Rust (on Unix systems).
          </p>
          <p>
            During 2026, I <a href="santi-mir.github.io/posts"> started a blog</a> on Explainable AI and AI for chemistry.
          </p>
        </li>
      </ul>
    </Section>
  );
}
