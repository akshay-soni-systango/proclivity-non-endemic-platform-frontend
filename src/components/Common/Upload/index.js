import React from 'react'
import Input from '../Input';
import uploadIcon from '../../../assets/Icons/uploadIcon.svg';
import './style.scss'

const UploadInput = () => {
  return (
      <div className="drag-area">
        <img src={uploadIcon} alt="Loading..." className="icon" />
        <button>Click to Upload<span>or drag and drop</span></button>
        <p className='sub-heading'>SVG, PNG, JPG or GIF (max. 800x400px)</p>
        <Input type="file" hidden />
      </div>
  );
};
export default UploadInput;
