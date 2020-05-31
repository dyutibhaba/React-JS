import React from 'react';

const Hello = () => {
    //JSX syntax
    /**
     * JSX vs HTML
     * 1. class -> className
     * 2. for -> htmlFor
     * 3. camelCase property naming convention e.g.,
     *      onclick -> onClick, tabindex -> tabIndex
     * 4. 
     *      
     */
    return (
        <div className='dummyClass'>
            <h1>Hello Bhabadyuti</h1>
        </div>
    )

    //return React.createElement('div', {id:'helloId', className:'helloId'}, React.createElement('h1', null, 'Hello Bhabadyuti'));
};

export default Hello;