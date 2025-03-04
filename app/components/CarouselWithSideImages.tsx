import Image from "next/image";
import Carousel from "./Carousel";

const CarouselWithSideImages = () => {
    return (
        <div className="flex items-center justify-center space-x-4 w-full">
            {/* Left Image */}
            <div className="relative flex-[1] h-64">
                <Image
                    src="/Images/BallTower.png"
                    alt="Left Image"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>

            {/* Carousel in the Middle */}
            <div className="flex-[18]">
                <Carousel />
            </div>

            {/* Right Image */}
            <div className="relative flex-[1] h-64">
                <Image
                    src="/images/BallTower.png"
                    alt="Right Image"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div> 
        </div>
    );
};

export default CarouselWithSideImages;
