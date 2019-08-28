import React from 'react';
import resume from '../Static/resume.pdf';

const Resume = ()  => {
    return (
        <div className='resume'>
        
         
            <embed src={resume} type='application/pdf' className='pdf-file' />
            
            
        </div>
        
    )
}

export default Resume;