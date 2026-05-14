// ANIMATED BACKGROUND — Floating gradient blobs

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="blob blob-1" style={{ top: "-10%", left: "-5%" }} />
      <div className="blob blob-2" style={{ top: "40%", right: "-10%" }} />
      <div className="blob blob-3" style={{ bottom: "-5%", left: "30%" }} />
    </div>
  );
}
