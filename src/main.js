import "./style.css";

document.querySelector("#app").innerHTML = `
  <div style="padding: 4rem; display: flex; flex-direction: column; gap: 2rem;">

    <p style="font-family: var(--font-body); color: var(--color-muted); 
              font-size: var(--text-label); letter-spacing: var(--tracking-wider); 
              text-transform: uppercase;">
      Design System Preview
    </p>

    <h1 style="font-family: var(--font-display); font-size: var(--text-hero); 
               color: var(--color-white); line-height: 1; font-weight: 300;">
      American Dream
    </h1>

    <h2 style="font-family: var(--font-display); font-size: var(--text-section); 
               color: var(--color-gold); font-weight: 300; font-style: italic;">
      The World's Most Exciting Destination
    </h2>

    <p style="font-family: var(--font-body); color: var(--color-platinum); 
              max-width: 600px; font-weight: 300;">
      Located 10 minutes from New York City, American Dream is 3.3 million 
      square feet of retail, entertainment, dining, and live events — 
      drawing over 40 million visitors annually.
    </p>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <div style="background: var(--color-gold); color: var(--color-void); 
                  padding: 0.75rem 2rem; font-family: var(--font-body); 
                  font-size: var(--text-label); letter-spacing: var(--tracking-wide);
                  text-transform: uppercase; font-weight: 500;">
        Lease Space
      </div>
      <div style="border: 1px solid var(--color-gold); color: var(--color-gold); 
                  padding: 0.75rem 2rem; font-family: var(--font-body);
                  font-size: var(--text-label); letter-spacing: var(--tracking-wide);
                  text-transform: uppercase; font-weight: 500;">
        Partner With Us
      </div>
    </div>

  </div>
`;
