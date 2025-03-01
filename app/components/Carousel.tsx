import Image from "next/image";

const Carousel = () => {
    return (
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
                        src="/Images/CAFimage.jfif"
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
            <div id="slide3" className="carousel-item relative w-full">
                <div className="relative w-full h-64">
                    <Image
                        src="/images/UCLimage.jfif"
                        alt="Slide 3"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <div className="relative w-full h-64">
                    <Image
                        src="/images/CONCACAFimage.jfif"
                        alt="Slide 4"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;