import Cards from './Cards';


function Tours ({tours, removeTour}) {
    return(
        <div className="lg:w-[820px] md:w-[700px] w-[400px] flex flex-col">
            <div className="text-center flex self-center justify-center text-4xl w-96 font-extrabold text-pink-800 m-10 mb-7 border-dashed border-4 border-pink-800 rounded-lg p-3">Plan With Love</div>
            <div className="flex flex-wrap justify-center">
                {
                    tours.map((tour)=>{
                        return <Cards {...tour} removeTour={removeTour}></Cards>
                    })
                }
            </div>


        </div>
    )
};

export default Tours;