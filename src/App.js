import { useRef } from "react";
import moon from "./moon.png";
import land from "./land.png";
import cat from "./cat.gif";
import cat1 from "./cat1.png";
import cat2 from "./cat2.png";
import cat3 from "./cat3.png";
import cat4 from "./cat4.png";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: -.5, end: 4 }}
          style={{ textAlign: "center" }}
        >
          <div style={{ position: "relative", top: "300px" }}>
            <img src={cat} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.5}
          speed={1}
          // onClick={() => ref.current.scrollTo(0)}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{position: "relative", top: "60px"}}>
              <img src={cat1} alt="" style={{width: "200px"}} />
              <img src={cat2} alt="" style={{width: "200px"}} />
              <img src={cat3} alt="" style={{width: "200px"}} />
              <img src={cat4} alt="" style={{width: "200px"}} />
            </div>
            <h2
              style={{
                textAlign: "end",
                marginRight: "300px",
                fontSize: "100px",
                textShadow: "0 0 10px 0px black",
                color: "whitesmoke",
              }}
            >
              Hi Guys!
            </h2>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
