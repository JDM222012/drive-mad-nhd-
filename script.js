// script.js – Drive Mad iframe launcher
(function () {
  console.log("Drive Mad script.js loaded from jsDelivr");

  // Remove any old overlay if present
  const old = document.getElementById("drivemad-wrapper");
  if (old) old.remove();

  // Wrapper overlay
  const wrap = document.createElement("div");
  wrap.id = "drivemad-wrapper";
  Object.assign(wrap.style, {
    position: "fixed",
    inset: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0.8)",
    zIndex: "999999",
  });

  // Game frame
  const frame = document.createElement("div");
  Object.assign(frame.style, {
    position: "relative",
    width: "80vw",
    height: "80vh",
    background: "#111",
    border: "3px solid #fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 0 25px rgba(255,255,255,0.4)",
  });

  // Title
  const title = document.createElement("h2");
  title.textContent = "Drive Mad – JSDelivr Frame";
  Object.assign(title.style, {
    margin: "10px 0",
    textAlign: "center",
    color: "#fff",
    fontFamily: "sans-serif",
  });
  frame.appendChild(title);

  // Game iframe
  const iframe = document.createElement("iframe");
  iframe.src = "https://u3d.degames.org/35"; // Working game
  Object.assign(iframe.style, {
    width: "100%",
    height: "calc(100% - 50px)",
    border: "none",
  });
  frame.appendChild(iframe);

  // Close button
  const close = document.createElement("button");
  close.textContent = "✖ Close";
  Object.assign(close.style, {
    position: "absolute",
    top: "8px",
    right: "12px",
    background: "crimson",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "6px 10px",
    cursor: "pointer",
    fontSize: "16px",
  });
  close.onclick = () => wrap.remove();
  frame.appendChild(close);

  wrap.appendChild(frame);
  document.body.appendChild(wrap);
})();
