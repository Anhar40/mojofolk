

export const SeoProject = ({ seoProjects }) => (
    <>
        {seoProjects ? (
            <meta property="og:image" content={seoProjects} />
        ) : (
            <>
                <title>Mojo Folks - Portofolio & Project</title>
                <meta name="description" content="Lihat project dan portofolio Mojo Folks. Kami telah membantu bisnis dari berbagai industri dengan solusi IT dan website kreatif." />
                <meta name="keywords" content="Portofolio Website Mataram, IT Konsultan Lombok, IT Konsultan Mataram, IT Konsultan NTB, Project IT Lombok, Hasil Pekerjaan Mojo Folks, Web Developer NTB, Project Mojo Folks" />

                {/* Open Graph */}
                <meta property="og:title" content="Mojo Folks - Project & Portofolio" />
                <meta property="og:description" content="Dokumentasi project IT dan website dari Mojo Folks untuk berbagai klien dan bisnis." />
                <meta property="og:image" content="https://mojofolks.com/assets/img/digital era.webp" />
                <meta property="og:url" content="https://mojofolks.com/project" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Mojo Folks - Project & Portofolio IT" />
                <meta name="twitter:description" content="Hasil kerja kreatif Mojo Folks dalam pembuatan website & solusi IT di Lombok, NTB." />
                <meta name="twitter:image" content="https://mojofolks.com/assets/img/digital era.webp" />
            </>
        )}
    </>
);
export default SeoProject;