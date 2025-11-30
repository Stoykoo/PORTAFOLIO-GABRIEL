// SOBRE MI

import { aboutText } from "../data/personal";
import SectionTitle from "../components/common/SectionTitle";

export default function AboutSection() {
  return (
    <section className="space-y-4">
      <SectionTitle id="about">Sobre mí</SectionTitle>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3 text-sm text-slate-200">
          {aboutText.left.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
        <div className="space-y-3 text-sm text-slate-300">
          {aboutText.right.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
