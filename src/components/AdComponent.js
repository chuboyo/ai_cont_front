import React, { Component } from 'react'

class AdComponent extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
       }
    
  render() {
    return (

        <ins className = "adsbygoogle"
                style = {{"display":"block"}}
                data-ad-client = "ca-pub-6571563457435209"
                data-ad-slot = "3921533405"
                data-ad-format="auto"
                data-full-width-responsive="true"
                >
        </ins>
       )
  }
}

export default AdComponent
