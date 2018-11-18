import React, { Component } from 'react';
import {array} from 'prop-types';
import './gallery-images.css';


export class GalleryImages extends Component {
    static propTypes = {
        images: array
    };

    render () {
           return (
               <div className = 'Gallery__images'>
                   {this.props.images.map((image, id) => (
                       <div className='Gallery__imageBox'
                            key = {id}
                       >
                           <div className = 'Images'>
                               <img
                                   className='Images__item'
                                   src = {image.src}
                                   alt = {image.alt}
                               />
                           </div>
                       </div>
                   ))}
               </div>
           );
    };
}
