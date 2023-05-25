import { Gallery } from "react-grid-gallery";
import '../index.css'

function GalleryWall() {
    const images = [
        {
            src: '../src/assets/gallery/IMG_3987.JPG',
            width: 600,
            height: 400,
            
        },
        {
            src: '../src/assets/gallery/IMG_3988.JPG',
            width: 300,
            height: 300,
        },
        {
            src: '../src/assets/gallery/IMG_3989.JPG',
            width: 600,
            height: 400,
        },
        {
            src: '../src/assets/gallery/IMG_3993.JPG',
            width: 600,
            height: 400,

        },
        {
            src: '../src/assets/gallery/IMG_3994.JPG',
            width: 600,
            height: 400,

        },
        {
            src: '../src/assets/gallery/IMG_4028.JPG',
            width: 600,
            height: 400,
        },
        {
            src: '../src/assets/gallery/IMG_3998.JPG',
            width: 600,
            height: 400,
        },
        {
            src: '../src/assets/gallery/IMG_4017.JPG',
            width: 600,
            height: 400,
        },
        {
            src: '../src/assets/gallery/IMG_4002.JPG',
            width: 600,
            height: 400,
        },
        {
            src: '../src/assets/gallery/IMG_4007.JPG',
            width: 600,
            height: 400,
        },
        {
            src: '../src/assets/gallery/IMG_4014.JPG',
            width: 600,
            height: 400,
        },
        {
            src: '../src/assets/gallery/IMG_3999.JPG',
            width: 600,
            height: 400,
        },
        {
            src: '../src/assets/gallery/IMG_4017.JPG',
            width: 600,
            height: 400,
        },
        {
            src: '../src/assets/gallery/IMG_4022.JPG',
            width: 600,
            height: 400,
        },
        
        {
            src: '../src/assets/gallery/IMG_4029.JPG',
            width: 250,
            height: 400,
        },
        {
            src: '../src/assets/gallery/IMG_4030.JPG',
            width: 600,
            height: 400,
        },
        {
            src: '../src/assets/gallery/IMG_4046.JPG',
            width: 600,
            height: 400,
        },
        {
            src: '../src/assets/gallery/P1022370.JPG',
            width: 600,
            height: 400,

        },
        {
            src: '../src/assets/gallery/P1022384.JPG',
            width: 600,
            height: 400,

        },
        {
            src: '../src/assets/gallery/P1022388.JPG',
            width: 600,
            height: 400,

        },

    ]
    return(

        <Gallery images={images} thumbnailStyle={{
            filter: "grayscale(1)",
            objectFit: "cover",
            overflow: "hidden",
            height: "100%",
            hover: {
                filter: "grayscale(0)"
            },
        }} />

    )
}

export default GalleryWall;