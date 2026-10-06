function CookingCartoon() {
  return (
    <div className="scene" aria-label="Cartoon of a person cooking something exciting">
      <div className="steam steam-one" />
      <div className="steam steam-two" />
      <div className="steam steam-three" />
      <div className="spark spark-one">✦</div>
      <div className="spark spark-two">✦</div>
      <div className="pot">
        <div className="pot-lid"><span /></div>
        <div className="pot-body"><div className="shine" /></div>
        <div className="pot-handle left" />
        <div className="pot-handle right" />
      </div>
      <div className="chef">
        <div className="hat"><span /><span /><span /></div>
        <div className="head">
          <div className="hair" />
          <div className="eye left" />
          <div className="eye right" />
          <div className="smile" />
        </div>
        <div className="body">
          <div className="arm left" />
          <div className="arm right" />
          <div className="button one" />
          <div className="button two" />
        </div>
      </div>
      <div className="counter" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="page">
      <div className="grid" />
      <header className="nav">
        <div className="logo">pankaj<span>.</span></div>
        <div className="pill">COMING SOON</div>
      </header>

      <section className="hero">
        <div className="copy">
          <p className="eyebrow"><span className="dot" /> Something is in the works</p>
          <h1>Pankaj is<br /><em>cooking.</em></h1>
          <p className="lead">
            A little idea went into the kitchen.<br />
            It needs a moment before it’s ready to serve.
          </p>
          <div className="note">STAY CURIOUS&nbsp; • &nbsp;STAY HUNGRY</div>
        </div>
        <CookingCartoon />
      </section>

      <footer>
        <span>© 2026 Pankaj</span>
        <span>Made with way too much coffee ☕</span>
      </footer>
    </main>
  );
}