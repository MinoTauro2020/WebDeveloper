import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = ({ fullPage = false }) => {
  const blogPosts = [
    {
      slug: 'como-ahorrar-cambio-divisas',
      title: '10 Trucos para Ahorrar al Cambiar Divisas en 2025',
      excerpt: 'Descubre cómo conseguir las mejores tasas de cambio y evitar comisiones ocultas al convertir tu dinero. Guía completa para viajeros y expatriados.',
      date: '15 Enero 2025',
      readTime: '5 min',
      category: 'Ahorro',
      image: '💰'
    },
    {
      slug: 'mejores-apps-cambio-moneda',
      title: 'Las 7 Mejores Apps para Cambiar Moneda sin Comisiones',
      excerpt: 'Análisis completo de Wise, Revolut, N26 y más. Compara tasas, comisiones y funcionalidades para elegir la mejor app para tus necesidades.',
      date: '12 Enero 2025',
      readTime: '8 min',
      category: 'Tecnología',
      image: '📱'
    },
    {
      slug: 'cuando-cambiar-dolares-euros-2025',
      title: '¿Cuándo es el Mejor Momento para Cambiar Dólares a Euros en 2025?',
      excerpt: 'Análisis del mercado Forex, predicciones de expertos y factores económicos que influyen en el tipo de cambio EUR/USD este año.',
      date: '10 Enero 2025',
      readTime: '6 min',
      category: 'Análisis',
      image: '📈'
    },
    {
      slug: 'entender-tasas-cambio',
      title: 'Cómo Entender las Tasas de Cambio: Guía para Principiantes',
      excerpt: 'Todo lo que necesitas saber sobre tipos de cambio, factores que los afectan y cómo interpretar las fluctuaciones del mercado de divisas.',
      date: '8 Enero 2025',
      readTime: '7 min',
      category: 'Educación',
      image: '🎓'
    }
  ];

  const displayPosts = fullPage ? blogPosts : blogPosts.slice(0, 3);

  return (
    <div className={fullPage ? 'max-w-6xl mx-auto' : 'max-w-5xl mx-auto'} data-testid="blog-section">
      {!fullPage && (
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            📝 Blog de Finanzas y Divisas
          </h2>
          <p className="text-white/90 text-lg">
            Artículos, guías y consejos para aprovechar mejor tus conversiones de moneda
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayPosts.map((post, index) => (
          <Link 
            key={post.slug} 
            to={`/blog/${post.slug}`}
            className="block"
            data-testid={`blog-post-${index}`}
          >
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex items-center justify-center">
                <span className="text-6xl">{post.image}</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-indigo-600 font-semibold text-sm hover:text-indigo-700">
                    Leer más →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {!fullPage && (
        <div className="text-center mt-8">
          <Link 
            to="/blog" 
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
            data-testid="view-all-posts"
          >
            Ver todos los artículos 👉
          </Link>
        </div>
      )}

      {/* Schema.org Blog markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Blog de ConvertidorDivisas.es",
          "description": "Artículos y guías sobre conversión de divisas, finanzas personales y ahorro",
          "url": "https://convertidordivisas.es/blog",
          "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.date,
            "url": `https://convertidordivisas.es/blog/${post.slug}`
          }))
        })}
      </script>
    </div>
  );
};

export default BlogSection;