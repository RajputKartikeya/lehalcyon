import { Cloudinary, Transformation } from "cloudinary-core";
import { useState, useEffect } from "react";

// Define our configuration interfaces
interface CloudinaryConfig {
  cloud_name: string;
  secure: boolean;
}

// Define the component props interface with the correct transformation type
interface CloudinaryImageProps {
  imagePath: string;
  alt: string;
  className?: string;
  priority?: boolean;
  quality?: number;
  format?: string;
  // Now using the correct Transformation type
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

// Define default transformations using the correct type
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
    // Helper function that builds our transformation options
    const buildTransformation = (
      width: number,
      extraTransformations: Transformation.Options = {}
    ): Transformation.Options => {
      // Combine all transformations while maintaining type safety
      return {
        ...defaultTransformations,
        width,
        ...extraTransformations,
        // Only add these if they're specified
        ...(quality && { quality }),
        ...(format && { fetch_format: format }),
      };
    };

    // Generate our responsive image URLs using the transformation builder
    const urls: ImageUrls = {
      desktop: cloudinary.url(imagePath, {
        transformation: [buildTransformation(1920)],
      }),
      tablet: cloudinary.url(imagePath, {
        transformation: [buildTransformation(1024)],
      }),
      mobile: cloudinary.url(imagePath, {
        transformation: [buildTransformation(640)],
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
    <div className={`${className}`}>
      <picture>
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
          className="rounded-lg w-full h-auto" // Add rounded-lg here
          style={{
            backgroundImage: `url(${imageUrls.placeholder})`,
            backgroundSize: "cover",
          }}
        />
      </picture>
    </div>
  );
}
