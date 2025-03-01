import Image from "next/image";
import MatchupPage from "./MatchUp";

const HomePage = () => {
    return (
        <>
            <MatchupPage />
            <div className="carousel w-full">
                {/* Slide 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="relative w-full h-64">
                        <Image
                            src="/Images/AFCImage.jpg"
                            alt="Slide 1"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="relative w-full h-64">
                        <Image
                            src="/Images/barca.jfif"
                            alt="Slide 2"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 3 */}
                {/* <div id="slide3" className="carousel-item relative w-full">
                    <div className="relative w-full h-64">
                        <Image
                            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                            alt="Slide 3"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> */}

                {/* Slide 4 */}
                {/* <div id="slide4" className="carousel-item relative w-full">
                    <div className="relative w-full h-64">
                        <Image
                            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                            alt="Slide 4"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default HomePage;
