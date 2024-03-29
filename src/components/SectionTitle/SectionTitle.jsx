
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center w-3/12 mx-auto my-8'>
            <p className='text-[#FFA300] mb-2 uppercase italic '>--- {subHeading} ---</p>
            <h3 className='text-2xl uppercase border-y-4 p-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;