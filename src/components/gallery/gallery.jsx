import React, { Component } from 'react';
import {Button,GalleryImages} from '../../elements';
import {func, bool, number, array} from 'prop-types';
import './gallery.css';

const buttonNames = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    RENAME: 'RENAME'
};

export class Gallery extends Component {
    static propTypes = {
        images: array,
        handleAddImage: func,
        disabledAddButton: bool,
        counter: number,
        handleRemoveImage: func,
        disabledRemoveButton: bool,
        handleButtonRef: func
    };

    render () {
        const {
            images,
            handleAddImage,
            disabledAddButton,
            counter,
            handleRemoveImage,
            disabledRemoveButton,
            handleButtonRef
        } = this.props;

        return (
            <div className = 'Gallery'>
                <GalleryImages
                    images={images}
                />
                <div className = 'Gallery__counter'>
                    <div className = 'Gallery__addButton'>
                        <Button
                            onClick = {handleAddImage}
                            disabled = {disabledAddButton}
                            value = {buttonNames.ADD}
                            handleButtonRef={handleButtonRef}
                        />
                    </div>
                    <div className = 'Gallery__count'>
                        <div>
                            {counter}
                        </div>
                    </div>
                    <div className = 'Gallery__removeButton'>
                        <Button
                            onClick = {handleRemoveImage}
                            disabled = {disabledRemoveButton}
                            value = {buttonNames.REMOVE}
                        />
                    </div>
                </div>
            </div>
        );
    }
}