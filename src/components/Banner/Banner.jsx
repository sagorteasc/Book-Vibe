import bannerImg from "../../assets/hero_img.jpg"

const Banner = () => {
    return (
        <div className="hero bg-[#13131305] rounded-3xl my-10 p-7">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="text-center lg:text-start">
                    <h3 className="text-[56px] font-bold mb-10 leading-14">Books to freshen up your bookshelf</h3>
                    <button className="btn btn-success">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;