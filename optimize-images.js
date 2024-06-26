import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const optimizeImages = async () => {
    await imagemin(['src/assets/images/*.{jpg,png}'], {
        destination: 'dist/images',  // Save optimized images in a different directory
        plugins: [
            imageminWebp({ quality: 50 })
        ]
    });

    console.log('Images optimized');
};

optimizeImages();
