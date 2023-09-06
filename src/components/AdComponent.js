// import React, { Component } from 'react'

// class AdComponent extends Component {

//     componentDidMount() {
//         (window.adsbygoogle = window.adsbygoogle || []).push({})
//        }
    
//   render() {
//     return (

//         <ins className = "adsbygoogle"
//                 style = {{"display":"block"}}
//                 data-ad-client = "ca-pub-6571563457435209"
//                 data-ad-slot = "3921533405"
//                 data-ad-format="auto"
//                 data-full-width-responsive="true"
//                 >
//         </ins>
//        )
//   }
// }

// export default AdComponent

import React, { useEffect } from "react";

function AdComponent() {
  const loadAds = () => {

    try {

      if (typeof window !== "undefined") {

        (window.adsbygoogle = window.adsbygoogle || []).push({});

      }

    } catch (error) {

      console.log("adsense error", error.message);

    }

  };

  useEffect(() => {

    loadAds();

  }, []);

  return (
    <ins className="adsbygoogle"
	      style={{"display":"block"}}
        data-ad-client="ca-pub-6571563457435209"
        data-ad-slot="3921533405"
        data-ad-format="auto"
        data-full-width-responsive="true"
        data-adtest="on"
    ></ins>
  );
}

export default AdComponent;
