import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://images.unsplash.com/photo-1501183638710-841dd1904471" },
  { url: "https://images.unsplash.com/photo-1501183638710-841dd1904471" },
  { url: "https://images.unsplash.com/photo-1501183638710-841dd1904471" },
  { url: "https://images.unsplash.com/photo-1501183638710-841dd1904471" },
  { url: "https://images.unsplash.com/photo-1501183638710-841dd1904471" }
];

export default function thirdSlider() {
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