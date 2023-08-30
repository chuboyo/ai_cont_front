import React, { Component } from 'react'

class AdComponent extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
       }
    
  render() {
    return (
        <div>
        <ins className = "adsbygoogle"
                style = { {display:"inline-block",width:"728px",height:"90px"} }
                data-ad-client = "ca-pub-114234437311277"
                data-ad-slot = "42837282224"></ins>
        </div>)
  }
}

export default AdComponent
