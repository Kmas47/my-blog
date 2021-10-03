
export const Card = ({children}): JSX.Element => {
    return (
        <div className='bg-white shadow-md rounded'> 
            {children}
        </div>
    )
}