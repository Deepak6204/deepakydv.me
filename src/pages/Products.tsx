import Header from '@/components/Header';
import Footer from '@/components/Footer';

const products = [
  {
    title: 'Reminder',
    subtitle: 'Quick Taskbar Note Taker',
    description:
      'A windows note-taking app which stays in your taskbar. Opens up instantly on Ctrl + Alt + N. Type your message quickly and view your remaining task number shown dynamically as a badge.',
    image:
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=400&fit=crop',
    technologies: ['Electron', 'React', 'Node.js', 'Desktop App', 'Windows'],
    link: 'https://drive.google.com/file/d/1zDayUEGFRDFEh1vCMi-7Ev6DX7dMHXf9/view?usp=sharing',
    metric: 'Instant',
    metricLabel: 'Capture',
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <Header />
      <main className="py-32 px-8 bg-surface-container-low min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h1 className="font-headline text-5xl font-extrabold tracking-tight text-on-surface">
                Live Products
              </h1>
              <p className="text-on-surface-variant max-w-lg text-lg">
                Independently built applications ready for use. Focused on
                solving real-world friction unconditionally.
              </p>
            </div>
            <div className="h-px flex-1 bg-outline-variant/10 mx-8 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[24px] bg-surface-container p-1 transition-transform duration-500 hover:scale-[1.01]"
              >
                <div className="bg-surface-container rounded-[22px] overflow-hidden flex flex-col h-full">
                  <div className="aspect-[16/9] w-full bg-surface-container-highest relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                      alt={product.title}
                      src={product.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md text-[10px] font-bold text-primary uppercase">
                        Live Tool
                      </span>
                    </div>
                  </div>
                  <div className="p-8 space-y-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-headline text-2xl font-bold text-on-surface mb-1">
                          {product.title}
                        </h3>
                        <div className="text-xs font-semibold text-secondary uppercase tracking-wider">
                          {product.subtitle}
                        </div>
                      </div>
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed flex-1">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {product.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/60 bg-surface-container-highest px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-2xl mt-4 shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                    >
                      Download App
                      <span className="material-symbols-outlined text-sm">
                        download
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
