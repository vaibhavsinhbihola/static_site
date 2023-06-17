const Testimonials = () => {

    const data = [
        {
            img: "https://pwskills.com/images/landing-page/statistics/books-icon.svg",
            number: "600+",
            title: "Different Courses"
        },
        {
            img: "https://pwskills.com/images/landing-page/statistics/student-icon.svg",
            number: "700000+",
            title: "Students Enrolled"
        },
        {
            img: "https://pwskills.com/images/landing-page/statistics/credit-card-icon.svg",
            number: "12000+",
            title: "Succesfull Transactions"
        }
    ]
    return (
        <section className='h-auto w-100 flex flex-wrap flex-col text-center p-10 bg-black'>
            <div className="moto">
                <div className='text-2xl font-bold text-indigo-800 md:text-3xl'>"Pure HardWork, No Shortcuts!"</div>
                <div className='w-36 h-1 border-b-4 border-yellow-400 mx-auto mt-2 mb-12 rounded-2xl'></div>
            </div>
            <div className="icons w-full flex flex-wrap justify-evenly">
                {
                    data.map((element, i) => (
                        <div key={i} className="w-46 flex flex-col items-center mb-12">
                            <img src={element.img} alt="icon" className='w-44 h-44' />
                            <p className='text-3xl font-bold text-white'>{element.number}</p>
                            <p className='text-3xl font-bold text-gray-500'>{element.title}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Testimonials