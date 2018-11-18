import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {IMAGE_DATA_PUTIN} from './data-images';
import {GalleryContainer} from './components/gallery/gallery-container';

const ROOT = document.getElementById('root');

ReactDOM.render(
    <GalleryContainer dataImages={IMAGE_DATA_PUTIN} />,
    ROOT
);

