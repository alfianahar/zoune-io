import React from 'react';
import './ImageBox.css';


const ImageBox = ({ imageURL, box }) => {
    const addStyle = imageURL ? 'py-3' : '';
    return (
        <div className='flex justify-center w-full max-w-lg md:w-10/12 md:max-w-full lg:w-7/12 lg:max-w-full'>
            <div className={`w-full rounded-md bg-blulight bg-opacity-10 flex flex-col justify-center items-center rounded-b-lg shadow-md ${addStyle}`}>
                <div className='relative w-11/12'>
                    <img className='w-full rounded-md' src={imageURL} alt=""/>
                    {box.map(boxes => {
                        return (<div 
                            key={boxes.id}
                            id={boxes.id}
                            className='bounding-box' 
                            style={{top: boxes.tRow, right: boxes.rCol, bottom: boxes.bRow, left: boxes.lCol}}>
                        </div>);
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ImageBox;