import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import PortfolioItem from './PortfolioItem';
import PortfolioModal from './PortfolioModal';
import { PortfolioItem as PortfolioItemType} from '../types';


interface PortfolioListProps {
    items: PortfolioItemType[];
}

const PortfolioList: React.FC<PortfolioListProps> = ({ items }) => {
    const [activeModal, setActiveModal] = useState<number | null>(null);

    const handleViewMore = (id: number) => {
        setActiveModal(id);
    };

    const handleCloseModal = () => {
        setActiveModal(null);
    };

    return (
        <div className="portfolio__container container swiper-container">
            {/* <Swiper spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }}>
                {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <PortfolioItem
                            imgSrc={item.imgSrc}
                            title={item.title}
                            description={item.description}
                            githubLink={item.githubLink}
                            onViewMore={() => handleViewMore(item.id)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper> */}

            {/* Swiper Navigation Buttons */}
            <div className="swiper-button-next">
                <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
            </div>
            <div className="swiper-button-prev">
                <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
            </div>
            <div className="swiper-pagination"></div>

            {/* Modal Content */}
            {items.map((item) => (
                activeModal === item.id && (
                    <PortfolioModal
                        key={item.id}
                        title={item.title}
                        modalContent={item.modalContent}
                        onClose={handleCloseModal}
                    />
                )
            ))}
        </div>
    );
};

export default PortfolioList;
