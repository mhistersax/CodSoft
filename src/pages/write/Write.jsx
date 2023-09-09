import React from 'react';
import './write.css'

const Write = () => {
    return (
        <div className="write">
           <form action="" className='writeForm' >
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i class="fa-solid fa-plus writeIcon"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}  />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus />
                </div>

                <div className="writeFormGroup">
                    <textarea
                     placeholder='Write new blog here . . .' 
                     type='text' 
                     className='writeInput writeText'>
                     </textarea>
                </div>
                <button className='writeSubmit'>Add New Blog</button>
           </form>
        </div>
    )
}



export default Write;