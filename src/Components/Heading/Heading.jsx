import React from 'react'

const Heading = ({ text, level }) => {

    const prepareHeading = () => {
        switch (level) {
            case '1':
                return <h1 className='text-center my-5'>{text}</h1>
            case '2':
                return <h2 className='text-center my-3'>{text}</h2>
            case '3':
                return <h3 className='text-center my-3'>{text}</h3>
        }
    }

    return (
        <div>{prepareHeading()}</div>
    )
}

export default Heading