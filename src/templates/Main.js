import React from 'react'
import Head from './Head'
//can't be een from folder ./src/components -  ??? - check
export default class Main extends React.Component {
  render() {
    return (
      <html>
        <Head title='React and CSS Modules' />
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }
}
