import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import teddy from "../assets/teddy.png";
import person from "../assets/person-cutout.png";
import sorryVideo from "../assets/sorry-video.mp4";

const cuteWords = ["pookie", "cutie Yoga", "my sunshine", "sweet heart", "little star"];
const floaters = Array.from({ length: 16 }, (_, index) => index);

function FloatingWorld({ opened }) {
  return (
    <div className="floating-world" aria-hidden="true">
      {floaters.map((item) => {
        const isPerson = item % 5 === 0;
        const isTeddy = item % 3 === 0;

        return (
          <div
            className={`floater floater-${item} ${isPerson ? "person-floater" : ""} ${
              opened ? "awake" : ""
            }`}
            key={item}
          >
            {isPerson ? (
              <img src={person} alt="" />
            ) : isTeddy ? (
              <img src={teddy} alt="" />
            ) : (
              <span>{item % 2 === 0 ? "♡" : "✦"}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function GiftBox({ opened, onOpen }) {
  return (
    <button
      className={`gift ${opened ? "opened" : ""}`}
      type="button"
      onClick={onOpen}
      aria-label="Open the sorry gift"
    >
      <span className="gift-lid">
        <span className="bow bow-left" />
        <span className="bow bow-right" />
        <span className="knot" />
      </span>
      <span className="gift-body">
        <span className="ribbon ribbon-vertical" />
        <span className="ribbon ribbon-horizontal" />
      </span>
      <span className="video-surprise">
        <video src={sorryVideo} autoPlay loop muted playsInline />
      </span>
      <span className="gift-label">tap gift</span>
    </button>
  );
}

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <main className={`app-shell ${opened ? "is-open" : ""}`}>
      <FloatingWorld opened={opened} />

      <section className="hero">
        <div className="copy">
          <p className="eyebrow">for Yoga, my pookie</p>
          <h1>
            Sorry,
            <span>cute Yoga</span>
          </h1>
          <p className="lead">
            I am asking sorry with my whole heart. You are my sweet pookie, my
            soft smile, and I never want my words or actions to make you feel
            hurt.
          </p>

          <div className="word-cloud" aria-label="Cute names for Yoga">
            {cuteWords.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
        </div>

        <div className="stage" aria-label="Animated sorry gift">
          <div className="halo" />
          <img className="main-person" src={person} alt="The person asking sorry" />
          <img className="teddy teddy-one" src={teddy} alt="" />
          <img className="teddy teddy-two" src={teddy} alt="" />
          <GiftBox opened={opened} onOpen={() => setOpened(true)} />
        </div>
      </section>

      <section className={`apology ${opened ? "show" : ""}`} aria-live="polite">
        <div className="apology-card">
          <p className="mini-title">pookie, please listen</p>
          <h2>I am really sorry.</h2>
          <p>
            Yoga, I know a small sorry cannot erase the moment, but I mean this
            from my heart. I am sorry for making you upset, sorry for not being
            careful enough, and sorry for giving your cute heart even one reason
            to feel sad.
          </p>
          <p>
            You are precious to me. I will speak softer, listen better, and care
            for you in the way you deserve. Please forgive me, pookie. I just
            want to see your smile again.
          </p>
          <button className="replay" type="button" onClick={() => setOpened(false)}>
            close gift
          </button>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
