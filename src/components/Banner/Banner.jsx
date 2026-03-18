import bannerImg from "../../assets/hero_img.jpg"

const Banner = () => {
    return (
        <div className="hero bg-[#13131305] rounded-3xl md:my-10 md:p-7">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="text-center lg:text-start">
                    <h3 className="Titles text-4xl font-bold mb-10 leading-10 md:leading-14 lg:text-[56px]">Books to freshen up your bookshelf</h3>
                    <button className="btn btn-success">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;