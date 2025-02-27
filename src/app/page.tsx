import Carousel from '@/components/Carousel';
import Featurettes from '@/components/Featurettes';
import Marketing from '@/components/Marketing';

export default function HomePage() {
    return (
        <main>
            <Carousel />
            <Marketing />
            <Featurettes />
        </main>
    );
}
