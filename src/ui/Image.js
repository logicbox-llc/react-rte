/* @flow */

import React, {Component} from 'react';
import type {ContentState} from 'draft-js';

// TODO: Use a more specific type here.
type ReactNode = any;

type Props = {
  children: ReactNode;
  entityKey: string;
  contentState: ContentState,
  className?: string;
};

export default class ImageSpan extends Component {
  props: Props;

  render() {
    let {className} = this.props;
    const entity = this.props.contentState.getEntity(this.props.entityKey);
    const {src, alt} = entity.getData();
    const imageStyle = {
      maxWidth: '100%',
      height: 'auto',
    };

    return (
      <img
        className={className}
        src={src}
        alt={alt}
        style={imageStyle}
      />
    );
  }
}
