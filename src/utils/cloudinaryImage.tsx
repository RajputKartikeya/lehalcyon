import { Cloudinary, Transformation } from "cloudinary-core";
import { useState, useEffect } from "react";

interface CloudinaryConfig {
  cloud_name: string;
  secure: boolean;
}

interface CloudinaryImageProps {
  imagePath: string;
  alt: string;
  className?: string;
  priority?: boolean;
  quality?: number;
  format?: string;
  defaultTransformations?: Transformation.Options;
}

interface ImageUrls {
  desktop: string;
  tablet: string;
  mobile: string;
  placeholder: string;
}

const cloudinaryConfig: CloudinaryConfig = {
  cloud_name: "dsbipg6bq",
  secure: true,
};

const cloudinary = new Cloudinary(cloudinaryConfig);

const DEFAULT_TRANSFORMATIONS: Transformation.Options = {
  fetch_format: "auto",
  quality: "auto",
};

export function CloudinaryImage({
  imagePath,
  alt,
  className = "",
  priority = false,
  quality,
  format,
  defaultTransformations = DEFAULT_TRANSFORMATIONS,
}: CloudinaryImageProps) {
  const [imageUrls, setImageUrls] = useState<ImageUrls | null>(null);

  useEffect(() => {
    const buildTransformation = (
      width: number,
      extraTransformations: Transformation.Options = {}
    ): Transformation.Options => {
      return {
        ...defaultTransformations,
        width,
        crop: "fill", // Add this to ensure images fill their container
        ...extraTransformations,
        ...(quality && { quality }),
        ...(format && { fetch_format: format }),
      };
    };

    const urls: ImageUrls = {
      desktop: cloudinary.url(imagePath, {
        transformation: [buildTransformation(1920)],
      }),
      tablet: cloudinary.url(imagePath, {
        transformation: [buildTransformation(1024)],
      }),
      mobile: cloudinary.url(imagePath, {
        transformation: [
          buildTransformation(640, {
            crop: "fill", // Ensure mobile images fill width
            gravity: "center", // Center the crop
          }),
        ],
      }),
      placeholder: cloudinary.url(imagePath, {
        transformation: [
          buildTransformation(20, {
            quality: 30,
            effect: "blur:1000",
          }),
        ],
      }),
    };

    setImageUrls(urls);
  }, [imagePath, quality, format, defaultTransformations]);

  if (!imageUrls) return null;

  return (
    <div className={`relative w-full h-full ${className}`}>
      <picture className="w-full h-full">
        <source
          media="(min-width: 1024px)"
          srcSet={imageUrls.desktop}
          type="image/webp"
        />
        <source
          media="(min-width: 640px)"
          srcSet={imageUrls.tablet}
          type="image/webp"
        />
        <img
          src={imageUrls.mobile}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className="w-full h-full object-cover"
          style={{
            backgroundImage: `url(${imageUrls.placeholder})`,
            backgroundSize: "cover",
          }}
        />
      </picture>
    </div>
  );
}
