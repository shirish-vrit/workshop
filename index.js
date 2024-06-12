import React from "react";

function LightBulb() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    setOn(true);

    return () => {
      setOn(false);
    };
  }, []);

  return <div>Light Bulb is {on}</div>;
}

export default LightBulb;
