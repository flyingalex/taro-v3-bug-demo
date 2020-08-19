import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.css'

export default class Index extends Component {
  render () {
    const content = '<p style = "font-size=35px;color=grey"><img src="https://i.picsum.photos/id/661/300/500.jpg?hmac=moOSuJ4Pwk8Ko5-r-u_50KQMjG8DPDnevqhxK5AvSfc" />  With its unique classic Scandinavian feel condensed into a design, the Nerd Chair won the Muuto Talent Award in 2011.</p>';
    return (
      <View className='index'>
        <View dangerouslySetInnerHTML={{ __html: content }}></View>
      </View>
    )
  }
}
