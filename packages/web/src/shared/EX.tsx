import * as React from 'react'
import { colors } from 'src/styles'
import Svg, { Line } from 'svgs'

interface Props {
  color: string
  size: number
}

export default class EX extends React.PureComponent<Props> {
  static defaultProps = { color: colors.light }
  render() {
    return (
      <Svg width={this.props.size} height={this.props.size} viewBox="0 0 40 40" fill="none">
        <Line x1="1.35355" y1="0.646447" x2="41.3536" y2="40.6464" stroke={this.props.color} />
        <Line x1="0.646447" y1="40.6464" x2="40.6464" y2="0.646447" stroke={this.props.color} />
      </Svg>
    )
  }
}
