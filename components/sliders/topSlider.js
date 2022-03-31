import SimpleImageSlider from "react-simple-image-slider";

const images = [
  // { url: "https://images.unsplash.com/photo-1501183638710-841dd1904471" },
  // { url: "https://images.unsplash.com/photo-1501183638710-841dd1904471" },
  // { url: "https://images.unsplash.com/photo-1501183638710-841dd1904471" },
  // { url: "https://images.unsplash.com/photo-1501183638710-841dd1904471" },
  // { url: "https://images.unsplash.com/photo-1501183638710-841dd1904471" },
  // { url: "ihttps://images.unsplash.com/photo-1501183638710-841dd1904471" },
  // { url: "https://images.unsplash.com/photo-1501183638710-841dd1904471" },
  { url: "https://img.freepik.com/free-psd/real-estate-house-property-horizontal-banner-facebook-cover-advertising-template_177160-388.jpg?w=1800" },
  { url: "https://img.freepik.com/free-psd/car-rental-sale-horizontal-banner-facebook-cover-advertising-template_177160-681.jpg?w=1800" },
  { url: "https://img.freepik.com/free-psd/car-rental-sale-horizontal-banner-facebook-cover-advertising-template_177160-704.jpg?w=1800" },
  { url: "https://img.freepik.com/free-psd/car-rental-sale-horizontal-banner-facebook-cover-advertising-template_177160-704.jpg?w=1800" },
  { url: "https://img.freepik.com/free-psd/car-rental-sale-horizontal-banner-facebook-cover-advertising-template_177160-704.jpg?w=1800" }
];


export default function Slider() {
  return (
    <div className="w-screen flex align-center justify-center">
      <SimpleImageSlider
        width={1200}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
      />     
    </div>
  );
}