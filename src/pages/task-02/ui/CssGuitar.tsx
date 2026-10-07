import './pic.css';

export function CssGuitar() {
  return (
    <div
      aria-label="Жёлтая гитара с коричневым грифом, струнами и красным бантом, наклонённая вправо"
      className="css-guitar"
      role="img"
    >
      <div aria-hidden="true" className="css-guitar-instrument">
        <div className="css-guitar-body">
          <span className="css-guitar-waist" />
        </div>
        <div className="css-guitar-neck" />
        <div className="css-guitar-head">
          <span className="css-guitar-pegs" />
        </div>
        <div className="css-guitar-sound-hole" />
        <div className="css-guitar-bridge" />
        <div className="css-guitar-strings" />
        <div className="css-guitar-bow">
          <span className="css-guitar-knot" />
        </div>
      </div>
    </div>
  );
}
