import React, { Component } from 'react';
import {Gallery} from './gallery';

export class GalleryContainer extends Component {
    state = {
        images: []
    };

    componentDidMount() {
        this.buttonAddRef.focus();
    };

    buttonAddRef = null;

    handleButtonRef = (ref) => {
        this.buttonAddRef = ref;
    };

    handleAddImage = () => {
        const {images} = this.state;

        this.setState({
            images: [
                ...images,
                this.props.dataImages[images.length]
            ]
        })
    };

    handleRemoveImage = () => {
        this.setState({
            images: this.state.images.slice(0,-1)
        })
    };

    render () {
        const {images} = this.state;
        const counter = images.length;
        const maxCount =  counter === 9 ;
        const minCount =  counter === 0 ;

        return (
            <Gallery
                images = {images}
                counter = {counter}
                handleAddImage = {this.handleAddImage}
                handleRemoveImage = {this.handleRemoveImage}
                disabledAddButton = {maxCount}
                disabledRemoveButton = {minCount}
                handleButtonRef = {this.handleButtonRef}
                handleInputRef = {this.handleInputRef}
            />
        );
    }
}